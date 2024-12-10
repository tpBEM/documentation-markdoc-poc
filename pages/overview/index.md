## Introduction

Welcome to the documentation for Trustpilot Public and Customer APIs. Here you will find all required details on our APIs, including technical concepts and formats, authentication methods, error codes and FAQs. The Public API provides you access to content available to the public on trustpilot.com. The Customer API provides access to features of our Business product available to merchants using Trustpilot. We use the exact same APIs for building our public website and business product, meaning that the APIs are highly available and that we are committed to their continued improvement and evolution. This documentation also contains the details needed to build integrations. However, technology partners interested in building an integration for our shared business users should begin with the section [Technology Partners](https://developers.trustpilot.com/partners).

## Business Unit Concept

Trustpilot uses the business unit concept as the collection point for all Trustpilot content for a website. The business unit hosts a company's rating, its reviews, and the company responses. A business unit has a unique ID, and is used throughout the APIs. A business unit refers to one main domain name (primary name), and it can be associated with other domain names or sub-domains (referral names).

{% image src="/images/dev-tp-business-unit-image-1.jpg" alt="Dev image 1" /%}

Trustpilot uses the business unit concept as the collection point for all Trustpilot content for a website; it hosts a company's rating, its reviews, and the company responses.

{% image src="/images/dev-tp-business-unit-image-2.jpg" alt="Dev image 2" /%}

A business user can access one or many business units.

{% image src="/images/dev-tp-business-unit-image-3.jpg" alt="Dev image 3" /%}

## Figuring out your Business Unit ID

For almost any integration, the first step is getting your Business Unit ID. The Business Unit ID is a unique key to your domain. If you collect reviews under multiple domains, each one will have its own Business Unit ID. To find your Business Unit ID(s) please use the [Find Business Unit API](https://developers.trustpilot.com/business-units-api#Find%20a%20business%20unit).

## Authentication

**The Public API** does not require authentication, as you simply need to pass your API key for each request. This key must be added to all calls:

- either as a query parameter, i.e.: {% redtext content="?apikey={key}" /%}
- or an HTTP header, i.e.: {% redtext content="apikey:{key}" /%}

**The Customer API** uses OAuth v2 with refresh. See the [Authentication](https://developers.trustpilot.com/authentication) page for full details.

## Schema

All API requests must be made over HTTPS. Empty values are included as null rather than omitted. All date/time responses are returned using ISO 8601 format using UTC.

## Data Formats

The API currently supports JSON as request and response format, and Cross-Origin Resource Sharing policy is enabled for Get requests. As an alternative solution to same origin policy limitations, requests can be made to return JSONP, by adding a query parameter called callback with the name of the JavaScript function to wrap the data, e.g.: {% redtext content="?callback=execute" /%}

## Cache

Some results are cached on our API servers. Cached results will also include HTTP header information about client cacheability.

## Rate Limiting guidelines

While we do not publish a rate limiting policy, we do have certain limits to the usage of the APIs. For normal use cases this will not be an issue, but we will make sure that if our APIs are called at a more than reasonable rate, certain limits will apply.

## Tips to avoid rate limiting

- Do not constantly pull data and instead use webhooks. [Learn more](https://support.trustpilot.com/hc/en-us/articles/115015822068-Manage-your-webhook-notifications) about how to set up Trustpilot's webhooks to get instant notifications about events such as new reviews, deleted reviews or revised reviews.
- Rather than generate an OAuth 2.0 access token for each transaction, reuse the valid token. See [authentication guidelines](https://developers.trustpilot.com/authentication) to learn more.
- Make sure that you are not calling Trustpilot APIs each time the front-end of your website is loaded. If you want to display reviews or ratings on your site, make sure that data is stored in your own backend and updated regularly, preferably using webhooks.
