/* eslint-disable header/header */

/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2020-08-27T22:10:01.007Z; */
import { newAttribute, newMeasure, idRef } from "@gooddata/sdk-model";
/**
 * Attribute Title: Campaign Category
 * Display Form ID: attr.campaign_channels.category
 */

export const CampaignCategory = newAttribute(
  "label.campaign_channels.category"
);
/**
 * Attribute Title: Campaign Channel ID
 * Display Form ID: attr.campaign_channels.campaign_channel_id
 */

export const CampaignChannelID = newAttribute(
  "label.campaign_channels.campaign_channel_id"
);
/**
 * Attribute Title: Campaign ID
 * Display Form ID: attr.campaigns.campaign_id
 */

export const CampaignID = newAttribute("label.campaigns.campaign_id");
/**
 * Attribute Title: Campaign Name
 * Display Form ID: attr.campaigns.campaign_name
 */

export const CampaignName = newAttribute("label.campaigns.campaign_name");
/**
 * Attribute Title: Campaign Type
 * Display Form ID: attr.campaign_channels.type
 */

export const CampaignType = newAttribute("label.campaign_channels.type");
/**
 * Attribute Title: Customer ID
 * Display Form ID: attr.csv_order_lines.customer_id
 */

export const CustomerID = newAttribute("label.csv_order_lines.customer_id");
/**
 * Attribute Title: Customer Name
 * Display Form ID: attr.csv_order_lines.customer_name
 */

export const CustomerName = newAttribute("label.csv_order_lines.customer_name");
/**
 * Attribute Title: Customer Region
 * Display Form ID: attr.customers.customerregion
 */

export const CustomerRegion = newAttribute("label.customers.customerregion");
/**
 * Attribute Title: Customer State
 * Display Form ID: attr.csv_order_lines.state
 */

export const CustomerState = newAttribute("label.csv_order_lines.state");
/**
 * Attribute Title: Order ID
 * Display Form ID: attr.csv_order_lines.order_id
 */

export const OrderID = newAttribute("label.csv_order_lines.order_id");
/**
 * Attribute Title: Order Line ID
 * Display Form ID: attr.csv_order_lines.order_line_id
 */

export const OrderLineID = newAttribute("label.csv_order_lines.order_line_id");
/**
 * Attribute Title: Order Status
 * Display Form ID: attr.csv_order_lines.order_status
 */

export const OrderStatus = newAttribute("label.csv_order_lines.order_status");
/**
 * Attribute Title: Product
 * Display Form ID: attr.csv_order_lines.product_name
 */

export const Product = newAttribute("label.csv_order_lines.product_name");
/**
 * Attribute Title: Product Category
 * Display Form ID: attr.csv_order_lines.category
 */

export const ProductCategory = newAttribute("label.csv_order_lines.category");
/**
 * Attribute Title: Product ID
 * Display Form ID: attr.csv_order_lines.product_id
 */

export const ProductID = newAttribute("label.csv_order_lines.product_id");
/**
 * Metric Title: # of Active Customers
 * Metric ID: abwjvygedcPi
 * Metric Type: MAQL Metric
 */

export const NrOfActiveCustomers = newMeasure(idRef("abwjvygedcPi", "measure"));
/**
 * Metric Title: # of Orders
 * Metric ID: abJgSd1seIjM
 * Metric Type: MAQL Metric
 */

export const NrOfOrders = newMeasure(idRef("abJgSd1seIjM", "measure"));
/**
 * Metric Title: # of Top Customers
 * Metric ID: acgjsXfgao3v
 * Metric Type: MAQL Metric
 */

export const NrOfTopCustomers = newMeasure(idRef("acgjsXfgao3v", "measure"));
/**
 * Metric Title: # of Valid Orders
 * Metric ID: abjgThcwhbxs
 * Metric Type: MAQL Metric
 */

export const NrOfValidOrders = newMeasure(idRef("abjgThcwhbxs", "measure"));
/**
 * Metric Title: % Revenue
 * Metric ID: acSjvKiha5pe
 * Metric Type: MAQL Metric
 */

