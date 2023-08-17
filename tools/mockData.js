const login_data = [
    { id: "1", username: "rckalwan", password: "55537" }
];

const achievements_data = [
    { id: "1", image: "1589047210award1.jpeg", title: "Award of Recognition Regarding Cardiac Surgery Project", date0: "2007" },
    { id: "2", image: "1589105347award2.jpeg", title: "Rotary Box Cricket League Participation Award", date0: "" },
    { id: "3", image: "1590326539IMG-20200523-WA0016.jpg", title: "Best President Award Rtn Galib mirza ", date0: "2017\/18" }
];

const gallary_data = [
    { id: "1", image: "1589041358Rotary .jpg" },
    { id: "2", image: "1589041557Rotary-Mission-Statement-1024x796.jpg" },
    { id: "3", image: "1589101218rotary2.jpeg" },
    { id: "4", image: "1589101234rotary3.jpeg" },
    { id: "5", image: "1589101247rotary4.jpeg" },
    { id: "6", image: "1589101260rotary5.jpeg" },
    { id: "7", image: "1589101274rotary6.jpeg" },
    { id: "8", image: "1589101320rotary7.jpeg" },
    { id: "9", image: "1589101336rotary8.jpeg" },
    { id: "10", image: "1589101355rotary9.jpeg" },
    { id: "11", image: "1589101369rotaryflag.jpeg" }
];

const meetings_data = [

];

