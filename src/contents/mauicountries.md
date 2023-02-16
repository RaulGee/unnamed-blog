---
title: Consuming Rest APIs with .NET MAUI
author: Raul Guirado
datetime: 2023-02-10T02:05:51.000+00:00
featured: true
draft: false
tags:
  - C#
  - .NET
  - MAUI
  - Web APIs
  - Apps
description: "In this post, we will explore how to consume web APIs with .NET MAUI, using the RESTcountries API as an example."
---

.NET Multi-platform App UI (MAUI) is a UI framework for building native cross-platform applications. One of the key features of modern mobile and desktop applications is the ability to consume web APIs. We'll explore how to consume web APIs with .NET MAUI, using the RESTcountries API as an example.

## Table of contents

## Create a new MAUI project

To get started, create a new .NET MAUI project. You can do this using the dotnet CLI or by using Visual Studio. I'll use Visual Studio to start our project up.

Open Visual Studio and select "Create a new project". In the "Create a new project" dialog, select "Mobile App (Maui)" and click "Next".

In the "Mobile App (Maui)" dialog, enter a name for your project and select your preferred platform. We will use Android for this tutorial, but the process is similar for other platforms.

## Add the RESTcountries API client

The RESTcountries API provides a RESTful interface for accessing country data. We will use this API as an example of how to consume web APIs with .NET MAUI.

To add the RESTcountries API client, run the following command in your terminal:

```bash
  dotnet add package RestSharp
```

This will add the RestSharp package to your project, which is a popular REST API client for .NET.

## Create a service to handle API requests

Next, create a new service to handle HTTP requests and responses. This service will be responsible for retrieving data from the RESTcountries API.

Create a new class file named "CountryService.cs" in your project and add the following code:

```csharp
  using RestSharp;

  public class CountryService
  {
      private readonly RestClient _client;

      public CountryService()
      {
          _client = new RestClient("https://restcountries.com/v3.1/");
      }

      public string GetCountryNameByCode(string code)
      {
          var request = new RestRequest($"alpha/{code}", DataFormat.Json);
          var response = _client.Get(request);

          if (response.StatusCode == System.Net.HttpStatusCode.OK)
          {
              return response.Content;
          }

          return null;
      }
  }
```

This code creates a new RestClient instance for the RESTcountries API and defines a method for retrieving country data by code. The method sends a GET request to the API using the RestSharp client and returns the response content.

## Use the service in your app

Finally, we will use the service in our application to retrieve data from the RESTcountries API. Open the "MainPage.xaml.cs" file in your code editor and replace the code in the "OnAppearing" method with the following code:

```csharp
  private readonly CountryService _countryService;

  public MainPage()
  {
      InitializeComponent();

      _countryService = new CountryService();
  }

  protected override void OnAppearing()
  {
      base.OnAppearing();

      var countryName = _countryService.GetCountryNameByCode("usa");
      CountryNameLabel.Text = countryName;
  }
```

This code creates a new instance of the CountryService class and calls the GetCountryNameByCode method to retrieve the name of a country by code. The name is then set as the text for a label in the UI.

## Run the app

To run the app, use Visual Studio to build and deploy the app to your preferred platform. When you open the app, it should display the name of the country retrieved from the RESTcountries API.