export const PercentRevenue = newMeasure(idRef("acSjvKiha5pe", "measure"));
/**
 * Metric Title: % Revenue from Top 10 Customers
 * Metric ID: ab0jPyBdgzqH
 * Metric Type: MAQL Metric
 */

export const PercentRevenueFromTop10Customers = newMeasure(
  idRef("ab0jPyBdgzqH", "measure")
);
/**
 * Metric Title: % Revenue from Top 10 Products
 * Metric ID: acIjNnOUcbLJ
 * Metric Type: MAQL Metric
 */

export const PercentRevenueFromTop10Products = newMeasure(
  idRef("acIjNnOUcbLJ", "measure")
);
/**
 * Metric Title: % Revenue from Top 10% Customers
 * Metric ID: adkjNCxybKzk
 * Metric Type: MAQL Metric
 */

export const PercentRevenueFromTop10PercentCustomers = newMeasure(
  idRef("adkjNCxybKzk", "measure")
);
/**
 * Metric Title: % Revenue from Top 10% Products
 * Metric ID: aahjVDDGeOcC
 * Metric Type: MAQL Metric
 */

export const PercentRevenueFromTop10PercentProducts = newMeasure(
  idRef("aahjVDDGeOcC", "measure")
);
/**
 * Metric Title: % Revenue in Category
 * Metric ID: aaLjInK7d1HW
 * Metric Type: MAQL Metric
 */

export const PercentRevenueInCategory = newMeasure(
  idRef("aaLjInK7d1HW", "measure")
);
/**
 * Metric Title: % Revenue per Product
 * Metric ID: aa7jz0TWdM1j
 * Metric Type: MAQL Metric
 */

export const PercentRevenuePerProduct = newMeasure(
  idRef("aa7jz0TWdM1j", "measure")
);
/**
 * Metric Title: Campaign Spend
 * Metric ID: aaFlIZPDgumO
 * Metric Type: MAQL Metric
 */

export const CampaignSpend = newMeasure(idRef("aaFlIZPDgumO", "measure"));
/**
 * Metric Title: Order Amount
 * Metric ID: ab4gQSe3iBrr
 * Metric Type: MAQL Metric
 */

export const OrderAmount = newMeasure(idRef("ab4gQSe3iBrr", "measure"));
/**
 * Metric Title: Revenue
 * Metric ID: aaZgQ8Oqib25
 * Metric Type: MAQL Metric
 */

export const Revenue = newMeasure(idRef("aaZgQ8Oqib25", "measure"));
/**
 * Metric Title: Revenue (Clothing)
 * Metric ID: afcNseOVbs5T
 * Metric Type: MAQL Metric
 */

export const RevenueClothing = newMeasure(idRef("afcNseOVbs5T", "measure"));
/**
 * Metric Title: Revenue (Electronic)
 * Metric ID: aeENuVEEiDt1
 * Metric Type: MAQL Metric
 */

export const RevenueElectronic = newMeasure(idRef("aeENuVEEiDt1", "measure"));
/**
 * Metric Title: Revenue (Home)
 * Metric ID: afvNfa3ae3ll
 * Metric Type: MAQL Metric
 */

export const RevenueHome = newMeasure(idRef("afvNfa3ae3ll", "measure"));
/**
 * Metric Title: Revenue (Outdoor)
 * Metric ID: afFNgEAjcTuU
 * Metric Type: MAQL Metric
 */

export const RevenueOutdoor = newMeasure(idRef("afFNgEAjcTuU", "measure"));
/**
 * Metric Title: Revenue / Top 10
 * Metric ID: abejI8QfeQfs
 * Metric Type: MAQL Metric
 */

export const RevenueTop10 = newMeasure(idRef("abejI8QfeQfs", "measure"));
/**
 * Metric Title: Revenue / Top 10%
 * Metric ID: ab1jONzgezQt
 * Metric Type: MAQL Metric
 */

