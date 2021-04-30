<template>
  <div>
    <SectionTitle :title="$t('experiences.title')" />
    <div
      v-for="experience in $t('experiences.experiences')"
      :key="experience.date"
      class="grid"
    >
      <div class="date">{{ experience.date }}</div>
      <div class="icon"></div>
      <div>
        <h3>{{ experience.title }}</h3>
        <h4>{{ experience.company }}</h4>
        <p style="white-space: pre-wrap">{{ experience.description }}</p>
      </div>
    </div>
    <SectionTitle title="études" />
    <div
      v-for="diploma in $t('studies.studies')"
      :key="diploma.date"
      class="grid"
    >
      <div class="date">{{ diploma.date }}</div>
      <div class="icon"></div>
      <div>
        <h3>{{ diploma.title }}</h3>
        <h4>{{ diploma.school }}</h4>
        <p style="white-space: pre-wrap">{{ diploma.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle"
export default {
  name: "Experiences",
  components: { SectionTitle },
  data() {
    return {
      experiences: [
        {
          date: "Depuis\n07/2008",
          title: "Prestataire de service en développement web et mobile",
          company: "We Are Lion",
          description:
            "Prestataire de service pour le développement d'interfaces pour des clients tels que :\n- Prologia SA\n- La Française des Jeux\n- Docapost\n- ATSouhaits\n- DZ-Skischool\n- Brandmining Consulting\n- IDNeuve",
        },
        {
          date: "08/2020\n02/2021",
          title: "Lead Développeur et architecte frontend",
          company: "Prologia SAS",
          description:
            "En charge de la création d'un pôle frontend au sein d'une entreprise spécialisée dans le domaine financier, formation d'une équipe de 8 développeurs backend J2EE. L'entreprise est devenue autonome dans un domaine de compétences qu'elle était auparavant forcée de sous-traiter",
        },
        {
          date: "06/2019\n02/2020",
          title: "Développeur fullstack JavaScript",
          company: "La Française des Jeux",
          description:
            "Prestataire de service pour le développement frontend, refonte du tunnel de connexion et d'authentification de l'application web, création de service proxy en nodejs",
        },
        {
          date: "07/2017\n02/2019",
          title: "Lead Développeur et architecte frontend",
          company: "Inovalia",
          description:
            "Référent technique sur les questions d’implémentation et d’architecture frontend, Développement d’interfaces sur la base de maquettes",
        },
        {
          date: "10/2013\n01/2017",
          title: "Web designer intégrateur et développeur",
          company: "Nouvelle Marque",
          description:
            "Gestion de la production de projets WordPress, intégration de maquettes, création de plugins WordPress, maintenance des hébergements et déploiements sites",
        },
      ],
      diplomas: [
        {
          date: "2008\n2010",
          title: "BTS Communication Visuelle",
          school: "Atlas (La Farlède - 83)",
          description: "Formation aux métiers de la communication par l'image",
        },
        {
          date: "2007\n2008",
          title: "Titre professionnel d'info-graphiste",
          school: "Mach 3 info",
          description: "Formation au métier d'infographiste metteur en page",
        },
        {
          date: "2004",
          title: "Baccalauréat Littérature",
          school: "Lycée Marcel Pagnol (Marseille)",
          description: "Projet de poursuite d'études en sciences humaines",
        },
      ],
    }
  },
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 4rem 1.875rem 1fr;
  align-items: stretch;
}
.date {
  width: 4rem;
  padding-top: 1.25rem;
}
.icon {
  width: 1.875rem;
  position: relative;
}
.icon::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  background-color: #000;
}
</style>
