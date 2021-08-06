const { Landlord } = require("../models");

const landlordData = [
    {
        first_name:"Bob",
        last_name:"Belcher",
        company_name:"n/a",
        number_of_properties:6,
        contact_info:8018444496,
        username:"Bobby",
        email:"belcher123@gmail.com",
        password:"thebelchers524"
    },
    {
        first_name:"Luke",    
        last_name:"Warm",
        company_name:"Hot Properties",
        number_of_properties:5,
        contact_info:8019149762,
        username:"coolguy",
        email:"luke25warm@hotmail.com",
        password:"Lukeasefs1"
    },
    {
        first_name:"Rick",
        last_name:"Sanchez",
        company_name:"n/a",
        number_of_properties:5,
        contact_info:2089486086,
        username:"Rick",
        email:"thecitadel@gmail.com",
        password:"bethisaclone"
    },
    {
        first_name:"Mortimer",
        last_name:"Smith",
        company_name:"n/a",
        number_of_properties:1,
        contact_info:4801575283,
        username:"Mrpoopybutthole",
        email:"mortyc-132@gmail.com",
        password:"123456789"
    },
    {
        first_name:"Louise",
        last_name:"Belcher",
        company_name:"n/a",
        number_of_properties:1,
        contact_info: 7653604757,
        username:"PinkHat",
        email:"louise_pink@yahoo.com",
        password:"burgeroftheday!@"

    },
    {
        first_name:"Frodo",
        last_name:"Baggins",
        company_name:"n/a",
        number_of_properties:2,
        contact_info: 8014521678,
        username:"Baggins",
        email:"ringchosen@gmail.com",
        password:"ahfasdhfjasdf466"
    },
    {
        first_name:"Eren",
        last_name:"Yeager",
        company_name:"Titan Walls",
        number_of_properties:20,
        contact_info:4352987556,
        username:"Titan",
        email:"wall_Maria@gmail.com",
        password:"titansinsidethewalls3@!#"
    },
    {
        first_name:"Erwin",
        last_name:"Smith",
        company_name:"n/a",
        number_of_properties:2,
        contact_info:4352122318,
        username:"Erwin",
        email:"erwin_smith15@gmail.com",
        password:"jfjkjkjjjjk1221"
    },
    {
        first_name:"Historia",
        last_name:"Reiss",
        company_name:"n/a",
        number_of_properties:4,
        contact_info:7658499987,
        username:"ReisHistoria",
        email:"reiss89@gmail.com",
        password:"rulerofthewalls55"
    },
    {
        first_name:"Bilbo",
        last_name:"Baggins",
        company_name:"n/a",
        number_of_properties:1,
        contact_info:8014521333,
        username:"TrollVanquisher",
        email:"old_baggins@yahoo.com",
        password:"bagginsbagginsbaggins"
    },
    {
        first_name:"Han",
        last_name:"Solo",
        company_name:"PPM Rentals",
        number_of_properties:15,
        contact_info:4354643167,
        username:"MilleniumFalcom",
        email:"milleniumfalcom@gmail.com",
        password:"thefalcom"
    },
    {
        first_name:"Gandalf",
        last_name:"The Gray",
        company_name:"The white and gray properties",
        number_of_properties:12,
        contact_info:8017979797,
        username:"TheWhite",
        email:"gandalf@gmail.com",
        password:"jkfjfkdls"
    },
    {
        first_name:"Katniss",
        last_name:"Everdeen",
        company_name:"n/a",
        number_of_properties:2,
        contact_info:8013164978,
        username:"Katniss",
        email:"hungergames@gmail.com",
        password:"faskfdas!@##$"
    },
    {
        first_name:"Harry",
        last_name:"Potter",
        company_name:"The one who shall not be name rentals",
        number_of_properties:2,
        contact_info: 4356688444,
        username:"Severus",
        email:"chosenone@gmail.com",
        password:"jjjjfk!!@@@##$$%_"
    },
    {
        first_name:"Seneca",
        last_name:"Crane",
        company_name:"n/a",
        number_of_properties:2,
        contact_info: 8016648759,
        username:"Crane_254",
        email:"seneca_crane@gmail.com",
        password:"fj5445588!!"
    },
    {
        first_name:"Haymitch",
        last_name:"Abernathy",
        company_name:"n/a",
        number_of_properties:2,
        contact_info:8012222494,
        username:"HayNathy",
        email:"abernathy@yahoo.com",
        password:"12345"
    },
    {
        first_name:"Tywin",
        last_name:"Lannister",
        company_name:"Dragon's keep",
        number_of_properties:5,
        contact_info:8014587169,
        username:"GameofThrones",
        email:"thehouseoflannister@gmail.com",
        password:"!@@#@_fjff"
    },

    {
        first_name:"Homer",
        last_name:"Simpson",
        company_name:"n/a",
        number_of_properties:2,
        contact_info:8017414414,
        username:"Bart",
        email:"thesimpsons6785@gmail.com",
        password:"1231451@!Marge"
    },

    {
        first_name:"Bobba",
        last_name:"Fett",
        company_name:"n/a",
        number_of_properties:2,
        contact_info:8016393969,
        username:"BountyHunter1",
        email:"no1hunter@gmail.com",
        password:"fhjadhjjhkfdjkhdsfa"
    },

    {
        first_name:"Jerry",
        last_name:"Smith",
        company_name:"n/a",
        number_of_properties:1,
        contact_info:4356699889,
        username:"jerrythesmith",
        email:"jerry_smith@yahoo.com",
        password:"jerryandBETH",
        password:"1234"
    },

    {
        first_name:"Leonard",
        last_name:"McCoy",
        company_name:"McCoy cozy properties",
        number_of_properties:2,
        contact_info:801451114474,
        username:"theMc",
        email:"Mccoydjds@gmail.com",
        password:"fhfhfjhkdfhjkahjkfhjkfdashjkfdajkhdafshjfdsjhkfdhjkadsfhjkfdsahjkldsaf"
    },

    {
        first_name:"Beth",
        last_name:"Smith",
        company_name:"n/a",
        number_of_properties:5,
        contact_info:4352587416,
        username:"HorseSurgeon",
        email:"hotsurgeon@gmail.com",
        password:"horsea@clone@not@"
    },

    {
        first_name:"James",
        last_name:"Kirk",
        company_name:"n/a",
        number_of_properties:1,
        contact_info:8015588996,
        username:"Enterpise",
        email:"theenterpise@gmail.com",
        password:"5456465464"
    },
    {
        first_name:"Luke",
        last_name:"Skywalker",
        company_name:"Rentals of the Galaxy",
        number_of_properties:1,
        contact_info:8017654321,
        username:"MasterJedi",
        email:"thejedino1@gmail.com",
        password:"no1no1no1no1"
    },
    {
        first_name:"Jon",
        last_name:"Snow",
        company_name:"n/a",
        number_of_properties:1,
        contact_info:801234567,
        username:"MRJON",
        email:"jon_snow1@gmail.com",
        password:"1@@!@@"
    },
    {
        first_name:"Padme",
        last_name:"Amidala",
        company_name:"n/a",
        number_of_properties:10,
        contact_info: 8012154879,
        username:"DarthVader",
        email:"queenpadme@gmail.com",
        password:"hellohello"
    },
    {
        first_name:"Margaery",
        last_name:"Tyrell",
        company_name:"n/a",
        number_of_properties:1,
        contact_info:4354521888,
        username:"Tyrell",
        email:"tyrell@gmail.com",
        password:"asfsdf12355!@!#@#"
    },
    {
        first_name:"Ahsoka",
        last_name:"Tano",
        company_name:"n/a",
        number_of_properties:10,
        contact_info: 4352222368,
        username:"JediTano",
        email:"jedimaster@gmail.com",
        password:"fjfjfjfjfjfjfjf"
    },
    {
        first_name:"Ned",
        last_name:"Flanders",
        company_name:"n/a",
        number_of_properties:2,
        contact_info: 8011212487,
        username:"NedNed",
        email:"flenders1223@gmail.com",
        password:"nedFlenders"
    },

];
const seedLandlord = () => Landlord.bulkCreate(landlordData, {individualHooks: true});

module.exports = seedLandlord;