export const RevenueTop10Percent = newMeasure(idRef("ab1jONzgezQt", "measure"));
/**
 * Metric Title: Revenue per Customer
 * Metric ID: aaEjvRpdbi2z
 * Metric Type: MAQL Metric
 */

export const RevenuePerCustomer = newMeasure(idRef("aaEjvRpdbi2z", "measure"));
/**
 * Metric Title: Revenue per Dollar Spent
 * Metric ID: aaKlIuWsfsES
 * Metric Type: MAQL Metric
 */

export const RevenuePerDollarSpent = newMeasure(
  idRef("aaKlIuWsfsES", "measure")
);
/**
 * Metric Title: Total Revenue
 * Metric ID: abljxJ9HatLT
 * Metric Type: MAQL Metric
 */

export const TotalRevenue = newMeasure(idRef("abljxJ9HatLT", "measure"));
/**
 * Metric Title: Total Revenue (No Filters)
 * Metric ID: aa9jyo8Rc8gy
 * Metric Type: MAQL Metric
 */

export const TotalRevenueNoFilters = newMeasure(
  idRef("aa9jyo8Rc8gy", "measure")
);
/**
 * Fact Title: Budget
 * Fact ID: fact.campaign_channels.budget
 */

export const Budget = {
  /**
   * Fact Title: Budget
   * Fact ID: fact.campaign_channels.budget
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.campaign_channels.budget", "fact"), m =>
    m.aggregation("sum")
  ),
  /**
   * Fact Title: Budget
   * Fact ID: fact.campaign_channels.budget
   * Fact Aggregation: count
   */
  Count: newMeasure(idRef("fact.campaign_channels.budget", "fact"), m =>
    m.aggregation("count")
  ),
  /**
   * Fact Title: Budget
   * Fact ID: fact.campaign_channels.budget
   * Fact Aggregation: avg
   */
  Avg: newMeasure(idRef("fact.campaign_channels.budget", "fact"), m =>
    m.aggregation("avg")
  ),
  /**
   * Fact Title: Budget
   * Fact ID: fact.campaign_channels.budget
   * Fact Aggregation: min
   */
  Min: newMeasure(idRef("fact.campaign_channels.budget", "fact"), m =>
    m.aggregation("min")
  ),
  /**
   * Fact Title: Budget
   * Fact ID: fact.campaign_channels.budget
   * Fact Aggregation: max
   */
  Max: newMeasure(idRef("fact.campaign_channels.budget", "fact"), m =>
    m.aggregation("max")
  ),
  /**
   * Fact Title: Budget
   * Fact ID: fact.campaign_channels.budget
   * Fact Aggregation: median
   */
  Median: newMeasure(idRef("fact.campaign_channels.budget", "fact"), m =>
    m.aggregation("median")
  ),
  /**
   * Fact Title: Budget
   * Fact ID: fact.campaign_channels.budget
   * Fact Aggregation: runsum
   */
  Runsum: newMeasure(idRef("fact.campaign_channels.budget", "fact"), m =>
    m.aggregation("runsum")
  )
};
/**
 * Fact Title: Price
 * Fact ID: fact.csv_order_lines.price
 */

