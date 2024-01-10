// let pgKaBdy = document.body;

const fillIt = () => {

  if (sessionStorage.getItem("pwdCorrect") == "yes" && sessionStorage.getItem("pwdChecked") == "yes") {
    console.log("called");
    console.log(sessionStorage.getItem("pwdChecked"));
    console.log(sessionStorage.getItem("pwdCorrect"));

    let famArray = [["Familia Navratri {23}", "Per // 2023 // Navratri", "[DGMM]"], ["Familia Diwali {23}", "Per // Familia // Diwali", "[DGMM]"], ["Familia Random {23}", "Per // Familia // Radom", "[DGMM"], ["Dadi Bday", "Per // 2023 // Dadi Bday", "[DGMM]"], ["Onam + Nana & Mum + Others", "Alb // Fam", "[DMV5]"], ["Uk {23}", "Alb // Fam + Friends // Uk {23}", "[DMV5]"], ["Mum + Naina Aunty + Aaron + Vandana Aunty", "Alb // Fam + Friends", "[DMV5]"], ["Fui & Fua Anni", "Alb // Fui & Fua 25", "[DMV5]"], ["Nashik + Mumbai (Dada & I) {24}", "Alb // 2024 // Nashik + Bumbay", "[DMV5"]];

    let perArray = [["College Dusshera", "Per // 2023 // clg-zindagi // dusshera", "[DGMM]"], ["Kpop + Gandhi Park", "Per // 2023 // Clg Zindagi // ....", "[DGMM]"], ["Clg + Everyone + class + ziya + otaku + deepz + anju + anu + nino + teachers...", "Per // 2023 // Clg Zindagi // Others", "[DGMM]"], ["The Final Days", "Per // 2023 // Clg Zindagi // Final Days", "[DGMM"], ["Airplanes", "Per // Airplanes", "[DGMM]"], ["16th Sep {23}", "Alb // Clg Zindagi // ....", "[DMV5]"], ["19th Jul | Fiza Nexus Jaga {23}", "Alb // Clg Zindagi // 19th Jul {23}", "[DMV5]"], ["Pratham Cam", "Alb // Clg Zindagi // Cam", "[DMV5]"], ["Onam + group + teachers + others {23}", "Alb // Clg Zindagi // Others", "[DMV5]"], ["Freshers {23}", "Alb // Clg Zindagi // ....", "[DMV5]"], ["Teachers", "Alb // Clg Zindagi // ....", "[DMV5]"], ["Talents Day + Panumbur Dariyo {23}", "Alb // Clg Zindagi // ....", "[DMV5]"], ["Traditional Day {23}", "Alb // Clg Zindagi // ....", "[DMV5]"], ["Nandu + Ramu + Lachu + Anu + Rosh + Amu + Others", "Alb // Sab Log", "[DMV5]"], ["Shazi + Amru + Nandhanas + Otaku/Darsh + Harsh + Raju", "Alb // Mine Hamesha // 2022", "[DMV5]"], ["School Onam + Movies + Farewell + Others", "Alb // Mine Hamesha // 2021 & Pehele", "[DMV5]"], ["Raju + Aaron + Amru + Suna", "Alb // Mine Hamesha // 2023", "[DMV5]"], ["Clg Onam {22} + Teachers", "Alb // Onam {22}", "[DMV5]"]];

    let pplArray = [["Harsh", "Alb // Log // Harsh", "[DMV5]"], ["Amruta", "Alb // Log // Amruta", "[DMV5]"], ["Anju", "Alb // Log // Anju", "[DMV5]"], ["Brino", "Alb // Log // Brino", "[DMV5]"], ["Deepika", "Alb // Log // Deepika", "[DMV5]"], ["Darshan", "Alb // Log // Darshan", "[DMV5]"], ["Jisoo", "Alb // Log // Jisoo", "[DMV5]"], ["Gayathri (Go3)", "Alb // Log // Gayathri", "[DMV5]"], ["Kishan", "Alb // Log // Kishan", "[DMV5]"], ["Lakshmi (lachu)", "Alb // Log // Lakshmi", "[DMV5]"], ["Mee", "Alb // Log // Mee", "[DMV5]"], ["Nazneen", "Alb // Log // Nazneen", "[DMV5]"], ["Neha (Clg)", "Alb // Log // Neha", "[DMV5]"], ["Olivia", "Alb // Log // Olivia", "[DMV5]"], ["Rachana", "Alb // Log // Rachana", "[DMV5]"], ["Shreeraksha", "Alb // Log // Shreeraksha", "[DMV5]"], ["Suraj (school)", "Alb // Log // Suraj (school)", "[DMV5]"], ["Trisha", "Alb // Log // Trisha", "[DMV5]"], ["Shravya", "Alb // Log // Shravya", "[DMV5]"], ["Shaziya", "Alb // Log // Shaziya", "[DMV5]"]];

    let pgKaContainer = document.getElementsByClassName("index-container")[0];

    pgKaContainer.innerHTML += '<h2 class="uppercase tracking-widest text-center font-bold text-2xl">Easy Access</h2><br /><h4 class="tracking-wide font-bold">FAMILY</h4><div class="underline-box"></div><br /><hr />';

    famArray.forEach((ele) => {
      pgKaContainer.innerHTML += `<div class="flex-area flex my-2.5 text-base"><div class="left w-2/5 mr-1.5">${ele[0]}</div><div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">${ele[1]}</div><div class="right w-1/5 ml-1.5 text-center"><span>${ele[2]}</span></div></div><hr />`;
    });

    pgKaContainer.innerHTML += '<br /><br /><br /><h4 class="tracking-wide font-bold">PERSONAL</h4><div class="underline-box"></div><br /><hr />';

    perArray.forEach((ele) => {
      pgKaContainer.innerHTML += `<div class="flex-area flex my-2.5 text-base"><div class="left w-2/5 mr-1.5">${ele[0]}</div><div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">${ele[1]}</div><div class="right w-1/5 ml-1.5 text-center"><span>${ele[2]}</span></div></div><hr />`;
    });

    pgKaContainer.innerHTML += '<br /><br /><br /><h4 class="tracking-wide font-bold">PEOPLE</h4><div class="underline-box"></div><br /><hr />';

    pplArray.forEach((ele) => {
      pgKaContainer.innerHTML += `<div class="flex-area flex my-2.5 text-base"><div class="left w-2/5 mr-1.5">${ele[0]}</div><div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">${ele[1]}</div><div class="right w-1/5 ml-1.5 text-center"><span>${ele[2]}</span></div></div><hr />`;
    });
  }
  else if (sessionStorage.getItem("pwdCorrect") == null || sessionStorage.getItem("pwdCorrect") == undefined || sessionStorage.getItem("pwdChecked") == null || sessionStorage.getItem("pwdChecked") == undefined) {
    window.location.replace("pwd.html");
  }
  else if (sessionStorage.getItem("pwdCorrect") == "no") {
    pgKaBdy.innerHTML = "<h2>ACCESS DENIED</h2>";
  }
}

