{
    "Title": "Audible altimeter part 3",
    "LongTitle": "Electronics project: Audible altimeter - Assembling",
    "Description": "Assembling the PCB",
    "DateCreated": "2015-09-07 21:43",
    "DateModified": "2015-09-09 22:18",
    "Icon": "/content_static/articles/audible_altimeter/icon.jpg",
    "Tags": ["skydiving", "audible altimeter", "electronics"],
    "CreateToc": true
}

---------- META END ----------

The altimeter has been in use for approximately four months and nobody has died. Project is deemed great success and I can finally update the blog.

Actually now the PCB is in version 3 and fourth version is planned. More about progress of the PCB later.

# Previous versions

So currently the PCB is at version 3. Version 1 was very quick and rough layout (45mm x 80mm) just to get the project started. It also contained GPS module but the there were lots of mistakes while laying the board near the module and I could not get connection to any satellites. I will be building new PCB for the GPS module again this winter but I'm fairly sure that the GPS can not fit into the existing case as it requires quite large and intact ground plane.

![PCB version 1 with GPS and lots of green wire](/content_static/articles/audible_altimeter/build/small_version_1.jpg)

Second version was designed around small project case (30mm x 52mm) and contained mounting holes in each corner of the PCB. Micro-USB connector was planted on the long side of the PCB and for testing the buzzer there was two overlapping footprints for different buzzer components.

I ordered small laser cut acrylic case with 1mm wall thickness for the electronics but the case was too flimsy for actual use. The case laser cut profile was designed using [MakerCase](http://www.makercase.com/).

![PCB version 2 with acrylic case](/content_static/articles/audible_altimeter/build/small_version2.jpg)

# Stencil

Version 3 PCBs arrived after three weeks of waiting.

![Version 3 PCBs](/content_static/articles/audible_altimeter/build/small_pcbs.jpg)

Before starting the altimeter project I had decided to start using reflow soldering. I build small oven controller which uses thermocouple, solid state relay, PWM and PID to control the oven temperature. Stencil for the applying the solder was ordered from [OSH Stencils](https://www.oshstencils.com/).

![](/content_static/articles/audible_altimeter/build/small_stencil1.jpg)
![](/content_static/articles/audible_altimeter/build/small_stencil2.jpg)
![](/content_static/articles/audible_altimeter/build/small_stencil3.jpg)
![](/content_static/articles/audible_altimeter/build/small_stencil4.jpg)
![](/content_static/articles/audible_altimeter/build/small_stencil5.jpg)
![](/content_static/articles/audible_altimeter/build/small_stencil6.jpg)
![](/content_static/articles/audible_altimeter/build/small_stencil7.jpg)
![](/content_static/articles/audible_altimeter/build/small_stencil8.jpg)
![](/content_static/articles/audible_altimeter/build/small_stencil9.jpg)

# Laying components

Most of the components were from [Digikey](http://www.digikey.com) but only place I could find the display was [Mouse](http://www.mouser.com).

![Components](/content_static/articles/audible_altimeter/build/small_pile_of_components.jpg)
![Major components ready to be placed](/content_static/articles/audible_altimeter/build/small_major_components.jpg)
![Smaller components were placed first. Most of the resistors and capacitors are 0603 size](/content_static/articles/audible_altimeter/build/small_laying_components1.jpg)
![All components laid. Few footprints were left empty as accelerometer and second and third barometer were left out.](/content_static/articles/audible_altimeter/build/small_laying_components2.jpg)
![Close-up](/content_static/articles/audible_altimeter/build/small_laying_components3.jpg)

# Reflow soldering

![PCB was reflow soldered in small pizza oven which was connected to temperature controller (visible in the back). Temperature was monitored using terminal application.](/content_static/articles/audible_altimeter/build/small_baking_goods.jpg)

# Bad component connections

Applying the solder and the whole reflow soldering is not fully in my control as some of the components "tombstoned" (other end of the component lifted from the pad) or solder bridges were formed.

![I used head mounted magnifier for inspection. This one has quite poor optical quality and ergonomics](/content_static/articles/audible_altimeter/build/small_workbench.jpg)
![Bad connection / tombstoning](/content_static/articles/audible_altimeter/build/small_bad_connection1.jpg)
![Bad connection / tombstoning](/content_static/articles/audible_altimeter/build/small_bad_connection2.jpg)
![Solder bridge under removed capacitor which shorted the 3.3V rail to ground.](/content_static/articles/audible_altimeter/build/small_solder_bridge.jpg)

# Version 3 - Bad traces

After assembling the PCB the USB failed to work. After pullimg my hair for few minutes I noticed that some of the USB traces were missing. This was fixed with small jumper wire.

I contacted OSH Park and let them know about the bad quality just so that process could be improved. They replied quickly and offered refund or free rush order + shipping. Good customer support!

![Missing traces](/content_static/articles/audible_altimeter/build/missing_traces1.jpg)
![Good PCB](/content_static/articles/audible_altimeter/build/missing_traces2.jpg)

# First boot

The MCU was programmed using Atmel ICE programmer. I'm using [Tag-Connect](http://www.tag-connect.com/) cables as they have quite small footprint.

![Programming](/content_static/articles/audible_altimeter/build/small_programming.jpg)

![After few hours of work, it works!](/content_static/articles/audible_altimeter/build/small_it_works.jpg)

# Display connector

As the display connector is only component on the back side of the PCB I soldered it by hand.

![](/content_static/articles/audible_altimeter/build/small_display_connector1.jpg)
![](/content_static/articles/audible_altimeter/build/small_display_connector2.jpg)
![](/content_static/articles/audible_altimeter/build/small_display_connector3.jpg)
![](/content_static/articles/audible_altimeter/build/small_display_connector4.jpg)
![Working display. These images are actually from second build which I gave to a friend. The first one I'm using inside the helmet. My friend is using his mostly under canopy as it is wrist mounted.](/content_static/articles/audible_altimeter/build/small_working_display.jpg)

# Case

![The PCB was designed to fit into one of the cheap but sturdy plastic cases](/content_static/articles/audible_altimeter/build/small_case1.jpg)
![First top of the case was removed](/content_static/articles/audible_altimeter/build/small_case2.jpg)
![](/content_static/articles/audible_altimeter/build/small_case3.jpg)
![Then the edges were sanded smooth](/content_static/articles/audible_altimeter/build/small_case4.jpg)
![I used two roughness of sandpaper](/content_static/articles/audible_altimeter/build/small_case5.jpg)
![Extra parts of version 2 case were used as new top/window](/content_static/articles/audible_altimeter/build/small_case6.jpg)
![](/content_static/articles/audible_altimeter/build/small_case7.jpg)
![Holes for the buttons buzzer](/content_static/articles/audible_altimeter/build/small_case8.jpg)
![](/content_static/articles/audible_altimeter/build/small_case9.jpg)
![Cutting holes for the USB and power switch](/content_static/articles/audible_altimeter/build/small_case10.jpg)
![](/content_static/articles/audible_altimeter/build/small_case11.jpg)
![Looking "good". This display is actually LS013B4DN04. LS013B7DH03 is on the right. After a quick test I switched to LS013B7DH03 as I was afraid that the mirror like quality of LS013B4DN04 would not make good contrast in sunny weather.](/content_static/articles/audible_altimeter/build/small_case12.jpg)
![After some cleanup](/content_static/articles/audible_altimeter/build/small_case13.jpg)
![Ready to swoop](/content_static/articles/audible_altimeter/build/small_finished2.jpg)

