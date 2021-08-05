const { Landlord } = require("../models");

const landlordData = [
    {
        first_name:"Bob",
        last_name:"Belcher",
        company_name:"n/a",
        number_of_properties:6,
        contact_info:8018444496,
    },
    {
        first_name:"Luke",    
        last_name:"Warm",
        company_name:"Hot Properties",
        number_of_properties:5,
        contact_info:8019149762
    },
    {
        first_name:"Rick",
        last_name:"Sanchez",
        company_name:"n/a",
        number_of_properties:5,
        contact_info:2089486086
    },
    {
        first_name:"Mortimer",
        last_name:"Smith",
        company_name:"n/a",
        number_of_properties:1,
        contact_info:4801575283
    },
    {
        first_name:"Louise",
        last_name:"Belcher",
        company_name:"n/a",
        number_of_properties:1,
        contact_info: 7653604757
    },
    {
        first_name:"Frodo",
        last_name:"Baggins",
        company_name:"n/a",
        number_of_properties:2,
        contact_info: 8014521678
    },
    {
        first_name:"Eren",
        last_name:"Yeager",
        company_name:"Titan Walls",
        number_of_properties:20,
        contact_info:4352987556
    },
    {
        first_name:"Erwin",
        last_name:"Smith",
        company_name:"n/a",
        number_of_properties:2,
        contact_info:4352122318
    },
    {
        first_name:"Historia",
        last_name:"Reiss",
        company_name:"n/a",
        number_of_properties:4,
        contact_info:7658499987
    },
    {
        first_name:"Bilbo",
        last_name:"Baggins",
        company_name:"n/a",
        number_of_properties:1,
        contact_info:8014521333
    },
    {
        first_name:"Han",
        last_name:"Solo",
        company_name:"PPM Rentals",
        number_of_properties:15,
        contact_info:4354643167
    },
    {
        first_name:"Gandalf",
        last_name:"The Gray",
        company_name:"The white and gray properties",
        number_of_properties:12,
        contact_info:8017979797
    },
    {
        first_name:"Katniss",
        last_name:"Everdeen",
        company_name:"n/a",
        number_of_properties:2,
        contact_info:8013164978
    },
    {
        first_name:"Harry",
        last_name:"Potter",
        company_name:"The one who shall not be name rentals",
        number_of_properties:2,
        contact_info: 4356688444,
    },
    {
        first_name:"Seneca",
        last_name:"Crane",
        company_name:"n/a",
        number_of_properties:2,
        contact_info: 8016648759
    },
    {
        first_name:"Haymitch",
        last_name:"Abernathy",
        company_name:"n/a",
        number_of_properties:2,
        contact_info:8012222494
    },
    {
        first_name:"Tywin",
        last_name:"Lannister",
        company_name:"Dragon's keep",
        number_of_properties:5,
        contact_info:8014587169
    },

    {
        first_name:"Homer",
        last_name:"Simpson",
        company_name:"n/a",
        number_of_properties:2,
        contact_info:8017414414
    },

    {
        first_name:"Bobba",
        last_name:"Fett",
        company_name:"n/a",
        number_of_properties:2,
        contact_info:8016393969
    },

    {
        first_name:"Jerry",
        last_name:"Smith",
        company_name:"n/a",
        number_of_properties:1,
        contact_info:4356699889
    },

    {
        first_name:"Leonard",
        last_name:"McCoy",
        company_name:"McCoy cozy properties",
        number_of_properties:2,
        contact_info:801451114474
    },

    {
        first_name:"Beth",
        last_name:"Smith",
        company_name:"n/a",
        number_of_properties:5,
        contact_info:4352587416
    },

    {
        first_name:"James",
        last_name:"Kirk",
        company_name:"n/a",
        number_of_properties:1,
        contact_info:8015588996
    },
    {
        first_name:"Luke",
        last_name:"Skywalker",
        company_name:"Rentals of the Galaxy",
        number_of_properties:1,
        contact_info:8017654321
    },
    {
        first_name:"Jon",
        last_name:"Snow",
        company_name:"n/a",
        number_of_properties:1,
        contact_info:801234567
    },
    {
        first_name:"Padme",
        last_name:"Amidala",
        company_name:"n/a",
        number_of_properties:10,
        contact_info: 8012154879
    },
    {
        first_name:"Margaery",
        last_name:"Tyrell",
        company_name:"n/a",
        number_of_properties:1,
        contact_info:4354521888
    },
    {
        first_name:"Ahsoka",
        last_name:"Tano",
        company_name:"n/a",
        number_of_properties:10,
        contact_info: 4352222368
    },
    {
        first_name:"Ned",
        last_name:"Flanders",
        company_name:"n/a",
        number_of_properties:2,
        contact_info: 8011212487
    }
];

const seedLandlord = () => Landlord.bulkCreate(landlordData, {individualHooks: true});

module.exports = seedLandlord;