export const Price = {
  /**
   * Fact Title: Price
   * Fact ID: fact.csv_order_lines.price
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.csv_order_lines.price", "fact"), m =>
    m.aggregation("sum")
  ),
  /**
   * Fact Title: Price
   * Fact ID: fact.csv_order_lines.price
   * Fact Aggregation: count
   */
  Count: newMeasure(idRef("fact.csv_order_lines.price", "fact"), m =>
    m.aggregation("count")
  ),
  /**
   * Fact Title: Price
   * Fact ID: fact.csv_order_lines.price
   * Fact Aggregation: avg
   */
  Avg: newMeasure(idRef("fact.csv_order_lines.price", "fact"), m =>
    m.aggregation("avg")
  ),
  /**
   * Fact Title: Price
   * Fact ID: fact.csv_order_lines.price
   * Fact Aggregation: min
   */
  Min: newMeasure(idRef("fact.csv_order_lines.price", "fact"), m =>
    m.aggregation("min")
  ),
  /**
   * Fact Title: Price
   * Fact ID: fact.csv_order_lines.price
   * Fact Aggregation: max
   */
  Max: newMeasure(idRef("fact.csv_order_lines.price", "fact"), m =>
    m.aggregation("max")
  ),
  /**
   * Fact Title: Price
   * Fact ID: fact.csv_order_lines.price
   * Fact Aggregation: median
   */
  Median: newMeasure(idRef("fact.csv_order_lines.price", "fact"), m =>
    m.aggregation("median")
  ),
  /**
   * Fact Title: Price
   * Fact ID: fact.csv_order_lines.price
   * Fact Aggregation: runsum
   */
  Runsum: newMeasure(idRef("fact.csv_order_lines.price", "fact"), m =>
    m.aggregation("runsum")
  )
};
/**
 * Fact Title: Quantity
 * Fact ID: fact.csv_order_lines.quantity
 */

export const Quantity = {
  /**
   * Fact Title: Quantity
   * Fact ID: fact.csv_order_lines.quantity
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.csv_order_lines.quantity", "fact"), m =>
    m.aggregation("sum")
  ),
  /**
   * Fact Title: Quantity
   * Fact ID: fact.csv_order_lines.quantity
   * Fact Aggregation: count
   */
  Count: newMeasure(idRef("fact.csv_order_lines.quantity", "fact"), m =>
    m.aggregation("count")
  ),
  /**
   * Fact Title: Quantity
   * Fact ID: fact.csv_order_lines.quantity
   * Fact Aggregation: avg
   */
  Avg: newMeasure(idRef("fact.csv_order_lines.quantity", "fact"), m =>
    m.aggregation("avg")
  ),
  /**
   * Fact Title: Quantity
   * Fact ID: fact.csv_order_lines.quantity
   * Fact Aggregation: min
   */
  Min: newMeasure(idRef("fact.csv_order_lines.quantity", "fact"), m =>
    m.aggregation("min")
  ),
  /**
   * Fact Title: Quantity
   * Fact ID: fact.csv_order_lines.quantity
   * Fact Aggregation: max
   */
  Max: newMeasure(idRef("fact.csv_order_lines.quantity", "fact"), m =>
    m.aggregation("max")
  ),
  /**
   * Fact Title: Quantity
   * Fact ID: fact.csv_order_lines.quantity
   * Fact Aggregation: median
   */
  Median: newMeasure(idRef("fact.csv_order_lines.quantity", "fact"), m =>
    m.aggregation("median")
  ),
  /**
   * Fact Title: Quantity
   * Fact ID: fact.csv_order_lines.quantity
   * Fact Aggregation: runsum
   */
  Runsum: newMeasure(idRef("fact.csv_order_lines.quantity", "fact"), m =>
    m.aggregation("runsum")
  )
};
/**
 * Fact Title: Spend
 * Fact ID: fact.campaign_channels.spend
 */

export const Spend = {
  /**
   * Fact Title: Spend
   * Fact ID: fact.campaign_channels.spend
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.campaign_channels.spend", "fact"), m =>
    m.aggregation("sum")
  ),
  /**
   * Fact Title: Spend
   * Fact ID: fact.campaign_channels.spend
   * Fact Aggregation: count
   */
  Count: newMeasure(idRef("fact.campaign_channels.spend", "fact"), m =>
    m.aggregation("count")
  ),
  /**
   * Fact Title: Spend
   * Fact ID: fact.campaign_channels.spend
   * Fact Aggregation: avg
   */
  Avg: newMeasure(idRef("fact.campaign_channels.spend", "fact"), m =>
    m.aggregation("avg")
  ),
  /**
   * Fact Title: Spend
   * Fact ID: fact.campaign_channels.spend
   * Fact Aggregation: min
   */
  Min: newMeasure(idRef("fact.campaign_channels.spend", "fact"), m =>
    m.aggregation("min")
  ),
  /**
   * Fact Title: Spend
   * Fact ID: fact.campaign_channels.spend
   * Fact Aggregation: max
   */
  Max: newMeasure(idRef("fact.campaign_channels.spend", "fact"), m =>
    m.aggregation("max")
  ),
  /**
   * Fact Title: Spend
   * Fact ID: fact.campaign_channels.spend
   * Fact Aggregation: median
   */
  Median: newMeasure(idRef("fact.campaign_channels.spend", "fact"), m =>
    m.aggregation("median")
  ),
  /**
   * Fact Title: Spend
   * Fact ID: fact.campaign_channels.spend
   * Fact Aggregation: runsum
   */
  Runsum: newMeasure(idRef("fact.campaign_channels.spend", "fact"), m =>
    m.aggregation("runsum")
  )
};
/**
 * Attribute Title: Year (Date)
 * Display Form ID: date.year
 */

