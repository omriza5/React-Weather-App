const mockDailyForecasts = [
  {
    Date: "2020-01-17T07:00:00+07:00",
    EpochDate: 1579219200,
    Temperature: {
      Minimum: {
        Value: 76.0,
        Unit: "F",
        UnitType: 18
      },
      Maximum: {
        Value: 96.0,
        Unit: "F",
        UnitType: 18
      }
    },
    Day: {
      Icon: 2,
      IconPhrase: "Mostly sunny",
      HasPrecipitation: false
    },
    Night: {
      Icon: 33,
      IconPhrase: "Clear",
      HasPrecipitation: false
    },
    Sources: ["AccuWeather"],
    MobileLink:
      "http://m.accuweather.com/en/th/bangkok/318849/daily-weather-forecast/318849?day=1&lang=en-us",
    Link:
      "http://www.accuweather.com/en/th/bangkok/318849/daily-weather-forecast/318849?day=1&lang=en-us"
  },
  {
    Date: "2020-01-18T07:00:00+07:00",
    EpochDate: 1579305600,
    Temperature: {
      Minimum: {
        Value: 77.0,
        Unit: "F",
        UnitType: 18
      },
      Maximum: {
        Value: 94.0,
        Unit: "F",
        UnitType: 18
      }
    },
    Day: {
      Icon: 1,
      IconPhrase: "Sunny",
      HasPrecipitation: false
    },
    Night: {
      Icon: 33,
      IconPhrase: "Clear",
      HasPrecipitation: false
    },
    Sources: ["AccuWeather"],
    MobileLink:
      "http://m.accuweather.com/en/th/bangkok/318849/daily-weather-forecast/318849?day=2&lang=en-us",
    Link:
      "http://www.accuweather.com/en/th/bangkok/318849/daily-weather-forecast/318849?day=2&lang=en-us"
  },
  {
    Date: "2020-01-19T07:00:00+07:00",
    EpochDate: 1579392000,
    Temperature: {
      Minimum: {
        Value: 77.0,
        Unit: "F",
        UnitType: 18
      },
      Maximum: {
        Value: 93.0,
        Unit: "F",
        UnitType: 18
      }
    },
    Day: {
      Icon: 2,
      IconPhrase: "Mostly sunny",
      HasPrecipitation: false
    },
    Night: {
      Icon: 33,
      IconPhrase: "Clear",
      HasPrecipitation: false
    },
    Sources: ["AccuWeather"],
    MobileLink:
      "http://m.accuweather.com/en/th/bangkok/318849/daily-weather-forecast/318849?day=3&lang=en-us",
    Link:
      "http://www.accuweather.com/en/th/bangkok/318849/daily-weather-forecast/318849?day=3&lang=en-us"
  },
  {
    Date: "2020-01-20T07:00:00+07:00",
    EpochDate: 1579478400,
    Temperature: {
      Minimum: {
        Value: 77.0,
        Unit: "F",
        UnitType: 18
      },
      Maximum: {
        Value: 93.0,
        Unit: "F",
        UnitType: 18
      }
    },
    Day: {
      Icon: 3,
      IconPhrase: "Partly sunny",
      HasPrecipitation: false
    },
    Night: {
      Icon: 33,
      IconPhrase: "Clear",
      HasPrecipitation: false
    },
    Sources: ["AccuWeather"],
    MobileLink:
      "http://m.accuweather.com/en/th/bangkok/318849/daily-weather-forecast/318849?day=4&lang=en-us",
    Link:
      "http://www.accuweather.com/en/th/bangkok/318849/daily-weather-forecast/318849?day=4&lang=en-us"
  },
  {
    Date: "2020-01-21T07:00:00+07:00",
    EpochDate: 1579564800,
    Temperature: {
      Minimum: {
        Value: 77.0,
        Unit: "F",
        UnitType: 18
      },
      Maximum: {
        Value: 93.0,
        Unit: "F",
        UnitType: 18
      }
    },
    Day: {
      Icon: 6,
      IconPhrase: "Mostly cloudy",
      HasPrecipitation: false
    },
    Night: {
      Icon: 35,
      IconPhrase: "Partly cloudy",
      HasPrecipitation: false
    },
    Sources: ["AccuWeather"],
    MobileLink:
      "http://m.accuweather.com/en/th/bangkok/318849/daily-weather-forecast/318849?day=5&lang=en-us",
    Link:
      "http://www.accuweather.com/en/th/bangkok/318849/daily-weather-forecast/318849?day=5&lang=en-us"
  }
];