const members_data = [
    { id: "1", name: "Prof. Ravindra Murlidhar Pagar", email: "pagarrm@yahoo.in", post: "member", dob: "01\/09\/1970", phone: "942325876", image: "1595085819IMG-20200718-WA0061.jpg", occupation: "Professor at D.S.M.S Arts College Abhona", wa: "05\/11\/1995" },
    { id: "2", name: "Rajesh gangadhar musale", email: "rajumusale3@gmail.com", post: "president", dob: "15\/8\/1980", phone: "9423070748", image: "15950858791588946072profile.jpeg", occupation: "Owner: Krishna Electronics Kalwan", wa: "16\/5\/2006" },
    { id: "3", name: "Jitendra Bhikaji Kapadne", email: "jitukapadne@gmail.com", post: "treasurer", dob: "07\/04\/1972", phone: "9422754154", image: "1595085753IMG-20200718-WA0060.jpg", occupation: "Assist. Governer 2020\/21; Owner: Raj Selection Kalwan", wa: "16\/05\/1993" },
    { id: "4", name: "Vilas Dattatraya shirore", email: "shirore_vilas@rediffmail.com", post: "member", dob: "07\/10\/1968", phone: "9422942259", image: "1588948134profile8.jpeg", occupation: "Assist. Governor 2014\/15 ; Edible oil  Business", wa: "12\/05\/1995" },
    { id: "5", name: "Mohanlal hiralal sancheti", email: "mohanlalsancheti6693@gmail.com", post: "member", dob: "01\/11\/1944", phone: "9423931315", image: "1588952462profile (8).jpeg", occupation: "District Officer And Cloth Merchant", wa: "23\/41966" },
    { id: "6", name: "Gangadhar Dharma Gunjal", email: "gunjalsir@gmail.com", post: "member", dob: "12\/06\/1946", phone: "9423070645", image: "1588952744profile9.jpeg", occupation: "Retired Teacher", wa: "11\/05\/1971" },
    { id: "7", name: "Subhash bhavarlal jain ", email: "sbjain.kalwan@gmail.com", post: "member", dob: "27\/2\/1952", phone: "9423928349", image: "1589028428profile (9).jpeg", occupation: "Building Material Supplier", wa: "18\/01\/1975" },
    { id: "8", name: "Dr. Ravindra D Bhamare", email: "ravindrabhambre5@gmail.com", post: "member", dob: "12\/10\/1962", phone: "9421565378", image: "1589045890profile (5).jpeg", occupation: "Medical Practioner", wa: "02\/06\/1991" },
    { id: "9", name: "Prof. Vasantrao D Sonavane", email: "vds1412@gmail.com", post: "member", dob: "14\/12\/1959", phone: "8668926603", image: "1588953320profile (4).jpeg", occupation: "Retired Professor", wa: "12\/04\/1988" },
    { id: "10", name: "Dr S B sonawane", email: "samadhanbsonawane@gmail.com", post: "member", dob: "10\/01\/1974", phone: "8600956555", image: "1589045222sonavanedoc.jpeg", occupation: "Medical Practioner", wa: "20\/06\/1999" },
    { id: "11", name: "Pravin Shantilal Sancheti ", email: "aricomp12@yahoo.com", post: "member", dob: "24\/10\/1969", phone: "9422754158", image: "1589045340pravinsir.jpeg", occupation: "Owner: Arihant Computers", wa: "14\/02\/1993" },
    { id: "12", name: "Ravindra Harichandra Kumawat", email: "bkconstruction08@gmail.com", post: "member", dob: "01\/06\/1966", phone: "9423257247", image: "1589027935bapu1.jpg", occupation: "Building Contractor", wa: "12\/04\/1988" },
    { id: "13", name: "Sanjay Waman Bage", email: "sanjaybage399@gmail.com", post: "member", dob: "11\/05\/1977", phone: "8888882046", image: "1589046230bage.jpeg", occupation: "Owner Max Comforts Company", wa: "10\/05\/2003" },
    { id: "14", name: "Nimba Bhila Pagar", email: "nimbapagar27.5@gmail.com", post: "member", dob: "27\/05\/1979", phone: "7588195712", image: "1589044262nimbapag.jpeg", occupation: "Farmer & Bricks Manufacturer", wa: "20\/03\/2006" },
    { id: "15", name: "CA Galib Anjum Mirza", email: "cagalibmirza786@gmail.com", post: "member", dob: "24\/11\/1991", phone: "7709873587", image: "1589027729galib.jpeg", occupation: "Chartered Accountant", wa: "28\/12\/2017" },
    { id: "16", name: "Ar. Pramod Mothabhau Suryawanshi", email: "rutupramod@gmail.com", post: "member", dob: "06\/01\/1978", phone: "9423079151", image: "1589029404prmod.jpeg", occupation: "Architect", wa: "3\/12\/2005" },
    { id: "17", name: "Dr Tushar Eknathrao Pagar", email: "dr_tushar728@rediffmail.com", post: "member", dob: "04\/03\/1983", phone: "9890605749", image: "1589039376tushar.jpeg", occupation: "MBBS DMRE(Radiologist)", wa: "27\/11\/2011" },
    { id: "18", name: "Nilesh Kashinath Bhamare", email: "bhamaren2@gmail.com", post: "secretary", dob: "19\/09\/1978", phone: "7588808331", image: "1595085677IMG-20200718-WA0059.jpg", occupation: "Primary Teacher Z.P. School", wa: "29\/04\/2004" },
    { id: "19", name: "Sambhaji Shankar Pawar", email: "pawar.sambhaji537@gmail.com", post: "member", dob: "01\/12\/1980", phone: "8329374523", image: "1589045809sambhaji.jpeg", occupation: "Primary Teacher Z.P. School", wa: "08\/05\/2004" },
    { id: "20", name: "Shabbir Shakir", email: "", post: "DG", dob: "", phone: "", image: "1595085186IMG-20200718-WA0058.jpg", occupation: "", wa: "" },
    { id: "21", name: "Chandan Jitendra Kapadne", email: "chandankapadne@gmail.com", post: "member", dob: "10\/06\/1999", phone: "8329190047", image: "1595086038IMG-20200610-WA0093__01.jpg", occupation: "Student at PICT College Pune", wa: "NA" }
];

const news_data = [
    { id: "1", title: "ICU Setup and Ventilators", date0: "11-05-2020", place: "Kalwan", content: "Great News.... Happy to share that R C Kalwan, COVID-19 global grant for installation of ICU Ward & ventilators at sub-district hospital kalwan." }
];

const outside_meetings_data = [

];

