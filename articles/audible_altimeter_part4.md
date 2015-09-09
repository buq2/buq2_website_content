{
    "Title": "Audible altimeter part 4",
    "LongTitle": "Electronics project: Audible altimeter - Current consumption",
    "Description": "Tweaking current consumption of the audible altimeter",
    "DateCreated": "2015-08-13 19:58",
    "DateModified": "2015-08-13 19:58",
    "Icon": "/content_static/articles/default/icon.png",
    "Tags": ["skydiving", "audible altimeter", "electronics"],
    "CreateToc": true
}

---------- META END ----------

After testing the altimeter for about 20-30 jumps I concluded that
the short battery life was the most irritating limitation of the
altimeter for every day use.

At this stage the MCU was constantly running at 48MHz and display update
rate and sensor readings were done at 10/5Hz update rate. The current
consumption (without using the beeper) was approximately 27mA@4V which
should yild approximately 15 hours of usage with 400mAh battery.
Actual usage felt much shorter, maybe only about four or five hours.

Lowest voltage which allows the altimeter to boot up successfully is
around 3.0V. First signs of malfunction are the display turning off.
With 3.0V battery voltage the current consumption is about 23mA.

The beeper seemed to use additional 100mA (peak).

# Current consumption with 24MHz clock, idle

Current consumption ~17mA.

# Current consumption with 12MHz clock, idle

Current consumption ~11mA.

# Current consumption int main() {}

With default CPU clock.
Current consumption ~6mA.

# Current consumption with sleep (idle)

~20mA.

# Notes

These measurements are made with the first completed altimeter v3.0 which
had the MS5805-02BA01 barometer soldered, but not used (measurements
not read).