const fillBdays = () => {
  if (sessionStorage.getItem("pwdCorrect") == "yes" && sessionStorage.getItem("pwdChecked") == "yes") {
    let bdayArray = [["Jan", 8, "Trisha"], ["Jan", 8, "Vaishnavi"], ["Jan", 16, "Didi"], ["Jan", 25, "Rajal"], ["Jan", 27, "Snehal"], ["Mar", 10, "Aishu (SIMS)"], ["Apr", 11, "Abhiram"], ["Apr", 19, "Brino"], ["Apr", 22, "Rachana"], ["Apr", 23, "Kumar"], ["May", 11, "Shravya"], ["May", 24, "Neha (SIMS)"], ["Jun", 12, "Raksha (GF)"], ["Jun", 16, "Darshan"], ["Jun", 20, "Vaishnavi (Goa)"], ["Jun", 23, "Deepz"], ["Jul", 1, "Ziya"], ["Jul", 14, "Anju"], ["Jul", 31, "Wizz"], ["Aug", 1, "Pratham"], ["Sep", 12, "Akash V"], ["Sep", 19, "Aaron"], ["Oct", 3, "Nivedh"], ["Nov", 3, "Otaku"], ["Nov", 5, "Nandu"], ["Nov", 14, "Anu Behen"], ["Nov", 20, "Sanjay (SIMS)"], ["Nov", 27, "Vinti"], ["Dec", 8, "Janani Miss"], ["Dec", 21, "Rohit (SIMS)"]];

    let printedArr = [];

    let bdaysContainer = document.getElementsByClassName("bdays-container")[0];

    bdayArray.forEach((detArr) => {
      let date = "";
      if (detArr[1] < 10) {
        date = "0" + detArr[1];
      } else {
        date = detArr[1];
      }

      if (!(printedArr.includes(detArr[0])) && detArr[0] != "Jan") {
        bdaysContainer.innerHTML += "<div class='w-1/5 h-1 mx-auto' style='background: black;'></div><br />";
        printedArr.push(detArr[0]);
      }

      bdaysContainer.innerHTML += `<div class="flex-area flex my-2.5 text-base"><div class="left w-1/3 mr-1.5 text-center uppercase">${detArr[0]}</div><div class="middle  w-1/3 mr-1.5 ml-1.5 text-center">${date}</div><div class="right  w-1/3 ml-1.5 text-center font-bold">${detArr[2]}</div></div>`;
    });

    bdaysContainer.innerHTML += "<div class='w-1/5 h-1 mx-auto' style='background: black;'>";

  } else if (sessionStorage.getItem("pwdCorrect") == "no") {
    pgKaBdy.innerHTML = "<h2>ACCESS DENIED</h2>";
  } else if (sessionStorage.getItem("pwdCorrect") == null || sessionStorage.getItem("pwdCorrect") == undefined || sessionStorage.getItem("pwdChecked") == null || sessionStorage.getItem("pwdChecked") == undefined) {
    window.location.replace("pwd.html");
  }

}