<template>
  <div class="container pt-5 d-flex justify-content-center pb-5">
    <div class="bg-white" id="shadow">
      <div class="row justify-content-center pt-2">
        <h2 class="headline"></h2>
      </div>
      <div class="row py-5">
        <div class="col-sm-5 col-12 text-center">
          <img src="../assets/Cecilia.jpg" class="project-img" />
        </div>
        <div class="col-sm-7 col-12 project-text text-left">
          <h4>Cecilia Nilsson</h4>
          <div v-if="this.$store.state.isSwedish">
            <p>
              I februari 2019 fick jag uppleva min drömresa.
              Född och uppväxt i Sverige med svensk uppfostran av min vita mamma Ulla så var jag väldigt nyfiken på min andra del, mitt Nigerianska svarta arv. Min pappa Matthew dog när jag var barn. Vi har alltid talat mycket om honom i familjen, och en dag sa mannen i mitt liv (dr Jan Hammarström) att nu åker vi dit.
            </p>
            <p>
              Att landa på flygplatsen i Abuja, Nigerias huvudstad med alla dess kpistbeväpnade poliser och militärer var lite skrämmande, speciellt då det förklarades för oss att dem verkligen behövdes p g a den osäkra situationen i landet. Vi tillbringade ett par dagar i staden och begav oss sedan mot min pappas hemby Ozubulu , där han också ligger begravd.
              Vi träffade många oerhört fina människor, både släktingar och andra. Vi besökte mångas hem, gästfriheten var mycket stor. Så också fattigdomen på många ställen. Vi såg kåkstäder med allt som hör därtill. Avfall, sopor inklusive plast brändes ute på gatorna varje kväll. Barn satt med ute och inandades röken. Där fanns familjer där pengarna inte räcker till att låta barnen gå i skolan. Fantastiskt fina barn som bara behöver få en möjlighet att bryta mönstret. Där fanns barn som inte kunde få läkarvård p g a pengabrist.
            </p>
            <p>
              Vi bestämde oss för att försöka göra skillnad i det lilla och att göra det utifrån våra egna värderingar. Skillnad för barn som annars inte har någon möjlighet till framtid p g a ekonomi, sjukdom eller handikapp. Flickor som pojkar.
              Vi valde att skapa en stiftelse som vi döpte till The Matthew Foundation.
              Då Nigeria har stora motsättningar politiskt och religiöst så är det än viktigare att vi jobbar för barn oavsett deras grupptillhörighet. Korruption, politik och religion är saker som inte hör hemma i vår stiftelse. Inte heller vilket än av Nigerias många språk du talar eller vilket kön du har.
              Du är en flicka eller pojke, barn eller ungdom som behöver en hjälpande hand för att klara framtiden, eller ibland livet.
            </p>
            <p>
              Vår önskan efter att ha sett och upplevt behovet är att på plats göra det vi som medmänniskor kan. Det kan vara en skolavgift för att ens kunna börja 0:an, ett läkarbesök, kanske mediciner eller skolmatreal. Även lite äldre ungdomar som påbörjat studier ska kunna få hjälp att gå färdigt skolan.
              De barn vi får möjlighet att hjälpa kommer man att kunna följa på vår hemsida.
              Alla som på något sätt hjälper till med arbetet för stiftelsen gör det helt ideellt. För att kunna genomföra detta i vår egen anda och för att ha kontroll har vi valt att fokusera på en plats (Ozubulu). Också för att lättare kunna följa "våra" barn.
              Behovet är stort, tyvärr kan vi inte hjälpa alla men med hjälp av er kan vi skapa ringar på vattnet.
            </p>
          </div>
          <div v-if="!this.$store.state.isSwedish">
            <p>
              In February of 2019, I got to experience my dream trip.
              Born and raised in Sweden with Swedish upbringing by my white mother Ulla, I was very curious about my Nigerian black heritage. My father Matthew died when I was a child. We have always talked a lot about him in the family, and one day the man in my life (Dr. Jan Hammarström) said that now it's time to go there.
            </p>
            <p>
              Landing at the airport in Abuja, Nigeria's capital with all its heavy armed police officers and militaries, was a bit daunting, especially when it was explained to us that they were really needed due to the precarious situation in the country. We spent a couple of days in the city and then headed for my dad's home village of Ozubulu, where he is also buried.
              We met incredibly nice people, both relatives and others. We visited many people's homes, the hospitality was very great. So is poverty in many places. We saw shantytowns with everything that goes with it. Waste, garbage including plastic were burned out on the streets every night. Children sat outside and inhaled the smoke. There were families where the money was not enough to let the children go to school. Fantastically nice children who just need an opportunity to break the pattern. There were children who could not get medical care due to lack of money.
            </p>
            <p>
              We decided to try to make a difference in the small things and to do it based on our own values, for children who otherwise have no opportunity for the future due to finances, illness or disability. Girls as boys.
              We chose to start a foundation that we named The Matthew Foundation.
              As Nigeria has major political and religious differences, it is even more important that we work for children regardless of their group affiliation. Corruption, politics and religion are things that do not belong in our foundation. Nor which is Nigeria's many languages you speak or what gender you are.
              You are a girl or a boy, child or youth who needs a helping hand to cope with the future, or sometimes life.
            </p>
            <p>
              Our desire after seeing and experiencing the need is to do something on the spot, something that we as fellow human beings can do. It can be a school fee to even be able to go to school, a visit to the doctor, maybe medication or school supplies. Even slightly older young people who have started studies should be able to get help to finish school.
              The children that we get the opportunity to help, you will be able to follow on our website.
              Everyone who in any way helps with the work for the foundation makes it completely non-profit. To be able to go through with this in our own spirit and to have control, we have chosen to focus on one place, Ozubulu. Also to be able to more easily follow "our" children.
              The need is great, unfortunately we can not help everyone but with your help we can spread a ripple effect.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div class="row py-5">
        <div class="col-sm-5 col-12 text-center">
          <img src="../assets/Janne.jpg" class="project-img" />
        </div>
        <div class="col-sm-7 col-12 project-text text-left">
          <h4>Jan Hammarström</h4>
          <div v-if="this.$store.state.isSwedish">
            <p>Mitt namn är Jan Hammarström, specialist i internmedicin och f.d. sjöofficer under många år. Jag har väl alltid vurmat för de svagaste och mest utsatta människorna, har alltid stoppat något i Rädda barnens insamlingsbössor o på senare år swischat el. överfört bidrag.</p>
            <p>2019 åkte jag och min fru till Nigeria för att träffa hennes släkt (Cecilias pappa Matthew kom från Nigeria, men är avliden sedan 35år). Resan till Ozubulu var mycket intressant, ju längre ut på landsbygden man kom desto fattigare, människor överallt och kåkstäder som plötsligt kunde brytas av med palatsliknande hus. Någon el fanns inte (lyxhusen hade nog egen generator). Berg av sopor längs vägen och varannan mil fanns vägspärr med militärer.</p>
            <p>Väl framme i byn, som var full av vänliga människor och underbart gulliga barn, möttes man av stor mänsklig värme (och även riktig hetta, runt 40 grader). Alla kom från fattiga förhållanden och många kunde inte ens gå i skolan (man har skolavgift samt krav på att ha en skoluniform).</p>
            <p>
              En flicka, Chinaza, hade sickelcellanemi vilket innebar att hennes minsta blodkärl kunde täppas till vid t.ex. hög värme, stress, infektion etc. Detta hade hänt Chinaza vid ett par tillfällen vilket medfört att bägge hennes höftkulor gått i nekros. Chinaza är tvungen att använda kryckor. Hon berättade för mig att hennes dröm var att bli farmaceut. Problemet var att ta sig till skolan, hon kunde ju inte gå, men med en moped skulle det lösa sig.
              Då kom idén om Matthew Foundation. Skulle det inte vara bättre att ge direkthjälp till dessa barn, utan några mellanhänder, löner, kontorkostnader etc? Jo, självklart och så har det blivit efter mycket kämpande med papper, ansökningar mm.
              Det tog sex månader och så fick Chinaza sin moped, idag går hon i skolan och lyckas riktigt bra. Jag fick ett sms från henne: " I'm the happiest girl in the World".
            </p>
            <p>Så om Du vill satsa en slant på dessa barn för att ge dem utbildning (vilket är det enda sättet för dem att ta sig ur sin misär och hjälpa till att bygga upp samhället i Nigeria) så är ingen gladare än barnen i Ozobolu med omnejd.</p>
          </div>
          <div v-if="!this.$store.state.isSwedish">
            <p>My name is Jan Hammarström, specialist in internal medicine and former naval officer for many years. I have probably always had a soft spot for the weakest and most vulnerable people, have always put something in Save the Children's collection boxes and in recent years, transferred contributions.</p>
            <p>In 2019, my wife and I went to Nigeria to meet her relatives (Cecilia's father Matthew came from Nigeria, but has been dead for 35 years). The trip to Ozubulu was very interesting, the further out in the countryside you went it got the poorer. People everywhere and shantytowns that could suddenly be mixed with palace-like houses. There was no electricity (the luxury houses probably had their own generator). Mountains of garbage along the road and every two miles there was a roadblock with military.</p>
            <p>Once in the village, which was full of friendly people and wonderfully cute children, we were met by great human warmth (and also real heat, around 40 degrees). All came from poor conditions and many could not even go to school (there is a school fee and a requirement to have a school uniform).</p>
            <p>
              A girl, Chinaza, had sickle cell anemia, which meant that her smallest blood vessel could be blocked at any moment, caused by high fever, stress, infection, etc. This had happened to Chinaza on a couple of occasions, which meant that both of her hip balls went into necrosis. Chinaza had to use crutches. She told me that her dream was to become a pharmacist. The problem was getting to school, she could not walk, but with a moped it would work out.
              Then came the idea for The Matthew Foundation. Would it not be better to provide direct assistance to these children, without any intermediaries, salaries, office costs, etc? Well, of course, and so it has become after a lot of struggling with paperwork, applications etc.
              It took six months and then Chinaza got her moped, today she goes to school and performs really well. I received a text message from her: "I'm the happiest girl in the World".
            </p>
            <p>So if you want to help these children to recieve education (which is the only way for them to get out of their misery and help build society in Nigeria) then no one is happier than the children in Ozobolu and the surrounding area.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Quicksand:wght@700&family=Noto+Sans&display=swap");

.link {
  color: #d6930d;
}
#shadow {
  width: 95%;
  box-shadow: 3px 3px 3px #565756;
}
.project-img {
  width: 350px;
  height: 350px;
  object-fit: cover;
}
.project-text {
  padding-right: 50px;
  font-family: "Noto Sans", sans-serif;
}
hr {
  background-color: #d6930d;
  height: 2px;
  margin: 0 35px;
}
h4 {
  font-family: "Quicksand", sans-serif;
}

@media (max-width: 665px) {
  .project-img {
    width: 250px;
    height: 250px;
  }
  .project-text {
    margin: 5px 10px;
    padding-left: 25px !important;
    padding-top: 20px;
    text-align: center !important;
  }
}
@media (min-width: 665px) and (max-width: 750px) {
  .project-img {
    width: 200px;
    height: 200px;
  }
  .project-text {
    padding-left: 40px !important;
    padding-right: 10px !important;
  }
  .row {
    margin-left: 15px !important;
    margin-right: 15px !important;
  }
  hr {
    margin: 0 29px;
  }
}
@media (max-width: 1030px) and (min-width: 750px) {
  .project-img {
    width: 250px;
    height: 250px;
  }
  .project-text {
    padding-left: 30px;
  }
  .row {
    margin-left: 15px !important;
    margin-right: 15px !important;
  }
  hr {
    margin: 0 29px;
  }
}
</style>