export const DateYear = newAttribute("date.year.default");
/**
 * Attribute Title: Quarter (Date)
 * Display Form ID: date.quarter.in.year
 */

export const DateQuarter = newAttribute("date.quarter.in.year.default");
export const DateWeekSunSatYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Date)
   * Display Form ID: date.week.wk_year
   */
  WeekNrYear: newAttribute("date.week.wk_year"),
  /**
   * Display Form Title: Week Starting (Date)
   * Display Form ID: date.week.starting
   */
  WeekStarting: newAttribute("date.week.starting"),
  /**
   * Display Form Title: From - To (Date)
   * Display Form ID: date.week.from_to
   */
  FromTo: newAttribute("date.week.from_to"),
  /**
   * Display Form Title: Week #/Year (Cont.) (Date)
   * Display Form ID: date.week.wk_year_cont
   */
  WeekNrYear_1: newAttribute("date.week.wk_year_cont"),
  /**
   * Display Form Title: Wk/Qtr/Year (Cont.) (Date)
   * Display Form ID: date.week.wk_qtr_year_cont
   */
  WkQtrYear: newAttribute("date.week.wk_qtr_year_cont"),
  /**
   * Display Form Title: Wk/Qtr/Year (Date)
   * Display Form ID: date.week.wk_qtr_year
   */
  WkQtrYear_1: newAttribute("date.week.wk_qtr_year")
};
/**
 * Attribute Title: Week (Sun-Sat) (Date)
 * Display Form ID: date.week.in.year
 */

export const DateWeekSunSat = newAttribute("date.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date)
 * Display Form ID: date.week.in.quarter
 */

export const DateWeekSunSatOfQtr = newAttribute(
  "date.week.in.quarter.number_us"
);
export const DateWeekMonSunYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Date)
   * Display Form ID: date.euweek.wk_year
   */
  WeekNrYear: newAttribute("date.euweek.wk_year"),
  /**
   * Display Form Title: Week Starting (Date)
   * Display Form ID: date.euweek.starting
   */
  WeekStarting: newAttribute("date.euweek.starting"),
  /**
   * Display Form Title: From - To (Date)
   * Display Form ID: date.euweek.from_to
   */
  FromTo: newAttribute("date.euweek.from_to")
};
/**
 * Attribute Title: Week (Mon-Sun) (Date)
 * Display Form ID: date.euweek.in.year
 */

