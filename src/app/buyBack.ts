export type IPOEntry = {
    name: string;
    recordDate: string;
    openDate: string;
    closeDate: string;
    price:string;
  };

    export type buyData = Record<string, IPOEntry[]>;

    const buyBackData: buyData = {
        "2025":[
            {"name": "Prime Securities", "recordDate": "TBA", "openDate": "TBA", "closeDate": "TBA", "price": "₹305"},
            {"name": "Nava", "recordDate": "28 February", "openDate": "TBA", "closeDate": "TBA", "price": "₹500"},
            {"name": "Jai Corp", "recordDate": "10 September", "openDate": "13 September", "closeDate": "20 September", "price": "₹400"},
            {"name": "Arex Industries", "recordDate": "7 September", "openDate": "12 September", "closeDate": "19 September", "price": "₹195"},
            {"name": "Ladderup Finance", "recordDate": "6 September", "openDate": "11 September", "closeDate": "19 September", "price": "₹44"},
            {"name": "Aarti Drugs", "recordDate": "5 September", "openDate": "11 September", "closeDate": "19 September", "price": "₹900"},
            {"name": "Transport Corporation Of India", "recordDate": "4 September", "openDate": "10 September", "closeDate": "17 September", "price": "₹1200"},
            {"name": "Nucleus Software", "recordDate": "3 September", "openDate": "9 September", "closeDate": "13 September", "price": "₹1615"},
            {"name": "Indian Toners and Developers", "recordDate": "30 August", "openDate": "5 September", "closeDate": "11 September", "price": "₹450"},
            {"name": "Weizmann", "recordDate": "30 August", "openDate": "5 September", "closeDate": "11 September", "price": "₹160"},
            {"name": "Suprajit Engineering", "recordDate": "27 August", "openDate": "2 September", "closeDate": "6 September", "price": "₹750"},
            {"name": "Technocraft Industries", "recordDate": "27 August", "openDate": "2 September", "closeDate": "6 September", "price": "₹4500"},
            {"name": "KDDL", "recordDate": "27 August", "openDate": "2 September", "closeDate": "6 September", "price": "₹3700"},
            {"name": "VLS Finance", "recordDate": "26 August", "openDate": "30 August", "closeDate": "5 September", "price": "₹380"},
            {"name": "Mayur Uniquoters", "recordDate": "23 August", "openDate": "29 August", "closeDate": "4 September", "price": "₹800"},
            {"name": "Symphony", "recordDate": "21 August", "openDate": "27 August", "closeDate": "2 September", "price": "₹2500"},
            {"name": "AIA Engineering", "recordDate": "20 August", "openDate": "26 August", "closeDate": "30 August", "price": "₹5000"},
            {"name": "Chaman Lal Setia Exports", "recordDate": "19 August", "openDate": "23 August", "closeDate": "29 August", "price": "₹300"},
            {"name": "CERA Sanitaryware", "recordDate": "16 August", "openDate": "22 August", "closeDate": "28 August", "price": "₹12000"},
            {"name": "Savita Oil Technologies", "recordDate": "16 August", "openDate": "22 August", "closeDate": "28 August", "price": "₹675"},
            {"name": "Dhanuka Agritech", "recordDate": "16 August", "openDate": "22 August", "closeDate": "28 August", "price": "₹2000"},
            {"name": "TTK Prestige", "recordDate": "14 August", "openDate": "21 August", "closeDate": "27 August", "price": "₹1200"},
            {"name": "Navneet Education", "recordDate": "13 August", "openDate": "20 August", "closeDate": "26 August", "price": "₹200"},
            {"name": "Indus Towers", "recordDate": "9 August", "openDate": "14 August", "closeDate": "21 August", "price": "₹465"},
            {"name": "Welspun Living", "recordDate": "5 August", "openDate": "9 August", "closeDate": "16 August", "price": "₹220"},
            {"name": "Aurobindo Pharma", "recordDate": "30 July", "openDate": "5 August", "closeDate": "9 August", "price": "₹1460"},
            {"name": "eClerx Services", "recordDate": "4 July", "openDate": "9 July", "closeDate": "15 July", "price": "₹2800"},
            {"name": "Bajaj Consumer", "recordDate": "2 July", "openDate": "9 July", "closeDate": "15 July", "price": "₹290"},
            {"name": "Godawari Power & Ispat", "recordDate": "28 June", "openDate": "4 July", "closeDate": "10 July", "price": "₹301"},
            {"name": "Cheviot Company", "recordDate": "14 June", "openDate": "21 June", "closeDate": "27 June", "price": "₹1800"},
            {"name": "Anand Rathi", "recordDate": "3 June", "openDate": "7 June", "closeDate": "13 June", "price": "₹4450"},
            {"name": "Ajanta Pharma", "recordDate": "30 May", "openDate": "5 June", "closeDate": "11 June", "price": "₹2771"},
            {"name": "Tips Industries", "recordDate": "22 April", "openDate": "26 April", "closeDate": "3 May", "price": "₹625"},
            {"name": "Freshtrop Fruits", "recordDate": "2 April", "openDate": "8 April", "closeDate": "15 April", "price": "₹175"},
            {"name": "Dwarikesh Sugar Industries", "recordDate": "20 March", "openDate": "26 March", "closeDate": "2 April", "price": "₹105"},
            {"name": "Bajaj Auto", "recordDate": "29 February", "openDate": "6 March", "closeDate": "13 March", "price": "₹10000"},
            {"name": "Garware Technical", "recordDate": "12 March", "openDate": "18 March", "closeDate": "25 March", "price": "₹3800"},
            {"name": "Shervani Industrial", "recordDate": "7 March", "openDate": "13 March", "closeDate": "20 March", "price": "₹510"},
            {"name": "Zydus Lifesciences", "recordDate": "23 February", "openDate": "29 February", "closeDate": "6 March", "price": "₹1005"},
            {"name": "Atul Buyback 2023", "recordDate": "N/A", "openDate": "21 November", "closeDate": "23 February", "price": "₹7500"}
        ]
    }


export default buyBackData;