---
page_title: What's New in Grafana v2.1
page_description: What's new in Grafana v2.1
page_keywords: grafana, new, changes, features, documentation
---

#What's new in Grafana v2.1
We've been working to implement many of the features you've requested since the release of 2.0 and are excited to announce Grafana 2.1 is now available.
More dynamic dashboards, an improved authentication engine and new data source support only scratches the surface - 
[Download Grafana 2.1 now](http://grafana.org/download), or dive in to see what's new below. 


##More Dynamic Dashboards
The Templating system is one of the most powerful and well-used features of Grafana. The 2.1 release brings numerous improvements that make Dashboards more dynamic than ever before.

### Multi-Value Template Select
Multi-Value Select allows for the selection of multiple template variables.
These variables can be used in any Panel to make them more dynamic, and automatically show only the desired data.
Multi-Value Select is also a basis for enabling Repeating Rows and Repeating Panels.

![Multi-Value Select](/img/v2/multi-select.gif "Multi-Value Select")
<br/><br/>

### Repeating Rows and Panels
It’s now possible to create a Dashboard that automatically adds (and removes) both Rows and Panels based on which template variables you have selected.
Any Row or Any Panel can be configured to repeat (duplicate itself) based on the Multi-Value Template variables selected.    

![Repeating Rows and Panels](/img/v2/panel-row-repeat.gif "Repeating Rows and Panels")
<br/><br/>

### Dashboard Links
To support better navigation between Dashboarads, it is possible to create custom and dynamic links from individual Panels to appropriate Dashboards.

You also have the ability to create a powerful and flexible top-level dashboard menu.    

![Dashboard Links](/img/v2/panel-link.png "Dashboard Links")
<br/><br/>

### Better local Dashboard support
Grafana can now index Dashboards saved locally as JSON from a given directory.

> ***Note:*** Saving local dashboards back the folder is not supported; this feature is meant for statically generated JSON dashboards.

- - -
<br/><br/>

## Improved Authentication Engine
New authentication methods add numerous options to manage users, roles and organizations. Grafana 2.1 also includes a "Read-only Editor" role which disables the query editor for that user.    

### LDAP Support
This highly requested feature now allows your Grafana users to login with their LDAP credentials. You can also specify mappings between LDAP group memberships and Grafana Organization user roles.    

### Basic Authentication Support
You can now authenticate against the Grafana API utilizing a simple username and password with basic HTTP authentication. This can be useful for provisioning and config management systems that need to utilize the API without having to create an API key.    

### User authentication Utilizing Headers
You can now authenticate utilizing a header (eg. X-Authenticated-User, or X-WEBAUTH-USER). Useful in situations with reverse proxies.


### New “Read-only Editor” User Role
There is a new User role available in this version of Grafana: “Read-only Editor”. This role behaves just like the Viewer role does in Grafana 2.0.
That is, you can edit graphs and queries but not save dashboards. The Viewer role has been modified in Grafana 2.1 so that users assigned this role
can no longer edit panels.

> ***Note:*** Even with this role assigned, Read-only Editors still have access to ALL metrics from that Datasource. This is not a way to achieve a true multitenant segregated environment with Grafana.

- - -
<br/><br/>

## Improved Data Source Support

### Improved InfluxDB 0.9 Support
We continue to make progress on fully supporting InfluxDB 0.9, but it has proven to be a bit of a moving target. This Grafana release brings a much improved query editor for InfluxDB 0.9

![InfluxDB Support](/img/v2/influx-query.gif "InfluxDB Support")
<br/><br/>


### OpenTSDB Data Source improvements
Grafana now supports template variable values lookup queries, as well as limiting tags by metric

> ***Note:*** OpenTSDB config option tsd.core.meta.enable_realtime_ts must enabled for OpenTSDB lookup api)


### New Data Source: KairosDB
Experimental support for the KairosDB is now shipping in Grafana. Thank you to [espenfjo](https://github.com/espenfjo) for their hard work in getting it to this point.

- - -
<br/><br/>

## Panel Improvements
Grafana 2.1 gives you even more flexibility customizing how individual panels render. Overriding the colors of specific series using regular expressions, changing how series stack, and allowing string values will help you better understand your data at a glance.

### Graph Panel
Keeping large numbers of metrics in a dashboard visually organized can be confusing. In Grafana 2.1, you can now define series color using regex and variables.
![Define series color using regex rule  ](/img/v2/regex_color.gif "Define series color using regex rule  ")

### Series Style Override
New series style override, negative-y transform and stack groups.
![Negative-y Transform](/img/v2/negative-y.png "Negative-y Transform")

![Negative-y Transform](/img/v2/negative-y-form.png "Negative-y Transform")
<br/><br/>

### String Values in Singlestat Panels
Now support string values - read more about [Singlestat Panels](../reference/singlestat.md)

- - -
<br/><br/>

## Even More Features and Enhancements
We've only skimmed the surface with the features listed above. To see everyting that's been added to Grafana 2.1 head over to the [issues section](https://github.com/grafana/grafana/issues?page=4&q=milestone%3A2.1+is%3Aclosed).    

### [Download Grafana 2.1 now](http://grafana.org/download)
