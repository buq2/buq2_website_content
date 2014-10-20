{
    "Title": "Audible altimeter part 1",
    "LongTitle": "Electronics project: Audible altimeter - Requirements",
    "Description": "I plan to build audible altimeter for next years skydiving season. Here are the requirements for the altimeter.",
    "DateCreated": "2014-10-06 17:44",
    "DateModified": "2014-10-06 19:23",
    "Icon": "/content_static/articles/default/icon.png",
    "Tags": ["skydiving", "audible altimeter", "electronics"],
    "CreateToc": true
}

---------- META END ----------

# Intro

As the skydiving season in Finland is nearing its end it is time to find something elso to do at weekends.
As I just got the A-license I have been gathering necessary equipment for the sport. Only the
audible altimeter is missing as I can not decide between Altimaster N3 and L&B Protrack ([^protrack], [^n3]).

I have always had problems to finish electronics projects and I think that it might be related
to the fact that the end result of the project would have not seen any actual use. By creating
something which is useful at one of my hobbies I hope that I have enough motivation to finish
the project.

Audible altimeters are used to alert skydivers with loud alarm when they pass certain altides in freefall or with the canopy.
In Finland the audible altimeter can only be used as a secondary altimeter as some kind of visual (digital or analog display)
altimeter is required by the regulations. As I'm going to be carrying a visual altimeter I feel it will be relatively
safe to test my own electronic projects while skydiving.

I'm using Cookie G3 ([^g3]) which has two small pockets (~5cm x ~5cm) for audibles. If the electronics
catches on fire I plan on installing simple cutaway system ([^g3-cutaway]) for the helmet .

Even if the project fails, I hope it will create good material for some other website ([^friday-freakout], [^fail-of-the-week]).

# Requirements

* Approximate size: 5cm x 5cm x 1cm
    * Neptune N3: 6.2cm x 4.3cm x 1.2cm
    * Optima II: 5.6cm x 4.1cm x 1.1cm
    * 5cm x 3.2cm x 1.6cm fits Cookie G3 nicely
    * Current PCB 50mm x 35mm
* USB rechargeable battery
* Audible alarm
* Relatively good altitude accuracy (+-50m) with small lag
* Simple logging capability

## Advanced options

* Accelerometer/attitude
* GPS
* Simple display
* Led indicator for the alarms as in Optima 2 ([^optima2])

# Links
[^friday-freakout]: [iLoveSkydiving.org: Friday freakout](http://iloveskydiving.org/?s=friday+freakout)
[^fail-of-the-week]: [Hackaday: Fail of the week](http://hackaday.com/category/hackaday-columns/fail-of-the-week-hackaday-columns/)
[^protrack]: [Larsen & Brusgaard: Protrack](http://www.l-and-b.dk/products/audible/protrack)
[^n3]: [Altimaster: N3](http://www.alti-2.com/content.php?144-N3_Product_Page)
[^g3-cutaway]: [Safety First TV Helmet Cutaway Idea for Cookie G3 and Fastex buckle helmets](http://www.youtube.com/watch?v=WuqJV3eRH0g)
[^g3]: [Cookie G3](http://www.flycookie.com/redirect.cfm?id=7)
[^optima2]: [Larsen & Brusgaard: Optima II](http://www.l-and-b.dk/products/audible/optima_ii)
