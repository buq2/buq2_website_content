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

# v1.0

Laskurin on tarkoitus olla objektiivinen ja tunteeton kamojen arvon
laskuri joka ottaa huomioon vain käyttöiän, tarvittavat huollot sekä
yksinkertaisen kuluman. Kommentteja voi jättää. Korjailen laskuria kommenttien perusteella
yhteisön mielestä oikeaan suuntaan.

## Laskurin "totuuksia"

- Päävarjon arvo uutena on sen ostohinta.
- Päävarjon arvo, huollosta ja punoksista huolimatta 20v vanhana on 0€.
- Cypressin arvo 12v tai sitä vanhempana on 100€

## Seurauksia:

- Punosten vaihtaminen 400€:llä kymmenen vuotta vanhaan päävarjoon nostaa päävarjon arvoa vain 200€:llä.
- Vanhojen kamojen huollattaminen nostaa kamojen arvoa vähemmän kuin uusien.


# Laskuri

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
            <input type="number" id="container-price" name="container-price" value="2600"/>
        </td>
        <td>
            <input type="number" id="main-price" name="main-price" value="2000"/>
        </td>
        <td>
            <input type="number" id="reserve-price" name="reserve-price" value="1200"/>
        </td>
        <td>
            <input type="number" id="aad-price" name="aad-price" value="1200"/>
        </td>
        <td>
            <input type="number" id="total-price" name="total-price" value="0"/>
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
            <input type="number" id="container-maint-price" name="container-maint-price" value="80"/>
        </td>
        <td>
            <input type="number" id="main-maint-price" name="main-maint-price" value="55"/>
        </td>
        <td>
            <input type="number" id="reserve-maint-price" name="reserve-maint-price" value="75"/>
        </td>
        <td>
            <input type="number" id="aad-maint-price" name="aad-maint-price" value="195"/>
        </td>
    </tr>
</table>

<table style="margin:0 auto;">
    <tr>
        <th>Hyppyjä päävarjolla</th>
        <td>
            <input type="number" id="main-jumps" name="main-jumps" value="0"/>
        </td>
    </tr>

    <tr></tr>
        <th>Päävarjon kesto (hyppyä)</th>
        <td>
            <input type="number" id="main-max-jumps" name="main-max-jumps" value="3000"/>
        </td>
    </tr>

    <tr>
        <th>Hyppyjä punoksilla</th>
        <td>
            <input type="number" id="lines-jumps" name="lines-jumps" value="0"/>
        </td>
    </tr>
    
    <tr>
        <th>Punostenvaihdon hinta</th>
        <td>
            <input type="number" id="lines-change-price" name="lines-change-price" value="400"/>
        </td>
    </tr>
    
    <tr>
        <th>Punosten kesto (hyppyä)</th>
        <td>
            <input type="number" id="lines-max-jumps" name="lines-max-jumps" value="700"/>
        </td>
    </tr>
</table>
</div>

<table style="margin:0 auto;">
    <tr>
        <th>Valjaiden arvo</th>
        <th>Päävarjon arvo</th>
        <th>Varavarjon arvo</th>
        <th>Cypressin arvo</th>
        <th>Kokonaisarvo</th>
    </tr>

    <tr>
        <td><input id="container-worth" value=0></div></td>
        <td><input id="main-worth" value=0></div></td>
        <td><input id="reserve-worth" value=0></div></td>
        <td><input id="aad-worth"value=0></div></td>
        <td><input id="total-worth"value=0></div></td>
    </tr>
</table>

<script>
    $("input").change(calculateWorth);
    calculateWorth();
</script>

