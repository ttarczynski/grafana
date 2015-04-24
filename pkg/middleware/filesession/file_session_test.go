package filesession

import (
	"fmt"
	"log"
	"os"
	"path"
	"sync"
	"testing"

	"github.com/grafana/grafana/pkg/util"
)

var provider *FileProvider
var messages = make(chan string)
var wg sync.WaitGroup

var numberOfConcurrentSessions = 1
var workerIterations = 100
var data = util.GetRandomString(10000)

func sessionTester(id string, t testing.TB) {
	defer wg.Done()

	for i := 0; i < workerIterations; i++ {
		sess, err := provider.Read(id)

		if err != nil {
			t.Fatal(err)
		}

		val := sess.Get("asd")
		if val != nil {
			if val.(string) != data {
				log.Fatalf("Session value not correct, %s", val)
			}
		} else {
			sess.Set("asd", data)
		}

		err = sess.Release()
		if err != nil {
			t.Fatal(err)
		}
	}
}

func Test_Filesession(t *testing.T) {
	messages = make(chan string)
	dir := path.Join(os.TempDir(), "data/sessions")
	defer os.RemoveAll(dir)

	provider = &FileProvider{}
	provider.Init(10000, dir)

	wg.Add(numberOfConcurrentSessions * 2)
	for i := 0; i < numberOfConcurrentSessions; i++ {
		go sessionTester(fmt.Sprintf("%06d", i), t)
		go sessionTester(fmt.Sprintf("%06d", i), t)
	}

	wg.Wait()
}
