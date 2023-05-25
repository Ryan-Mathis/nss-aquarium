/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            id: 1,
            image: "IMG"/*"https://umaine.edu/lobsterinstitute/wp-content/uploads/sites/477/2020/04/Dorsal-side-lobster.jpg"*/,
            species: "American Lobster",
            name: "Bart",
            food: "crustaceans",
            size: 3,
            location: "Boston, MA"
        }
        // ,{
        //     "id": 2,
        //     image: "https://images.unsplash.com/photo-1516408388733-2f8364f2e00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGljYWwlMjBmaXNofGVufDB8fDB8fHww&w=1000&q=80",
        //     "species": "Canis aureus",
        //     "name": "Benfell",
        //     "food": "Golden jackal",
        //     "size": 16.6,
        //     "location": "Poland"
        //   }, {
        //     "id": 3,
        //     image: "https://static01.nyt.com/images/2022/07/19/science/00tb-lumpfish/00tb-lumpfish-videoSixteenByNineJumbo1600.jpg",
        //     "species": "Pseudalopex gymnocercus",
        //     "name": "Sacker",
        //     "food": "Azara's zorro",
        //     "size": 89.5,
        //     "location": "Czech Republic"
        //   }, {
        //     "id": 4,
        //     image: "https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2020/04/Jordanella_floridae_Plate_TZSR14b_24_50mm_2.jpg",
        //     "species": "Alopex lagopus",
        //     "name": "Cobbing",
        //     "food": "Fox, arctic",
        //     "size": 11.8,
        //     "location": "Sweden"
        //   }, {
        //     "id": 5,
        //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxzXCehy8kby7vNdnAPfxOkDi4QKQZRR0bGVqNKwOpo_kxfUDv_D7t3SK_2UmSAg5pA0&usqp=CAU",
        //     "species": "Cebus apella",
        //     "name": "Coye",
        //     "food": "Black-capped capuchin",
        //     "size": 23.3,
        //     "location": "Portugal"
        //   }, {
        //     "id": 6,
        //     image: "https://media.npr.org/assets/img/2016/06/17/whatafishknows_wide-e2b0800c202b1751ffddfae6394e3c7825e7d333-s1400-c100.jpg",
        //     "species": "Madoqua kirkii",
        //     "name": "Leversha",
        //     "food": "Kirk's dik dik",
        //     "size": 16.0,
        //     "location": "Ireland"
        //   }, {
        //     "id": 7,
        //     image: "https://images.theconversation.com/files/299379/original/file-20191030-154716-1wc4d64.jpg?ixlib=rb-1.1.0&rect=0%2C12%2C2048%2C1023&q=45&auto=format&w=1356&h=668&fit=crop",
        //     "species": "Cebus albifrons",
        //     "name": "Leon",
        //     "food": "Capuchin, white-fronted",
        //     "size": 93.7,
        //     "location": "Poland"
        //   }, {
        //     "id": 8,
        //     image: "https://images.theconversation.com/files/290552/original/file-20190902-175668-1javyse.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
        //     "species": "Tamandua tetradactyla",
        //     "name": "Loghan",
        //     "food": "Tamandua, southern",
        //     "size": 24.8,
        //     "location": "Democratic Republic of the Congo"
        //   }, {
        //     "id": 9,
        //     image: "https://i.natgeofe.com/n/e4f2677d-6470-4f9c-87ab-d10ef9b6af66/anglerfish.jpg",
        //     "species": "Coendou prehensilis",
        //     "name": "Hacon",
        //     "food": "Porcupine, tree",
        //     "size": 39.2,
        //     "location": "France"
        //   }, {
        //     "id": 10,
        //     image: "https://www.thoughtco.com/thmb/WvbsHeC8Ci7Ng5qyEOof35A0pvc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fish2GE-57ed128f5f9b586c35a3dcff.jpg",
        //     "species": "Pteropus rufus",
        //     "name": "Semark",
        //     "food": "Bat, madagascar fruit",
        //     "size": 98.0,
        //     "location": "China"
        //   }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

// module.exports = { getFish }