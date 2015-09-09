{
    "Title": "Audible altimeter part 2",
    "LongTitle": "Electronics project: Audible altimeter - Parts",
    "Description": "Selecting parts for the audible altimeter project",
    "DateCreated": "2014-10-06 19:30",
    "DateModified": "2015-02-02 19:40",
    "Icon": "/content_static/articles/default/icon.png",
    "Tags": ["skydiving", "audible altimeter", "electronics"],
    "CreateToc": true
}

---------- META END ----------

Below is notes about the components chosen for the first version of the
altimeter and some notes.

* Air pressure changes approximately 1.44kPa / 100m
* Sensor interface: i2c
    * SPI would be easier to interface with, but I2C is better learning experience
    * The USB library I'm planning on using has also I2C module ([^lufa-twi])
* MCU: atxmega128a4u
    * 1.6V-3.6V
    * max 32MHZ @ 2.7V
    * max 12MHZ @ 1.6V
    * max 12mA @ 32MHZ @ 3.0V + 0.5mA from 32MHz internal OSC
    * I/O max 20mA per pin
    * 4.5€ @ Digikey
* Barometer: Freescale: MPL3115A2 ([^MPL3115A2])
    * Pressure, temperature and altitude
    * 20bit
    * 50kPa - 110kPa (= >4000m - 0m)
    * 0.3m resolution
    * 0.1kPa relative accuracy (changing temperature)
    * Probably not very good for this purpose, but is cheap (2.5€) and gets the project started
    * 6ms-512ms / sample
    * 8.5µA-40µA-265µA@3.3V 1Hz update rate
    * I2C
    * 2.9€ @ Digikey
    * 2V - 3.6V
* Barometer2: Measurement Specialties: MS5805-02BA01
    * 1.8V - 3.6V
* Acceleration/heading: InvenSense MPU-9250 ([^MPU9250])
    * Just for the fun of it
    * Barometer data might be little bit boring while developing
    * 5mA max?
    * I2C
    * 11€
    * 2.4V - 3.6V
* GPS: Linx FM Module
    * http://www.linxtechnologies.com/resources/data-guides/rxm-gps-fm.pdf
    * 3.0V - 4.3V
* GPS: SIM33ELA ?
* GPS antenna: Pulse W3011A
* Hymidity sensor: Silicon Labs 336-2540-1-ND
    * I2C
    * 1.9V - 3.6V
* Clock: Microchip MCP7940M ([^CLOCK])
    * MCU could do everything this chip can do, but why not just add another i2c chip?
    * 1.2µA@3.3V timekeeping
    * 0.69€ @ Digikey MCP7940MT-I/MNY MCP7940MT-I/MNYCT-ND
    * I2C
    * 1.8V - 5.5V
* Crystal Oscillator
    * 0805
    * 0.9€ @ Digikey CM315D32768EZFT 300-8816-1-ND
    * +-20ppm
* Display: LS013B4DN04 / LS013B7DH03
    * 32mm x 28mm x ~1.5mm
    * 2.7V - 3.3V
    * 12µW dynamic display @ 1Hz
    * 15€ (Mouser)
* FPS connector
    * SFV10R-2STE1HLF 609-4306-1-ND - Top contacts
    * SFV10R-1STE1HLF 609-4305-1-ND - Bottom contacts <- Use this for 180 bent (under PCB)
    * 0.55€ (Digikey)
    * 0.5mm pitch
    * 0.3mm FPC thickness
    * 0.7€ @ Digikey
* Buzzer
    * CSS-0575A-SMT-TR 102-2201-1-ND
    * 3.7€ (Digikey)
    * 5mm x 5mm x 2.4mm
    * Drive with NPN BJT + 180 OHM + protective diode
    * 3.2€ @ Digikey
    * 2V - 4V
* USB charging IC
    * MCP73831 http://www.digikey.fi/product-detail/en/MCP73831T-2ACI%2FOT/MCP73831T-2ACI%2FOTCT-ND/1979802
    * Sparkfun
    * 0.4€ @ Digikey
* USB connector
    * Micro B
    * 0.4€ @ Digikey 609-4616-1-ND or 609-4618-1-ND
* Micro SD card slot
    * 1.1€ @ Digikey 101-00660-68-6-1-ND
* Flash memory
    * S25FL216K
    * 2.7V - 3.6V
    * SOIC-8
* 3.3V supply IC
    * Linear regulator
    * Reasoning: For 3.3V linear offers ~90% efficiency. 2.7V design would not
      benefit much more. Switching regulator would require board space
      and add complexity. Maybe next time.
    * Reasonable transient characteristics? (AND9089-D)
    * 0.7€ @ Digikey NCP4681DSQ33T1G NCP4681DSQ33T1GOSTR-ND
* 400mAh battery: 403035
    * 35mm x 30mm x 4mm
    * 7€ (ebay)
    * 3.7V
    * 2.7V - 4.5V
* Current consumption active:
    * 13mA: MCU
    * 0.3mA: Barometer
    * 5mA: 9Axis
    * 0.001mA: Clock
    * 0.015mA: Display
    * <= 20mA (buzzer not included)
    * = 20h @ 400mAh
* Current consumption waiting:
    * 1mA: MCU (MAX) (active 1MHz)
    * 0.01mA: Barometer
    * 0.015mA: Display
    * <= 2mA
    * >= 1 week
* For 9 month battery life
    * 400mAh / 24*30*9h = 62µA
    * 5µA: MCU (32kHZ)
    * ~1µA LDO
    * 1.2µA: Clock
    * = Should be possible
# Links
[^MPL3115A2]: [Freescale: MPL3115A2](http://www.digikey.fi/product-detail/en/MPL3115A2/MPL3115A2-ND/2817529)
[^MPU9250]: [InvenSense: MPU-9250](http://www.digikey.fi/product-detail/en/MPU-9150/1428-1009-1-ND/4038014)
[^CLOCK]: [Microchip: MCP7940M](http://www.digikey.fi/product-detail/en/MCP7940MT-I%2FMNY/MCP7940MT-I%2FMNYCT-ND/3176850)
[^lufa-twi]: [Google: Lufa TWI](https://www.google.fi/search?q=TWI+Peripheral+Driver+xmega)
[^sharp]: [Sharp Memory LCD](http://www.sharpmemorylcd.com/resources/ls013b4dn04_application_info.pdf)