export const DateWeekMonSun = newAttribute("date.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date)
 * Display Form ID: date.euweek.in.quarter
 */

export const DateWeekMonSunOfQtr = newAttribute(
  "date.euweek.in.quarter.number_eu"
);
export const DateMonth = {
  /**
   * Display Form Title: Short (Jan) (Date)
   * Display Form ID: date.month.in.year.short
   */
  Short: newAttribute("date.month.in.year.short"),
  /**
   * Display Form Title: Long (January) (Date)
   * Display Form ID: date.month.in.year.long
   */
  Long: newAttribute("date.month.in.year.long"),
  /**
   * Display Form Title: Number (M1) (Date)
   * Display Form ID: date.month.in.year.number
   */
  Number: newAttribute("date.month.in.year.number"),
  /**
   * Display Form Title: M/Q (M1/Q1) (Date)
   * Display Form ID: date.month.in.year.m_q
   */
  MQ: newAttribute("date.month.in.year.m_q")
};
/**
 * Attribute Title: Month of Quarter (Date)
 * Display Form ID: date.month.in.quarter
 */

export const DateMonthOfQuarter = newAttribute("date.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Date)
 * Display Form ID: date.day.in.year
 */

export const DateDayOfYear = newAttribute("date.day.in.year.default");
export const DateDayOfWeekSunSat = {
  /**
   * Display Form Title: Short (Sun) (Date)
   * Display Form ID: date.day.in.week.short
   */
  Short: newAttribute("date.day.in.week.short"),
  /**
   * Display Form Title: Long (Sunday) (Date)
   * Display Form ID: date.day.in.week.long
   */
  Long: newAttribute("date.day.in.week.long"),
  /**
   * Display Form Title: Number (1=Sunday) (Date)
   * Display Form ID: date.day.in.week.number
   */
  Number: newAttribute("date.day.in.week.number")
};
export const DateDayOfWeekMonSun = {
  /**
   * Display Form Title: Short (Mon) (Date)
   * Display Form ID: date.day.in.euweek.short
   */
  Short: newAttribute("date.day.in.euweek.short"),
  /**
   * Display Form Title: Long (Monday) (Date)
   * Display Form ID: date.day.in.euweek.long
   */
  Long: newAttribute("date.day.in.euweek.long"),
  /**
   * Display Form Title: Number (1=Monday) (Date)
   * Display Form ID: date.day.in.euweek.number
   */
  Number: newAttribute("date.day.in.euweek.number")
};
/**
 * Attribute Title: Day of Quarter (Date)
 * Display Form ID: date.day.in.quarter
 */

export const DateDayOfQuarter = newAttribute("date.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Date)
 * Display Form ID: date.day.in.month
 */

export const DateDayOfMonth = newAttribute("date.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Date)
 * Display Form ID: date.quarter
 */

export const DateQuarterYear = newAttribute("date.quarter.short_us");
export const DateMonthYear = {
  /**
   * Display Form Title: Short (Jan 2010) (Date)
   * Display Form ID: date.month.short
   */
  Short: newAttribute("date.month.short"),
  /**
   * Display Form Title: Long (January 2010) (Date)
   * Display Form ID: date.month.long
   */
  Long: newAttribute("date.month.long"),
  /**
   * Display Form Title: Number (1/2010) (Date)
   * Display Form ID: date.month.number
   */
  Number: newAttribute("date.month.number")
};
export const DateDate = {
  /**
   * Display Form Title: mm/dd/yyyy (Date)
   * Display Form ID: date.date.day.us.mm_dd_yyyy
   */
  MmDdYyyy: newAttribute("date.date.day.us.mm_dd_yyyy"),
  /**
   * Display Form Title: yyyy-mm-dd (Date)
   * Display Form ID: date.date.day.yyyy_mm_dd
   */
  YyyyMmDd: newAttribute("date.date.day.yyyy_mm_dd"),
  /**
   * Display Form Title: m/d/yy (no leading zeroes) (Date)
   * Display Form ID: date.date.day.us.m_d_yy
   */
  MDYy: newAttribute("date.date.day.us.m_d_yy"),
  /**
   * Display Form Title: Long (Mon, Jan 1, 2010) (Date)
   * Display Form ID: date.date.day.us.long
   */
  Long: newAttribute("date.date.day.us.long"),
  /**
   * Display Form Title: dd/mm/yyyy (Date)
   * Display Form ID: date.date.day.uk.dd_mm_yyyy
   */
  DdMmYyyy: newAttribute("date.date.day.uk.dd_mm_yyyy"),
  /**
   * Display Form Title: dd-mm-yyyy (Date)
   * Display Form ID: date.date.day.eu.dd_mm_yyyy
   */
  DdMmYyyy_1: newAttribute("date.date.day.eu.dd_mm_yyyy")
};
/**
 * Attribute Title: US Week Year (Date)
 * Display Form ID: date.year.for.week
 */

export const DateUSWeekYear = newAttribute("date.year.for.week.number");
/**
 * Attribute Title: US Week Quarter (Date)
 * Display Form ID: date.quarter.for.week
 */

export const DateUSWeekQuarter = newAttribute("date.quarter.for.week.number");
/**
 * Attribute Title: EU Week Year (Date)
 * Display Form ID: date.year.for.euweek
 */

export const DateEUWeekYear = newAttribute("date.year.for.euweek.number");
/**
 * Attribute Title: EU Week Quarter (Date)
 * Display Form ID: date.quarter.for.euweek
 */

export const DateEUWeekQuarter = newAttribute("date.quarter.for.euweek.number");
export const Insights = {
  /**
   * Insight Title: % Revenue per Product by Customer and Category
   * Insight ID: aaLjHIqDdLyg
   */
  PercentRevenuePerProductByCustomerAndCategory: "aaLjHIqDdLyg",
  /**
   * Insight Title: Top X Demo
   * Insight ID: aaejVzt7co9Z
   */
  TopXDemo: "aaejVzt7co9Z",
  /**
   * Insight Title: Revenue by Product
   * Insight ID: aaOjWocLe5aZ
   */
  RevenueByProduct: "aaOjWocLe5aZ",
  /**
   * Insight Title: Revenue per $ vs Spend by Campaign
   * Insight ID: aaHlJW8Piiyw
   */
  RevenuePer$VsSpendByCampaign: "aaHlJW8Piiyw",
  /**
   * Insight Title: Top 10 Products
   * Insight ID: aafs9dQFb85X
   */
  Top10Products: "aafs9dQFb85X",
  /**
   * Insight Title: Revenue Trend
   * Insight ID: aactay7Pgrwu
   */
  RevenueTrend: "aactay7Pgrwu",
  /**
   * Insight Title: Customers Trend
   * Insight ID: aautd5gAd4OE
   */
  CustomersTrend: "aautd5gAd4OE",
  /**
   * Insight Title: Product Categories Pie Chart
   * Insight ID: aahthxJriFZ8
   */
  ProductCategoriesPieChart: "aahthxJriFZ8",
  /**
   * Insight Title: Top 10 Customers
   * Insight ID: aaQtejsQd5X6
   */
  Top10Customers: "aaQtejsQd5X6",
  /**
   * Insight Title: Revenue and Quantity by Product and Category
   * Insight ID: aexGsWaGfAa2
   */
  RevenueAndQuantityByProductAndCategory: "aexGsWaGfAa2",
  /**
   * Insight Title: Top 10 Customers
   * Insight ID: agifB6TsgdrR
   */
  Top10Customers_1: "agifB6TsgdrR",
  /**
   * Insight Title: Product Saleability
   * Insight ID: ab8nXxb6fbUE
   */
  ProductSaleability: "ab8nXxb6fbUE",
  /**
   * Insight Title: Revenue by Category Trend
   * Insight ID: adXnWX29aQNR
   */
  RevenueByCategoryTrend: "adXnWX29aQNR",
  /**
   * Insight Title: Product Revenue Comparison (over previous period)
   * Insight ID: adwnWKSlaPYU
   */
  ProductRevenueComparisonOverPreviousPeriod: "adwnWKSlaPYU",
  /**
   * Insight Title: Campaign Spend
   * Insight ID: adGnXZr9fbYZ
   */
  CampaignSpend_1: "adGnXZr9fbYZ",
  /**
   * Insight Title: Product Breakdown
   * Insight ID: abJNsa4nbrNC
   */
  ProductBreakdown: "abJNsa4nbrNC",
  /**
   * Insight Title: Percentage of Customers by Region
   * Insight ID: aesTLykVhI02
   */
  PercentageOfCustomersByRegion: "aesTLykVhI02"
};