const posts_data = [
    { id: "1", images: ["1589047006post (3).jpeg", "1589047006post (2).jpeg", "1589047006post (1).jpeg"], title: "Sewing machine distribution", date0: "12\/05\/2013", place: "Kalwan", content: "Rotary club of Kalwan has distributed Sewing machine to underprivileged women in our area .\r\nIn presence of AG Avtar Singh Panfair" },
    { id: "2", images: ["1589106843pos (84).jpeg", "1589106843pos1 (1).jpeg", "1589106843pos1 (2).jpeg"], title: "E Learning Set Distribution", date0: "2015", place: "Kundane", content: "E learning Set distribution at Z.P. School Kundane by MACCIA president Santosh Mandelecha" },
    { id: "3", images: ["1589107422pos (63).jpeg", "1589107422pos (64).jpeg", "1589107422pos (85).jpeg"], title: "Polio Vaccination Campaign", date0: "2015", place: "Kalwan", content: "Rotary Club of Kalwan visited Polio Booths and helped in the process of polio dose distribution" },
    { id: "4", images: ["1589107814pos (94).jpeg", "1589107814pos (96).jpeg", "1589107814pos (97).jpeg", "1589107814pos (98).jpeg"], title: "E Learning Project", date0: "2016", place: "Kalwan", content: "E learning set distribution at Jankai School Kalwan by Rotary Club of Kalwan through Chief guest P.D.G. Kishorji Kedia" },
    { id: "5", images: ["1589108686pos (45).jpeg", "1589108686pos (101).jpeg",], title: "Water Purifier Distribution", date0: "2013", place: "Kalwan", content: "Rotary Club of Kalwan distributed water purifier systems handed by P.D.G. Kishor Kedia to 20 schools in Kalwan Tal. Almost over 4000 students are getting benifited by the project. This project was done with the international partner, Rotary Club of Red Springs America under the Matching Grant Project" },
    { id: "6", images: ["1589109271pos (69).jpeg", "1589109271pos (70).jpeg", "1589109271pos (87).jpeg", "1589109271pos (89).jpeg"], title: "Makar Sankrant Celebration With Orphans", date0: "2014", place: "Manur", content: "Rotary Kalwan members celebrated Makar Sankrant with orphans at Manur Orphanage and distributed some resources" },
    { id: "7", images: ["1589109876pos (103).jpeg", "1589109876pos (104).jpeg", "1589109876pos (105).jpeg", "1589109876pos (106).jpeg"], title: "Water Purifier Distribution", date0: "2013", place: "Kalwan", content: "Rotary Club of Kalwan distributed water purifier systems handed by P.D.G. Dada Deshmukh to 20 schools in Kalwan Tal. Almost over 4000 students are getting benifited by the project. This project was done with the international partner, Rotary Club of Red Springs America under the Matching Grant Project" },
    { id: "8", images: ["1589111528Cycle.jpg"], title: "Bicycle Distribution", date0: "2012", place: "Otur", content: "Rotary club of kalwan has distributed bicycles for secondary school girls at Otur Highschool handed by Dr. Prashant Bhutda." },
    { id: "9", images: ["1589112996pos (72).jpeg", "1589112996pos2.jpeg"], title: "Help to the Victims of Nepal Earthquake", date0: "2011", place: "Nashik", content: "Helped Nepal Earthquake Victims in 2011 by providing them donation of 51000 Rs. at P.D.G. Dadasaheb Deshmukhs Office, Nashik" },
    { id: "10", images: ["1589113297pos (71).jpeg", "1589113297pos (74).jpeg"], title: "Cleaning Awareness Campaign", date0: "2013", place: "Kalwan", content: "Rotary Club of Kalwan members participated in Clean India Mission by holding a Cleaning Campaign in Kalwan" },
    { id: "11", images: ["1589114360pos3 (1).jpeg", "1589114360pos3 (2).jpeg", "1589114360pos3 (3).jpeg"], title: "Nation Builder Award Distribution", date0: "2017", place: "Kalwan", content: "30 teachers in the Kalwan Tal. were awarded with the Nation Builder Award by the chief guest Mrs. Jayashritai Pawar, Nashik Z.P. president & Rtn. Rajendraji Bhamare under the program held by Rotary and Innerwheel Club of Kalwan" },
    { id: "12", images: ["1589114901pos (57).jpeg", "1589114901pos (58).jpeg", "1589114901pos (59).jpeg", "1589114901pos (60).jpeg", "1589114901pos (61).jpeg"], title: "Resource Distribution at Adhar School", date0: "2017", place: "Yeola", content: "Clothes and sweets distribution at Adhar School, School for mentally retarded children at Yeola was done by Rotary Club of Kalwan" },
    { id: "13", images: ["1589115538pos (52).jpeg", "1589115538pos (53).jpeg", "1589115538pos (54).jpeg", "1589115538pos (56).jpeg"], title: "Memmography Checkup Camp", date0: "2018", place: "Kalwan", content: "Rotary, Innerwheel and Rotarct club organized cancer detection camp. Check ups of 130 women for memmography and pap smear tests were done at sub-district hospital Kalwan" },
    { id: "14", images: ["1589116021pos (40).jpeg", "1589116021pos4 (1).jpeg", "1589116021pos4 (2).jpeg"], title: "Tree Plantation Campaign", date0: "2019", place: "Kalwan", content: "1000 tress were planted by Rotary and Innerwheel members at Lamba Dongar, Kalwan" },
    { id: "15", images: ["1589119539pos (77).jpeg", "1589119539pos (78).jpeg"], title: "Blood Donation Camp", date0: "2016", place: "Kalwan", content: "Rotary Club of Kalwan organized blood donation camp and rotary, innerwheel & rotract members participated in the same" },
    { id: "16", images: ["1589120485pos (5).jpeg", "1589120485pos (6).jpeg", "1589120485pos (7).jpeg", "1589120485pos (10).jpeg", "1589120485pos (142).jpeg"], title: "Flag Exchange Program", date0: "2019", place: "Eastern India", content: "Rotary and Innerwheel members visited Jagnnathpuri, Gangtok, Bhuvaneshwar, kalimpong and exchanged flags with respective rotary members" },
    { id: "17", images: ["1589120767pos (15).jpeg", "1589120767pos (16).jpeg", "1589120767pos (17).jpeg"], title: "Wheelchair Distribution", date0: "2019", place: "Kalwan", content: "Rotary Club of Kalwan donated wheelchairs at Kalwan Bus Stand for the physically disabled people" },
    { id: "18", images: ["1589121160pos (35).jpeg", "1589121160pos (37).jpeg", "1589121160pos (41).jpeg"], title: "Clothes Distribution Program", date0: "2019", place: "Bandharpada", content: "Rotary Club of Kalwan distributed clothes among the needy people of Bandharpada situated at Gujrat Maharashtra border" },
    { id: "19", images: ["1589121398pos (46).jpeg", "1589121398pos (47).jpeg", ""], title: "Matru Pitru Pujan", date0: "2019", place: "Kalwan", content: "Rotary club of Kalwan organized a program for Matru Pitru Pujan of elders in the families of Rotary, Innerwheel & Rotract members " },
    { id: "20", images: ["1589121709pos5 (1).jpeg", "1589121709pos5 (2).jpeg", "1589121709pos5 (3).jpeg", "1589121709pos5 (4).jpeg"], title: "Flag Exchange Program", date0: "2019", place: "Kathmandu", content: "Rtn. Vilas Shirore and rotary & innerwheel members visited Kathmandu and Pokhra and exchanged flags with DG Kiranlal Shreshta and members" },
    { id: "21", images: ["1589122102pos (22).jpeg", "1589122102pos6 (1).jpeg", "1589122102pos6 (2).jpeg", "1589122102pos6 (3).jpeg"], title: "Regional Seminar on Public Image & New Generation", date0: "2019", place: "Kalwan", content: "Rotary club of Kalwan hosted a Regional Seminar on Public Image & New Generation addressed by D.G. Rajendraji Bhamare, P.D.G. Kishor Kedia & D.G.M. Ramesh Meher" },
    { id: "22", images: ["1589123376pos7 (13).jpeg", "1589123376pos7 (14).jpeg", "1589123376pos7 (15).jpeg", "1589123376pos7 (16).jpeg", "1589123376pos7 (18).jpeg"], title: "Friendship Exchange Program", date0: "2020", place: "Singapore", content: "Rotary International Friendship Programme, visit to dist. 3310 by dist. 3030 from jan. 28th to feb. 6th 2020. D.G. Rajamohan Munniswami & Singapore Rotary members welcomed us and also arranged dinner & flag exchange program" },
    { id: "23", images: ["1589124236pos7 (10).jpeg", "1589124236pos7 (11).jpeg", "1589124236pos8 (1).jpeg", "1589124236pos8 (2).jpeg", "1589124236pos8 (3).jpeg"], title: "Friendship Exchange Program", date0: "2020", place: "Malaysia", content: "Rotary International Friendship Exchange Programme, visit to dist. 3310 by dist 3030. D.G.N. Dolly Yeap & R.F.E. Chairman, Mr. Chortek welcomed us & guided us to visit various places of Johar Behru" },
    { id: "24", images: ["1589283629pos7 (2).jpeg", "1589283629pos7 (3).jpeg", "1589283629pos7 (6).jpeg", "1589283629pos7 (7).jpeg", "1589283629pos7 (9).jpeg"], title: "Visit to Pusat HemoDialysis Center Pontain", date0: "2020", place: "Malaysia", content: "Rotary Club members visited the Pusat Hemodialysis center and home for handicapped and mentally disabled people at Pontain Malaysia under the friendship exchange program" },
    { id: "25", images: ["1589284232pos7 (1).jpeg", "1589284232pos7 (19).jpeg", "1589284232pos9 (1).jpeg", "1589284232pos9 (2).jpeg", "1589284232pos9 (3).jpeg"], title: "Dinner meet with malaysian innerwheel members", date0: "2020", place: "Malaysia", content: "Innerwheel club of Kota Kinabalu Malaysia members arranged a dinner meet with the Innerwheel and rotary club Kalwan members" },
    { id: "26", images: ["1589284775pos10 (1).jpeg", "1589284775pos10 (2).jpeg", "1589284775pos10 (3).jpeg", "1589284775pos10 (4).jpeg", "1589284775pos10.jpeg"], title: "Friendship Exchange Program", date0: "2020", place: "Malaysia", content: "P.D.G. Zain, Captain Ong, Mr. Chya & Rotary Club of Kota Kinabalu memberrs welcomed us and showed their culture to us" },
    { id: "27", images: ["1589285553pos11 (1).jpeg", "1589285553pos11 (2).jpeg", "1589285553pos11 (3).jpeg", "1589285553pos11 (4).jpeg", "1589285553pos11 (5).jpeg"], title: "Rally for awareness regarding COVID-19", date0: "2020", place: "Kalwan", content: "Rotary club of Kalwan members arranged a rally along with Sai Nursing Institute to spread awareness regarding the seriousness of Corona Virus" },
    { id: "28", images: ["1589286084pos12 (1).jpeg", "1589286084pos12 (2).jpeg", "1589286084pos12 (3).jpeg", "1589286084pos12 (5).jpeg", "1589286084pos13 (4).jpeg"], title: "Masks and Sanitizer Distribution", date0: "2020", place: "Kalwan", content: "Rotary Club of Kalwan members distributed masks and sanitizer among the cleaning and health workers of Nagar Panchayat" },
    { id: "29", images: ["1589286490pos13 (3).jpeg", "1589286490pos13 (5).jpeg", "1589286490pos14 (1).jpeg", "1589286490pos14 (2).jpeg", "1589286490pos14 (3).jpeg"], title: "Food and Grocery Distribution", date0: "2020", place: "Kalwan", content: "Rotary club of Kalwan members distributed food and grocery among the poor families to provide them enough resources during the lockdown due to corona outbreak" },
    { id: "30", images: ["1589286984pos15 (1).jpeg", "1589286984pos15 (2).jpeg", "1589286984pos15 (3).jpeg", "1589286984pos15 (5).jpeg", "1589286984pos15 (6).jpeg"], title: "PPE kits Distribution", date0: "2020", place: "Kalwan", content: "Rotary club of Kalwan members donated PPE kits to sub district hospital doctors" },
    { id: "31", images: ["1590685405IMG_20200528_221215_221.jpg", "1590685405.jpg", "1590685405IMG_20200528_221215_245.jpg", "1590685405IMG_20200528_221215_246.jpg", "1590685405IMG_20200528_221215_228.jpg"], title: " Rotary Friendship Exchange program RID 3030&3310 in virtual meeting ", date0: "27-5-2020", place: "Kalwan", content: "Shared my experience as Team Leader in  Rotary Friendship Exchange program RID 3310 in virtual meeting organized by Rotary club of Malegoan Midtown \r\nThe meeting was also  attended by 15 Rotary members from RID 3310( Singapore and Malaysia)\r\nThank you RC Malegoan Midtown for giving the opportunity" },
    { id: "32", images: ["1592586675IMG-20200619-WA0092.jpg", "1592586675IMG-20200619-WA0093.jpg", "1592586675IMG-20200619-WA0094.jpg", "1592586675IMG-20200619-WA0091.jpg", "1592586675IMG-20200619-WA0095.jpg"], title: "visit sptashrungi vriddhashram Nanduri ", date0: "19-6-2020", place: "Nanduri", content: "Rc kalwan members visited saptashrungi vriddhashram @ Nanduri on the occasion of birthday celebration of Rtn vilas shirores daughter, pranali. She planted a tree and whole Shirore family gave donation for development of the ashram, also distributed sweets among the residents of the ashram." },
    { id: "33", images: ["1593786697IMG-20200703-WA0004.jpg", "1593786697IMG-20200701-WA0044.jpg", "1593786697IMG-20200702-WA0017.jpg", "1593786697IMG-20200702-WA0015.jpg", "1593786697IMG-20200702-WA0018.jpg"], title: "Doctors day celebration @ sub district hospital ", date0: "1-7-2020", place: "Kalwan", content: "In the background of Covid 19 the honorable doctors of Kalwan Sub-District Hospital have made invaluable contribution by providing medical services to the people. On the occasion of Doctors Day on 1st July, a ceremony was organized by Rotary Club of Kalwan to honor these 24 Corona Warriors at Sub-District Hospital, Kalwan." },
    { id: "34", images: ["1595084856IMG-20200708-WA0027.jpg", "1595084856IMG-20200708-WA0023.jpg", "1595084856IMG-20200710-WA0002.jpg", "1595084856IMG-20200708-WA0054.jpg", "1595084856IMG-20200711-WA0074.jpg"], title: "Installation Ceremony Rotary&Rotract club kalwan ", date0: "8-7-2020", place: "Kalwan", content: "The installation ceremony of Rotary & Rotract club of kalwan was held on 8th july, on this occasion DG.Rajamohan munisamy R I Dist 3310, DG Shabbir shakir,AG,shantaram gunjal were present virtually." },
    { id: "35", images: ["1597331192IMG-20200802-WA0022.jpg", "1597331192IMG-20200802-WA0026.jpg", "1597331192IMG-20200802-WA0006.jpg", "1597331192IMG-20200802-WA0033.jpg", "1597331192IMG-20200802-WA0035.jpg"], title: "Tree plantation 2020\/21", date0: "2-8-2020", place: "Lamba Hill", content: "Rotary, innerwheel and rotract club kalwan members planted 200 trees on lamba hill with the help of Rcc club patvir members" },
    { id: "36", images: ["1606809663IMG_20201130_135419.jpg"], title: "Program", date0: "30-11-2020", place: "Kalwan", content: "Vilas shorore visited at secretary Nilesh bhamres  new home" }
];

