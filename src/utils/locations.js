//TODO - transform into sqlite DB later on

export const locations = [
  {
    category: "pizza",
    associatedFilter: "pizzaFilter",
    title: "Sauced on Paseo",
    serviceOptions: "Dine-in · Takeout · No-contact delivery",
    rating: "4.5 (1,174)",
    hours: "SuMTWRFSa 8am-12am",
    address: "2912 Paseo, OKC",
    thumbnail: require("../../assets/images/locations/sop/sop.jpg"),
    coordinate: {
      latitude: 35.49891757672362,
      longitude: -97.52166760519061,
    },
  },
  {
    category: "pizza",
    associatedFilter: "pizzaFilter",
    title: "The Hall's Pizza Kitchen",
    serviceOptions: "Dine-in · Curbside pickup · Delivery",
    rating: "4.6 (1,623)",
    hours: "Su Closed\nMTWR 11am-10pm\nSa 11am-11pm",
    address: "1004 N Hudson Ave STE 106, OKC",
    thumbnail: require("../../assets/images/locations/thpk/thpk.jpg"),
    coordinate: {
      latitude: 35.47754000215201,
      longitude: -97.51831896740379,
    },
  },
  {
    category: "burger",
    associatedFilter: "burgersFilter",
    title: "Nic's Grill",
    serviceOptions: "Dine-in · Takeout · No delivery",
    rating: "4.6 (1,197)",
    hours: "Su Closed\nMTWRFSa 11am-2pm",
    address: "1201 N Pennsylvania Ave, OKC",
    thumbnail: require("../../assets/images/locations/ng/ng.jpg"),
    coordinate: {
      latitude: 35.48093461339461,
      longitude: -97.54800287178823,
    },
  },
  {
    category: "burger",
    associatedFilter: "burgersFilter",
    title: "Tucker's Onion Burger",
    serviceOptions: "Dine-in · Curbside pickup",
    rating: "4.6 (2,422)",
    hours: "SuMTWRFSa 11am-9pm",
    address: "324 NW 23rd St, OKC",
    thumbnail: require("../../assets/images/locations/tob/tob.jpg"),
    coordinate: {
      latitude: 35.49299217006498,
      longitude: -97.51855314077812,
    },
  },
  {
    category: "coffee",
    associatedFilter: "cafeFilter",
    title: "Harvey Bakery & Kitchen",
    serviceOptions: "Dine-in · Takeout · Delivery",
    rating: "4.6 (380)",
    hours: "Su Closed\nMTWRF 6am-6pm\nSa 7am-6pm",
    address: "301 NW 13th St Suite 100, OKC",
    thumbnail: require("../../assets/images/locations/hbk/hbk.jpg"),

    coordinate: {
      latitude: 35.48254697504061,
      longitude: -97.51760374444109,
    },
  },
  {
    category: "coffee",
    associatedFilter: "cafeFilter",
    title: "Coffee Slingers Roasters",
    serviceOptions: "Dine-in · Takeout · No delivery",
    rating: "4.4 (806)",
    hours: "Su Closed\nMTWRFS 6:30am-7pm",
    address: "1015 N Broadway Ave, OKC",
    thumbnail: require("../../assets/images/locations/csr/csr.jpg"),
    coordinate: {
      latitude: 35.477695960395025,
      longitude: -97.51430486383741,
    },
  },
];
