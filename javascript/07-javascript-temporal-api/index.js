const { Temporal } = require("@js-temporal/polyfill");

// 1. get current time
const currentTime = Temporal.Now.instant();
console.log(
  "Current date and time(without a specific time zone): ",
  currentTime.toString()
);
console.log("milliseconds: ", currentTime.epochMilliseconds);
console.log("nanoseconds: ", currentTime.epochNanoseconds);

// 2. create a custom data time
const dateTime = Temporal.PlainDateTime.from({
  year: 2018,
  month: 2, // no longer need to plus 1
  day: 10,
  hour: 8,
  minute: 12,
  second: 48,
});

console.log(dateTime.toString());

// 3. manipulate date and time
const newDateTime = dateTime.add({ months: 1 });
console.log(newDateTime.toString());

// 4. calculate difference
const dt1 = Temporal.PlainDate.from("2023-02-01");
const dt2 = Temporal.PlainDate.from("2023-02-05");
const diff = dt2.since(dt1);
console.log(diff.days);

// 5. format date and time
console.log(`${dt1.year}/${dt1.month}/${dt1.day}`);

// 6. 获取指定时区的时间
console.log(
  "With time zone: ",
  currentTime
    .toZonedDateTimeISO(new Temporal.TimeZone("Asia/Shanghai"))
    .toString()
);
