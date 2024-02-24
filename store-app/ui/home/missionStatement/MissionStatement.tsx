import styles from "./MissionStatement.module.css";

export default function MissionStatement() {
  return (
    <section className={styles.wrapper}>
      <h1>En tryggere måte å bruke mobilen</h1>
      <p className="large-text">
        Hvis du vil bytte spilleliste, sjekke navigasjon, sende en melding eller
        ringe noen må du ofte enten ha mobilen din fast motert i bilen eller må
        stoppe bilen for å gjøre det. Dette er ikke bare irriter, men også noe
        som skjeldent bilr gjort. Dette er grunnene til at vi tillbyr en enklere
        måte å bruke mobilen på mens man kjører på en trygg og lovelig måte.
      </p>
    </section>
  );
}
