<template>
  <div>
    <h4 v-if="this.$store.state.isSwedish">Vilka är vi?</h4>
    <h4 v-if="!this.$store.state.isSwedish">Who are we?</h4>

    <div class="row about justify-content-start pt-4 pl-3">
      <img src="../assets/family.jpg" />
    </div>

    <div v-if="this.$store.state.isSwedish">
      <p
        class="pt-4"
      >"Jag förlorade som barn min pappa Matthew i en bilolycka. Då tappade jag tyvärr även kontakten med släkten. 2019 bestämde jag och Janne oss för att åka dit för att lära mer om kulturen och träffa min då uppspårade familj. Vi fick en fantastisk resa, mötte otroligt fina människor. Vi började med huvudstaden Abuja och åkte därefter till min familjs hemby Ozubulu.</p>
      <p>Janne väckte stor uppmärksamhet som vit man. Framförallt hos barnen som aldrig sett något så exotiskt. Dessa nyfikna, glada, varma och ofta mycket fattiga barn kom för att se, prata och även känna på oss. Många i enklare kläder och utan skor. Dem flesta med en dröm om utbildning och framtida jobb. Alla vill bidra till sin familjs försörjning.</p>
      <p>Många barn kommer från fattiga förhållanden och kan varken få skola, sjukvård eller ens en dräglig framtid.</p>
      <p>Vårt mål blev där och då att hjälpa barn till ett värdigt och självförsörjande liv. Skolgång är i Nigeria det enda sättet att komma ur fattigdom.</p>
      <p>Då det inte fanns några befintliga pålitliga kanaler att hjälpa till genom bestämde vi oss för att starta en stiftelse, The Matthew Foundation.</p>
      <p>Vårt mål är att ge utsatta barn en möjlighet, en chans till utbildning och/eller sjukvård. Barn som vi och våra donatorer kan följa genom hela skolgången.</p>
      <p>Allt arbete med detta görs självklart utan arvode.</p>
      <p>Vi vill ge tillbaka lite av den kärlek och värme dessa barn mötte oss med."</p>
      <p>
        <strong>Cecilia Chidi Nilsson</strong>
      </p>
    </div>
    <div v-if="!this.$store.state.isSwedish">
      <p
        class="pt-4"
      >"As a child, I lost my father, Matthew, in a car accident. Then I unfortunately lost contact with my family as well. In 2019, me and Janne decided to go there to learn more about the culture and meet my tracked down family. We had an amazing trip, met incredibly fine people. We started off in the capital city Abuja and thereafter went to my family's home village of Ozubulu.</p>
      <p>As a white man, Janne attracted great attention. Especially in the children, who have never seen anything so exotic. These curious, happy, warm and often very poor children came to see, talk and even touch us. Many of them, in simpler clothes and without shoes. Most of them with a dream of education and future jobs. Everyone wants to contribute to their family's livelihood.</p>
      <p>Many children come from poor conditions and cannot have school, health care or even a bright future.</p>
      <p>Our goal then and there became to help children to a dignified and self-sufficient life. Schooling in Nigeria is the only way to get out of poverty.</p>
      <p>Since there were no existing reliable ways to help, we decided to start a foundation, The Matthew Foundation.</p>
      <p>Our goal is to give exposed children an opportunity, a chance for education and/or medical care. Children that we and our donors can follow throughout the schooling.</p>
      <p>All work is obviously done without emolument.</p>
      <p>We want to give back some of the love and warmth these children gave us."</p>
      <p>
        <strong>Cecilia Chidi Nilsson</strong>
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Quicksand:wght@700&family=Noto+Sans&display=swap");

#shadow {
  box-shadow: 3px 3px 3px #565756;
}
#about_info {
  padding-left: 10em;
  border-left: 2px solid #d6930d;
  font-family: "Noto Sans", sans-serif;
}
.infolink:hover {
  cursor: pointer;
}
#about_nav,
h4 {
  font-family: "Quicksand", sans-serif;
}
.about img {
  width: 30vw;
}

@media (max-width: 400px) {
.about img {
  width: 60vw;
  height: 30vh;
}
}
@media (min-width: 400px) and (max-width: 700px) {
.about img {
  width: 50vw;
  height: 50vh;
}
}
@media (min-width: 700px) and (max-width: 800px) {
.about img {
  width: 60vw;
  height: 30vh;
}
}
@media (min-width: 800px) and (max-width: 1200px) {
.about img {
  width: 60vw;
  height: 50vh;
}
}
</style>