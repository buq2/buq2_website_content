{
    "Title": "Kamalaskuri",
    "LongTitle": "Used skydiving rig value calculator",
    "Description": "This calculator can be used to calculate value of used skydiving rig in Finnish market",
    "DateCreated": "2015-11-18 18:17",
    "DateModified": "2015-11-18 18:17",
    "Icon": "/content_static/articles/kamalaskuri/icon.png",
    "Tags": ["skydiving"],
    "CreateToc": false,
    "HeadAfterScripts": "<script src='/content_static/articles/kamalaskuri/kamalaskuri.js'></script>"
}

---------- META END ----------

# v1.1

Laskurin on tarkoitus olla objektiivinen ja tunteeton kamojen arvon
laskuri joka ottaa huomioon vain käyttöiän, tarvittavat huollot sekä
yksinkertaisen kuluman. Kommentteja voi jättää. Korjailen laskuria kommenttien perusteella
yhteisön mielestä oikeaan suuntaan.

## Kaksi mallia

Laskurilla on kaksi mallia, toisessa mallissa huollon ja punosten arvo laskee
kamojen iän myötä. Tällöin lopputulos on lähempänä [Parasalen lappusen](http://www.parasale.com/forms/used_gear.pdf)
antamia tuloksia. Toisessa mallissa kaikki tehtävät huoltotyöt kuten punosten vaihtaminen
kasvattavat kamapaketin arvoa huoltotyön hinnan verran.

# Laskuri

<form>
<input type="radio" name="lines-and-maint-aging" value="no-aging" checked>Punosten ja huollon arvo ei laske vuosien myötä<br>
<input type="radio" name="lines-and-maint-aging" value="aging">Punosten ja huollon arvo laskee vuosien myötä

<table style="margin:0 auto;">
    <tr>
        <th></th>
        <th>Valjaat</th>
        <th>Päävarjo</th>
        <th>Varavarjo</th>
        <th>Cypress</th>
        <th>Yhteensä</th>
    </tr>
    <tr>
        <td>Hinta: </td>
        <td>
            <input type="number" id="container-price" name="container-price" value="2600" min="0"/>
        </td>
        <td>
            <input type="number" id="main-price" name="main-price" value="2000" min="0"/>
        </td>
        <td>
            <input type="number" id="reserve-price" name="reserve-price" value="1200" min="0"/>
        </td>
        <td>
            <input type="number" id="aad-price" name="aad-price" value="1200" min="0"/>
        </td>
        <td>
            <input type="number" id="total-price" name="total-price" value="0" min="0"/>
        </td>
    </tr>

    <tr>
        <td>Valmistusajankohta:</td>
        <td>
            <input type="date" id="container-dom" name="container-dom"/>
        </td>
        <td>
            <input type="date" id="main-dom" name="main-dom"/>
        </td>
        <td>
            <input type="date" id="reserve-dom" name="reserve-dom"/>
        </td>
        <td>
            <input type="date" id="aad-dom" name="aad-dom"/>
        </td>
    </tr>

    <tr>
        <td>Seuraava huolto/tarkastus:</td>
        <td>
            <input type="date" id="container-next-maint" name="container-next-maint"/>
        </td>
        <td>
            <input type="date" id="main-next-maint" name="main-next-maint" />
        </td>
        <td>
            <input type="date" id="reserve-next-maint" name="reserve-next-maint"/>
        </td>
        <td>
            <input type="date" id="aad-next-maint" name="aad-next-maint" />
        </td>
    </tr>

    <tr>
        <td>Huollon/tarkastuksen hinta:</td>
        <td>
            <input type="number" id="container-maint-price" name="container-maint-price" value="80" min="0"/>
        </td>
        <td>
            <input type="number" id="main-maint-price" name="main-maint-price" value="55" min="0"/>
        </td>
        <td>
            <input type="number" id="reserve-maint-price" name="reserve-maint-price" value="75" min="0"/>
        </td>
        <td>
            <input type="number" id="aad-maint-price" name="aad-maint-price" value="195" min="0"/>
        </td>
    </tr>
</table>

<table style="margin:0 auto;">
    <tr>
        <th>Hyppyjä päävarjolla</th>
        <td>
            <input type="number" id="main-jumps" name="main-jumps" value="0" min="0"/>
        </td>
    </tr>

    <tr></tr>
        <th>Päävarjon kesto (hyppyä)</th>
        <td>
            <input type="number" id="main-max-jumps" name="main-max-jumps" value="3000" min="0"/>
        </td>
    </tr>

    <tr>
        <th>Hyppyjä punoksilla</th>
        <td>
            <input type="number" id="lines-jumps" name="lines-jumps" value="0" min="0"/>
        </td>
    </tr>
    
    <tr>
        <th>Punostenvaihdon hinta</th>
        <td>
            <input type="number" id="lines-change-price" name="lines-change-price" value="400" min="0"/>
        </td>
    </tr>
    
    <tr>
        <th>Punosten kesto (hyppyä)</th>
        <td>
            <input type="number" id="lines-max-jumps" name="lines-max-jumps" value="700" min="0"/>
        </td>
    </tr>
</table>

<table style="margin:0 auto;">
    <tr>
        <th>Valjaiden arvo</th>
        <th>Päävarjon arvo</th>
        <th>Varavarjon arvo</th>
        <th>Cypressin arvo</th>
        <th>Kokonaisarvo</th>
    </tr>

    <tr>
        <td><input type="number" id="container-worth" value=0></td>
        <td><input type="number" id="main-worth" value=0></td>
        <td><input type="number" id="reserve-worth" value=0></td>
        <td><input type="number" id="aad-worth"value=0></td>
        <td><input type="number" id="total-worth"value=0></td>
        <div name=test id=test></div>
    </tr>
</table>
</form>