const presidents_data = [
    { id: "1", year: "2001-2002", name: "Dr S T Wagh " },
    { id: "2", year: "2002-2003", name: "Dr P P PAGAR" },
    { id: "3", year: "2003-2004", name: "Dr P H kothawade" },
    { id: "4", year: "2004-2005", name: "Mohanlal Sancheti " },
    { id: "5", year: "2005-2006", name: "Gangadhar Gunjal" },
    { id: "6", year: "2006-2007", name: "Subhash Jain" },
    { id: "7", year: "2007-2008", name: "vilas shirore " },
    { id: "8", year: "2008-2009", name: "Prof N B Kothawade" },
    { id: "9", year: "2009-2010", name: "Jitendra Kapadne " },
    { id: "10", year: "2010-2011", name: "Dr R D Bhamare" },
    { id: "11", year: "2011-2012", name: "Prof Vasantrao Sonawane " },
    { id: "12", year: "2012-2013", name: "Anil Mahajan " },
    { id: "13", year: "2013-14", name: "Dr S B Sonawane " },
    { id: "14", year: "2014-15", name: "Prof D N Bhamare" },
    { id: "15", year: "2015-16", name: "Ravindra Kumavat" },
    { id: "16", year: "2016-17", name: "Sanjay Bage" },
    { id: "17", year: "2017-18", name: "CA Galib Mirza " },
    { id: "18", year: "2018-19", name: "Nimba B Pagar" },
    { id: "19", year: "2019-20", name: "Prof Ravindra Pagar " }
];

module.exports = {
    login_data, achievements_data, gallary_data, meetings_data, members_data, news_data, outside_meetings_data, posts_data, presidents_data,
  };