const mockAutocomplete = [
  {
    Version: 1,
    Key: "226396",
    Type: "City",
    Rank: 10,
    LocalizedName: "Tokyo"
  },
  {
    Version: 1,
    Key: "106770",
    Type: "City",
    Rank: 11,
    LocalizedName: "Taiyuan"
  },
  {
    Version: 1,
    Key: "106780",
    Type: "City",
    Rank: 11,
    LocalizedName: "Tianjin"
  },
  {
    Version: 1,
    Key: "58491",
    Type: "City",
    Rank: 13,
    LocalizedName: "Tongren"
  },
  {
    Version: 1,
    Key: "102324",
    Type: "City",
    Rank: 13,
    LocalizedName: "Tangshan"
  },
  {
    Version: 1,
    Key: "59573",
    Type: "City",
    Rank: 13,
    LocalizedName: "Taizhou"
  },
  {
    Version: 1,
    Key: "60198",
    Type: "City",
    Rank: 13,
    LocalizedName: "Tongliao"
  },
  {
    Version: 1,
    Key: "106571",
    Type: "City",
    Rank: 13,
    LocalizedName: "Tai'an"
  },
  {
    Version: 1,
    Key: "58055",
    Type: "City",
    Rank: 15,
    LocalizedName: "Tianshui"
  },
  {
    Version: 1,
    Key: "2333653",
    Type: "City",
    Rank: 15,
    LocalizedName: "Taizhou"
  },
  {
    Version: 1,
    Key: "101924",
    Type: "City",
    Rank: 10,
    LocalizedName: "Beijing"
  },
  {
    Version: 1,
    Key: "107487",
    Type: "City",
    Rank: 10,
    LocalizedName: "Bogota"
  },
  {
    Version: 1,
    Key: "178087",
    Type: "City",
    Rank: 10,
    LocalizedName: "Berlin"
  },
  {
    Version: 1,
    Key: "207375",
    Type: "City",
    Rank: 10,
    LocalizedName: "Baghdad"
  },
  {
    Version: 1,
    Key: "318849",
    Type: "City",
    Rank: 10,
    LocalizedName: "Bangkok"
  },
  {
    Version: 1,
    Key: "349727",
    Type: "City",
    Rank: 15,
    LocalizedName: "New York"
  },
  {
    Version: 1,
    Key: "187745",
    Type: "City",
    Rank: 30,
    LocalizedName: "New Delhi"
  },
  {
    Version: 1,
    Key: "328328",
    Type: "City",
    Rank: 10,
    LocalizedName: "London"
  },
  {
    Version: 1,
    Key: "182536",
    Type: "City",
    Rank: 10,
    LocalizedName: "Athens"
  },
  {
    Version: 1,
    Key: "316938",
    Type: "City",
    Rank: 10,
    LocalizedName: "Ankara"
  },
  {
    Version: 1,
    Key: "126995",
    Type: "City",
    Rank: 11,
    LocalizedName: "Alexandria"
  },
  {
    Version: 1,
    Key: "126831",
    Type: "City",
    Rank: 20,
    LocalizedName: "Addis Ababa"
  },
  {
    Version: 1,
    Key: "215854",
    Type: "City",
    Rank: 31,
    LocalizedName: "Tel Aviv"
  }
];

const mockCurrentWeather = [
  {
    LocalObservationDateTime: "2020-01-23T01:20:00+07:00",
    EpochTime: 1579717200,
    WeatherText: "Some clouds",
    WeatherIcon: 36,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: false,
    Temperature: {
      Metric: {
        Value: 27.6,
        Unit: "C",
        UnitType: 17
      },
      Imperial: {
        Value: 82,
        Unit: "F",
        UnitType: 18
      }
    },
    MobileLink:
      "http://m.accuweather.com/en/th/bangkok/318849/current-weather/318849?lang=en-us",
    Link:
      "http://www.accuweather.com/en/th/bangkok/318849/current-weather/318849?lang=en-us"
  }
];

