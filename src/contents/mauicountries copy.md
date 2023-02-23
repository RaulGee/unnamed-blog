---
title: Creating a basic web scraper with C#
author: Raul Guirado
datetime: 2023-02-21T02:05:51.000+00:00
featured: true
draft: false
tags:
  - C#
  - .NET
  - Web Scraping
  - Web APIs
  - Scripting
description: "In this post, we'll create a basic web scraper in C#!"
---

Web scraping is a technique used to extract information from websites. With the help of a web scraper, we can automate the process of collecting data from websites. This can be useful for tasks like data mining, price monitoring, and content aggregation

## Table of contents

Before we start, let's make sure we have the necessary tools installed. We will need Visual Studio and the HtmlAgilityPack library. If you don't have them already, you can download them from the following links:

[Visual Studio](https://visualstudio.microsoft.com/downloads/)
[HtmlAgilityPack](https://html-agility-pack.net/)

You'll want to start off by creating a new C# console application in visual studio.

## Install the HtmlAgilityPack library using the NuGet package manager.

Right-click on your project in the Solution Explorer and select "Manage NuGet Packages." Search for "HtmlAgilityPack" and click on "Install."

## Add the following using statements at the top of your Program.cs file:

```csharp
using System;
using System.Net;
using HtmlAgilityPack;
```

## Define the URL of the website you want to scrape.

For this example, we will scrape the top headlines from the BBC News website.

```csharp
string url = "https://www.bbc.com/news";
```

## Send a request to the website

Use the HttpWebRequest class to send a request to the website and retrieve its HTML content. We will also create an HtmlDocument object from the HTML content.

```csharp
HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
HttpWebResponse response = (HttpWebResponse)request.GetResponse();
HtmlDocument document = new HtmlDocument();
document.Load(response.GetResponseStream());
```

## Parse the HTML with HtmlAgilityPack

Use the HtmlAgilityPack library to parse the HTML and extract the data we want. In this case, we want to extract the text of the top headlines.

```csharp
var headlines = document.DocumentNode.Descendants("h3").Where(node => node.GetAttributeValue("class", "").Contains("gs-c-promo-heading__title")).ToList();
foreach (var headline in headlines)
{
    Console.WriteLine(headline.InnerText.Trim());
}
```

## Finished! Run your app!

Run the application and see the top headlines printed to the console.

That's it! You have now created a basic web scraper in C#. Of course, this is just a starting point. You can use this code as a basis for more complex web scraping tasks. Just remember to respect the website's terms of use and use web scraping responsibly.