const mockFavCities = [
  {
    Version: 1,
    Key: "215854",
    Type: "City",
    Rank: 31,
    LocalizedName: "Tel Aviv",
    Country: { ID: "IL", LocalizedName: "Israel" },
    AdministrativeArea: { ID: "TA", LocalizedName: "Tel Aviv" },
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  },
  {
    Version: 1,
    Key: "101924",
    Type: "City",
    Rank: 10,
    LocalizedName: "Beijing",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: { Value: 29.9, Unit: "C", UnitType: 17 },
        Imperial: { Value: 86, Unit: "F", UnitType: 18 }
      }
    }
  },
  {
    Version: 1,
    Key: "107487",
    Type: "City",
    Rank: 10,
    LocalizedName: "Bogota",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  },
  {
    Version: 1,
    Key: "178087",
    Type: "City",
    Rank: 10,
    LocalizedName: "Berlin",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  },
  {
    Version: 1,
    Key: "207375",
    Type: "City",
    Rank: 10,
    LocalizedName: "Baghdad",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  },
  {
    Version: 1,
    Key: "318849",
    Type: "City",
    Rank: 10,
    LocalizedName: "Bangkok",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  },
  {
    Version: 1,
    Key: "349727",
    Type: "City",
    Rank: 15,
    LocalizedName: "New York",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  },
  {
    Version: 1,
    Key: "187745",
    Type: "City",
    Rank: 30,
    LocalizedName: "New Delhi",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  },
  {
    Version: 1,
    Key: "328328",
    Type: "City",
    Rank: 10,
    LocalizedName: "London",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  },
  {
    Version: 1,
    Key: "182536",
    Type: "City",
    Rank: 10,
    LocalizedName: "Athens",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  },
  {
    Version: 1,
    Key: "316938",
    Type: "City",
    Rank: 10,
    LocalizedName: "Ankara",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  },
  {
    Version: 1,
    Key: "126995",
    Type: "City",
    Rank: 11,
    LocalizedName: "Alexandria",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  },
  {
    Version: 1,
    Key: "126831",
    Type: "City",
    Rank: 20,
    LocalizedName: "Addis Ababa",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  },
  {
    Version: 1,
    Key: "226396",
    Type: "City",
    Rank: 10,
    LocalizedName: "Tokyo",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  },
  {
    Version: 1,
    Key: "106770",
    Type: "City",
    Rank: 11,
    LocalizedName: "Taiyuan",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  },
  {
    Version: 1,
    Key: "106780",
    Type: "City",
    Rank: 11,
    LocalizedName: "Tianjin",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  },
  {
    Version: 1,
    Key: "58491",
    Type: "City",
    Rank: 13,
    LocalizedName: "Tongren",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  },
  {
    Version: 1,
    Key: "102324",
    Type: "City",
    Rank: 13,
    LocalizedName: "Tangshan",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  },
  {
    Version: 1,
    Key: "59573",
    Type: "City",
    Rank: 13,
    LocalizedName: "Taizhou",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  },
  {
    Version: 1,
    Key: "60198",
    Type: "City",
    Rank: 13,
    LocalizedName: "Tongliao",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  },
  {
    Version: 1,
    Key: "106571",
    Type: "City",
    Rank: 13,
    LocalizedName: "Tai'an",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  },
  {
    Version: 1,
    Key: "58055",
    Type: "City",
    Rank: 15,
    LocalizedName: "Tianshui",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  },
  {
    Version: 1,
    Key: "2333653",
    Type: "City",
    Rank: 15,
    LocalizedName: "Taizhou",
    currentWeather: {
      LocalObservationDateTime: "2020-01-25T16:50:00+07:00",
      EpochTime: 1579945800,
      WeatherText: "Partly sunny",
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 29.9,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 86,
          Unit: "F",
          UnitType: 18
        }
      }
    }
  }
];
export {
  mockDailyForecasts,
  mockAutocomplete,
  mockCurrentWeather,
  mockFavCities
};
