import { Wine } from '../generated/graphql';

export type WineOption = Pick<
  Wine,
  'denominazioneVino' | 'tipoVino' | 'vitigni'
>;

export const wines: WineOption[] = [
  {
    denominazioneVino: 'Abruzzo DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Abruzzese, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Abruzzo DOC Cococciola',
    tipoVino: 'fermo',
    vitigni: ['Cococciola'],
  },
  {
    denominazioneVino: 'Abruzzo DOC Cococciola superiore',
    tipoVino: 'fermo',
    vitigni: ['Cococciola'],
  },
  {
    denominazioneVino: 'Abruzzo DOC Malvasia',
    tipoVino: 'fermo',
    vitigni: ['Malvasia'],
  },
  {
    denominazioneVino: 'Abruzzo DOC Malvasia superiore',
    tipoVino: 'fermo',
    vitigni: ['Malvasia'],
  },
  {
    denominazioneVino: 'Abruzzo DOC Montonico',
    tipoVino: 'fermo',
    vitigni: ['Montonico bianco'],
  },
  {
    denominazioneVino: 'Abruzzo DOC Montonico superiore',
    tipoVino: 'fermo',
    vitigni: ['Montonico bianco'],
  },
  {
    denominazioneVino: 'Abruzzo DOC Passerina',
    tipoVino: 'fermo',
    vitigni: ['Passerina'],
  },
  {
    denominazioneVino: 'Abruzzo DOC Passerina superiore',
    tipoVino: 'fermo',
    vitigni: ['Passerina'],
  },
  {
    denominazioneVino: 'Abruzzo DOC passito bianco',
    tipoVino: 'passito',
    vitigni: [
      'Moscato bianco, Passerina, Pecorino, Riesling Italico, Sauvignon, Gewürztraminer',
    ],
  },
  {
    denominazioneVino: 'Abruzzo DOC passito rosso',
    tipoVino: 'passito',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Abruzzo DOC Pecorino',
    tipoVino: 'fermo',
    vitigni: ['Pecorino'],
  },
  {
    denominazioneVino: 'Abruzzo DOC Pecorino superiore',
    tipoVino: 'fermo',
    vitigni: ['Pecorino'],
  },
  {
    denominazioneVino: 'Abruzzo DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Abruzzo DOC spumante bianco charmat',
    tipoVino: 'spumante',
    vitigni: [
      'Chardonnay, Cococciola, Montonico bianco, Passerina, Pecorino, Pinot nero',
    ],
  },
  {
    denominazioneVino: 'Abruzzo DOC spumante bianco metodo classico',
    tipoVino: 'spumante',
    vitigni: [
      'Chardonnay, Cococciola, Montonico bianco, Passerina, Pecorino, Pinot nero',
    ],
  },
  {
    denominazioneVino: 'Abruzzo DOC spumante rosé charmat',
    tipoVino: 'spumante',
    vitigni: ['Montepulciano, Pinot nero'],
  },
  {
    denominazioneVino: 'Abruzzo DOC spumante rosé metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Montepulciano, Pinot nero'],
  },
  {
    denominazioneVino: 'Aglianico del Taburno o Taburno rosato DOCG',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Aglianico del Taburno o Taburno rosso DOCG',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Aglianico del Taburno riserva o Taburno rosso riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Aglianico del Vulture DOC',
    tipoVino: 'fermo',
    vitigni: ['Aglianico del Vulture, Aglianico'],
  },
  {
    denominazioneVino: 'Aglianico del Vulture spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Aglianico del Vulture, Aglianico'],
  },
  {
    denominazioneVino: 'Aglianico del Vulture Superiore DOCG',
    tipoVino: 'fermo',
    vitigni: ['Aglianico del Vulture, Aglianico'],
  },
  {
    denominazioneVino: 'Aglianico del Vulture Superiore riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Aglianico del Vulture, Aglianico'],
  },
  {
    denominazioneVino: 'Alba DOC',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo, Barbera'],
  },
  {
    denominazioneVino: 'Alba riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo, Barbera'],
  },
  {
    denominazioneVino: 'Albugnano DOC',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo, Freisa, Barbera, Bonarda'],
  },
  {
    denominazioneVino: 'Alcamo DOC Ansonica o Inzolia',
    tipoVino: 'fermo',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Alcamo DOC bianco',
    tipoVino: 'fermo',
    vitigni: [
      'Catarratto bianco lucido, Catarratto bianco comune, Ansonica, Chardonnay, Müller-Thurgau, Sauvignon',
    ],
  },
  {
    denominazioneVino: 'Alcamo DOC bianco classico',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco lucido, Catarratto bianco comune'],
  },
  {
    denominazioneVino: 'Alcamo DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: [
      'Catarratto bianco lucido, Catarratto bianco comune, Ansonica, Chardonnay, Müller-Thurgau, Sauvignon',
    ],
  },
  {
    denominazioneVino: 'Alcamo DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Alcamo DOC Calabrese o nero d’Avola',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Alcamo DOC Catarratto',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco lucido, Catarratto bianco comune'],
  },
  {
    denominazioneVino: 'Alcamo DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Alcamo DOC Grecanico',
    tipoVino: 'fermo',
    vitigni: ['Grecanico dorato'],
  },
  {
    denominazioneVino: 'Alcamo DOC Grillo',
    tipoVino: 'fermo',
    vitigni: ['Grillo'],
  },
  {
    denominazioneVino: 'Alcamo DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Alcamo DOC Müller-Thurgau',
    tipoVino: 'fermo',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino: 'Alcamo DOC rosato',
    tipoVino: 'fermo',
    vitigni: [
      'Nerello Mascalese, Calabrese, Sangiovese, Frappato, Perricone, Cabernet Sauvignon, Merlot, Syrah',
    ],
  },
  {
    denominazioneVino: 'Alcamo DOC rosato spumante',
    tipoVino: 'spumante',
    vitigni: [
      'Nerello Mascalese, Calabrese, Sangiovese, Frappato, Perricone, Cabernet Sauvignon, Merlot, Syrah',
    ],
  },
  {
    denominazioneVino: 'Alcamo DOC rosso',
    tipoVino: 'fermo',
    vitigni: [
      'Calabrese, Sangiovese, Frappato, Perricone, Cabernet Sauvignon, Merlot, Syrah',
    ],
  },
  {
    denominazioneVino: 'Alcamo DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: [
      'Calabrese, Sangiovese, Frappato, Perricone, Cabernet Sauvignon, Merlot, Syrah',
    ],
  },
  {
    denominazioneVino: 'Alcamo DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: [
      'Calabrese, Sangiovese, Frappato, Perricone, Cabernet Sauvignon, Merlot, Syrah',
    ],
  },
  {
    denominazioneVino: 'Alcamo DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Alcamo DOC Syrah',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Alcamo DOC vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: [
      'Catarratto bianco lucido, Catarratto bianco comune, Ansonica, Chardonnay, Müller-Thurgau, Sauvignon',
    ],
  },
  {
    denominazioneVino: 'Aleatico di Gradoli DOC',
    tipoVino: 'fermo',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Aleatico di Gradoli DOC liquoroso',
    tipoVino: 'liquoroso',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Aleatico di Gradoli DOC liquoroso riserva',
    tipoVino: 'liquoroso',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Aleatico di Gradoli DOC passito',
    tipoVino: 'passito',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Aleatico di Puglia DOC',
    tipoVino: 'fermo',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Alezio rosato DOC',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro, Malvasia nera di Lecce, Sangiovese, Montepulciano'],
  },
  {
    denominazioneVino: 'Alezio rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro, Malvasia nera di Lecce, Sangiovese, Montepulciano'],
  },
  {
    denominazioneVino: 'Alezio rosso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro, Malvasia nera di Lecce, Sangiovese, Montepulciano'],
  },
  {
    denominazioneVino: 'Alghero DOC bianco',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Alghero DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Alghero DOC bianco passito',
    tipoVino: 'passito',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Alghero DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Alghero DOC Cabernet',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Alghero DOC Cabernet riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Alghero DOC Cagnulari',
    tipoVino: 'fermo',
    vitigni: ['Cagnulari'],
  },
  {
    denominazioneVino: 'Alghero DOC Cagnulari riserva',
    tipoVino: 'fermo',
    vitigni: ['Cagnulari'],
  },
  {
    denominazioneVino: 'Alghero DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Alghero DOC Chardonnay spumante',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Alghero DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Alghero DOC Merlot riserva',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Alghero DOC rosato',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Alghero DOC rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Alghero DOC rosso',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Alghero DOC rosso liquoroso',
    tipoVino: 'liquoroso',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Alghero DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Alghero DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Alghero DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Alghero DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Alghero DOC Torbato',
    tipoVino: 'fermo',
    vitigni: ['Torbato'],
  },
  {
    denominazioneVino: 'Alghero DOC Torbato spumante',
    tipoVino: 'spumante',
    vitigni: ['Torbato'],
  },
  {
    denominazioneVino: 'Alghero DOC Vermentino frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Alta Langa spumante DOCG',
    tipoVino: 'spumante',
    vitigni: ['Pinot nero, Chardonnay'],
  },
  {
    denominazioneVino: 'Alta Langa spumante riserva DOCG',
    tipoVino: 'spumante',
    vitigni: ['Pinot nero, Chardonnay'],
  },
  {
    denominazioneVino: 'Alta Langa spumante rosato DOCG',
    tipoVino: 'spumante',
    vitigni: ['Pinot nero, Chardonnay'],
  },
  {
    denominazioneVino: 'Alta Langa spumante rosato riserva DOCG',
    tipoVino: 'spumante',
    vitigni: ['Pinot nero, Chardonnay'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay, Pinot bianco, Pinot grigio'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige bianco passito DOC',
    tipoVino: 'passito',
    vitigni: ['Chardonnay, Pinot bianco, Pinot grigio'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige bianco vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Chardonnay, Pinot bianco, Pinot grigio'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Cabernet franc DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Cabernet sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Cabernet-Lagrein DOC',
    tipoVino: 'fermo',
    vitigni: ['Lagrein, Cabernet Franc, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Cabernet-Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Cabernet Franc, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Chardonnay passito DOC',
    tipoVino: 'passito',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Chardonnay passito Terlano DOC',
    tipoVino: 'passito',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Chardonnay passito Val Venosta DOC',
    tipoVino: 'passito',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Chardonnay Terlano DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Chardonnay Val Venosta DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Chardonnay vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Chardonnay vendemmia tardiva Terlano DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Chardonnay vendemmia tardiva Val Venosta DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Chardonnay-Pinot bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay, Pinot bianco'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Chardonnay-Pinot bianco passito DOC',
    tipoVino: 'passito',
    vitigni: ['Chardonnay, Pinot bianco'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Chardonnay-Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay, Pinot grigio'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Chardonnay-Pinot grigio passito DOC',
    tipoVino: 'passito',
    vitigni: ['Chardonnay, Pinot grigio'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Colli di Bolzano o Bozner Leiten DOC',
    tipoVino: 'fermo',
    vitigni: ['Schiava'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Kerner DOC',
    tipoVino: 'fermo',
    vitigni: ['Kerner'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Kerner passito DOC',
    tipoVino: 'passito',
    vitigni: ['Kerner'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Kerner passito Val Venosta DOC',
    tipoVino: 'passito',
    vitigni: ['Kerner'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Kerner passito Valle Isarco DOC',
    tipoVino: 'passito',
    vitigni: ['Kerner'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Kerner Val Venosta DOC',
    tipoVino: 'fermo',
    vitigni: ['Kerner'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Kerner Valle Isarco DOC',
    tipoVino: 'fermo',
    vitigni: ['Kerner'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Kerner vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Kerner'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Kerner vendemmia tardiva Val Venosta DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Kerner'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Kerner vendemmia tardiva Valle Isarco DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Kerner'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Klausner Leitacher DOC',
    tipoVino: 'fermo',
    vitigni: ['Schiava, Portoghese, Lagrein'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Klausner Leitacher Valle Isarco DOC',
    tipoVino: 'fermo',
    vitigni: ['Schiava, Portoghese, Lagrein'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Lagrein DOC',
    tipoVino: 'fermo',
    vitigni: ['Lagrein'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Lagrein rosato o Kretzer DOC',
    tipoVino: 'fermo',
    vitigni: ['Lagrein'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Lagrein-Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Lagrein, Merlot'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Malvasia DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia nera'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Meranese di Collina o Meraner Hügel DOC',
    tipoVino: 'fermo',
    vitigni: ['Schiava'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Merlot rosato o Kretzer DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Moscato giallo DOC',
    tipoVino: 'fermo',
    vitigni: ['Moscato giallo'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Moscato giallo passito DOC',
    tipoVino: 'passito',
    vitigni: ['Moscato giallo'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Moscato giallo vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Moscato giallo'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Moscato rosa DOC',
    tipoVino: 'fermo',
    vitigni: ['Moscato rosa'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Moscato rosa passito DOC',
    tipoVino: 'passito',
    vitigni: ['Moscato rosa'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Moscato rosa vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Moscato rosa'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Müller Thurgau DOC',
    tipoVino: 'fermo',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Müller Thurgau passito DOC',
    tipoVino: 'passito',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Müller Thurgau passito Terlano DOC',
    tipoVino: 'passito',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Müller Thurgau passito Val Venosta DOC',
    tipoVino: 'passito',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Müller Thurgau passito Valle Isarco DOC',
    tipoVino: 'passito',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Müller Thurgau TerlanoDOC',
    tipoVino: 'fermo',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Müller Thurgau Val Venosta DOC',
    tipoVino: 'fermo',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Müller Thurgau Valle Isarco DOC',
    tipoVino: 'fermo',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Müller Thurgau vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Müller Thurgau vendemmia tardiva Terlano DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Müller Thurgau vendemmia tardiva Val Venosta DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Müller Thurgau vendemmia tardiva Valle Isarco DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Pinot bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Pinot bianco passito DOC',
    tipoVino: 'passito',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Pinot bianco passito Terlano DOC',
    tipoVino: 'passito',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Pinot bianco passito Val Venosta DOC',
    tipoVino: 'passito',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Pinot bianco Terlano DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Pinot bianco Val Venosta DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Pinot bianco vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Pinot bianco vendemmia tardiva Terlano DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Pinot bianco vendemmia tardiva Val Venosta DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Pinot bianco-Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco, Pinot grigio'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Pinot bianco-Pinot grigio passito DOC',
    tipoVino: 'passito',
    vitigni: ['Pinot bianco, Pinot grigio'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Pinot grigio passito DOC',
    tipoVino: 'passito',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Pinot grigio passito Terlano DOC',
    tipoVino: 'passito',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Pinot grigio passito Val Venosta DOC',
    tipoVino: 'passito',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Pinot grigio passito Valle Isarco DOC',
    tipoVino: 'passito',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Pinot grigio Terlano DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Pinot grigio Val Venosta DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Pinot grigio Valle Isarco DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Pinot grigio vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Pinot grigio vendemmia tardiva Terlano DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Pinot grigio vendemmia tardiva Val Venosta DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Pinot grigio vendemmia tardiva Valle Isarco DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Pinot nero DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Pinot nero rosato o Kretzer DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Pinot nero rosato o Kretzer Val Venosta DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Pinot nero Val Venosta DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Riesling DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Riesling Italico DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling Italico'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Riesling Italico passito DOC',
    tipoVino: 'passito',
    vitigni: ['Riesling Italico'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Riesling Italico passito Terlano DOC',
    tipoVino: 'passito',
    vitigni: ['Riesling Italico'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Riesling Italico Terlano DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling Italico'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Riesling Italico vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Riesling Italico'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Riesling Italico vendemmia tardiva Terlano DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Riesling Italico'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Riesling passito DOC',
    tipoVino: 'passito',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Riesling passito Terlano DOC',
    tipoVino: 'passito',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Riesling passito Val Venosta DOC',
    tipoVino: 'passito',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Riesling passito Valle Isarco DOC',
    tipoVino: 'passito',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Riesling Terlano DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Riesling Val Venosta DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Riesling Valle Isarco DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Riesling vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Riesling vendemmia tardiva Terlano DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Riesling vendemmia tardiva Val Venosta DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Riesling vendemmia tardiva Valle Isarco DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Santa Maddalena o St.Magdalener DOC',
    tipoVino: 'fermo',
    vitigni: ['Schiava'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Sauvignon passito DOC',
    tipoVino: 'passito',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Sauvignon passito Terlano DOC',
    tipoVino: 'passito',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Sauvignon passito Val Venosta DOC',
    tipoVino: 'passito',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Sauvignon Terlano DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Sauvignon Val Venosta DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Sauvignon vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Sauvignon vendemmia tardiva Terlano DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Sauvignon vendemmia tardiva Val Venosta DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Schiava DOC',
    tipoVino: 'fermo',
    vitigni: ['Schiava'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Schiava grigia DOC',
    tipoVino: 'fermo',
    vitigni: ['Schiava grigia'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Schiava Val Venosta DOC',
    tipoVino: 'fermo',
    vitigni: ['Schiava'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Spumante Chardonnay DOC',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Pinot bianco, Pinot nero, Chardonnay'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Spumante Pinot bianco DOC',
    tipoVino: 'spumante',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Spumante Pinot grigio DOC',
    tipoVino: 'spumante',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Spumante Pinot nero DOC',
    tipoVino: 'spumante',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Spumante rosé DOC',
    tipoVino: 'spumante',
    vitigni: ['Pinot bianco, Pinot nero, Chardonnay'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Sylvaner DOC',
    tipoVino: 'fermo',
    vitigni: ['Sylvaner verde'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Sylvaner passito DOC',
    tipoVino: 'passito',
    vitigni: ['Sylvaner verde'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Sylvaner passito Terlano DOC',
    tipoVino: 'passito',
    vitigni: ['Sylvaner verde'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Sylvaner passito Valle Isarco DOC',
    tipoVino: 'passito',
    vitigni: ['Sylvaner verde'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Sylvaner Terlano DOC',
    tipoVino: 'fermo',
    vitigni: ['Sylvaner verde'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Sylvaner Valle Isarco DOC',
    tipoVino: 'fermo',
    vitigni: ['Sylvaner verde'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Sylvaner vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Sylvaner verde'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Sylvaner vendemmia tardiva Terlano DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Sylvaner verde'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Sylvaner vendemmia tardiva Valle Isarco DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Sylvaner verde'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Terlano o Terlaner DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco, Chardonnay'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Terlano o Terlaner passito DOC',
    tipoVino: 'passito',
    vitigni: ['Pinot bianco, Chardonnay'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Traminer aromatico DOC',
    tipoVino: 'fermo',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Traminer aromatico passito DOC',
    tipoVino: 'passito',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Traminer aromatico passsito Val Venosta DOC',
    tipoVino: 'passito',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Traminer aromatico passsito Valle Isarco DOC',
    tipoVino: 'passito',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Traminer aromatico Val Venosta DOC',
    tipoVino: 'fermo',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Traminer aromatico Valle Isarco DOC',
    tipoVino: 'fermo',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Traminer aromatico vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Traminer aromatico vendemmia tardiva Valle Isarco DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Traminer aromatico vendemmia tardiva Vel Venosta DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino: 'Alto Adige o dell’Alto Adige Veltliner DOC',
    tipoVino: 'fermo',
    vitigni: ['Veltliner'],
  },
  {
    denominazioneVino:
      'Alto Adige o dell’Alto Adige Veltliner Valle Isarco DOC',
    tipoVino: 'fermo',
    vitigni: ['Veltliner'],
  },
  {
    denominazioneVino: 'Amarone della Valpolicella Classico DOCG',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Amarone della Valpolicella Classico riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Amarone della Valpolicella DOCG',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Amarone della Valpolicella riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Amarone della Valpolicella Valpantena DOCG',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Amarone della Valpolicella Valpantena riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Amelia DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Amelia DOC Ciliegiolo',
    tipoVino: 'fermo',
    vitigni: ['Ciliegiolo'],
  },
  {
    denominazioneVino: 'Amelia DOC Ciliegiolo riserva',
    tipoVino: 'fermo',
    vitigni: ['Ciliegiolo'],
  },
  {
    denominazioneVino: 'Amelia DOC Grechetto',
    tipoVino: 'fermo',
    vitigni: ['Grechetto'],
  },
  {
    denominazioneVino: 'Amelia DOC Malvasia',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Amelia DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Amelia DOC Merlot riserva',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Amelia DOC Novello',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Amelia DOC Rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Amelia DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Amelia DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Amelia DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Amelia DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Amelia DOC Vin Santo',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Amelia DOC Vin Santo Occhio di Pernice',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Ansonica Costa dell’Argentario DOC',
    tipoVino: 'fermo',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Arborea DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Arborea DOC Sangiovese rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Arborea DOC Trebbiano',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Romagnolo, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Arborea DOC Trebbiano frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Trebbiano Romagnolo, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Arcole Bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Arcole Bianco Frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Arcole Bianco Passito DOC',
    tipoVino: 'passito',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Arcole Bianco Spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Arcole Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Arcole Cabernet riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Arcole Cabernet sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Arcole Cabernet sauvignon riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Arcole Carmenère DOC',
    tipoVino: 'fermo',
    vitigni: ['Carmènere'],
  },
  {
    denominazioneVino: 'Arcole Carmenère riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Carmènere'],
  },
  {
    denominazioneVino: 'Arcole Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Arcole Chardonnay frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Arcole Garganega DOC',
    tipoVino: 'fermo, vendemmia tardiva',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Arcole Garganega Vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Arcole Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Arcole Merlot riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Arcole Nero DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Arcole Pinot bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Arcole Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Arcole Rosato DOC',
    tipoVino: 'fermo, frizzante',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Arcole Rosato frizzante DOC',
    tipoVino: 'fermo, frizzante',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Arcole Rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Arcole Rosso frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Arcole Rosso Novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Arcole Rosso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Arcole Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Assisi DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Grechetto'],
  },
  {
    denominazioneVino: 'Assisi DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Assisi DOC Cabernet sauvignon riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Assisi DOC Grechetto',
    tipoVino: 'fermo',
    vitigni: ['Grechetto'],
  },
  {
    denominazioneVino: 'Assisi DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Assisi DOC Merlot riserva',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Assisi DOC Novello',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Merlot'],
  },
  {
    denominazioneVino: 'Assisi DOC Pinot nero',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Assisi DOC Pinot nero riserva',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Assisi DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Merlot'],
  },
  {
    denominazioneVino: 'Assisi DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Merlot'],
  },
  {
    denominazioneVino: 'Asti o Asti spumante DOCG',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Asti o Asti spumante metodo classico DOCG',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Atina Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Cabernet Franc'],
  },
  {
    denominazioneVino: 'Atina Cabernet riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Cabernet Franc'],
  },
  {
    denominazioneVino: 'Atina rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Syrah, Merlot, Cabernet Franc'],
  },
  {
    denominazioneVino: 'Atina rosso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Syrah, Merlot, Cabernet Franc'],
  },
  {
    denominazioneVino: 'Atina Semillon DOC',
    tipoVino: 'fermo',
    vitigni: ['Sémillon'],
  },
  {
    denominazioneVino: 'Aversa Asprinio DOC',
    tipoVino: 'fermo',
    vitigni: ['Asprinio'],
  },
  {
    denominazioneVino: 'Aversa Asprinio spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Asprinio'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli bianco classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay, Tocai Friulano, Raboso Piave'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay, Tocai Friulano, Raboso Piave'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Cabernet classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino:
      'Bagnoli di sopra o Bagnoli Cabernet classico riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Cabernet franc classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino:
      'Bagnoli di sopra o Bagnoli Cabernet franc classico riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Cabernet franc DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Cabernet franc riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Cabernet riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino:
      'Bagnoli di sopra o Bagnoli Cabernet sauvignon classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino:
      'Bagnoli di sopra o Bagnoli Cabernet sauvignon classico riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Cabernet sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino:
      'Bagnoli di sopra o Bagnoli Cabernet sauvignon riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Cavrara classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Cavrara'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Cavrara DOC',
    tipoVino: 'fermo',
    vitigni: ['Cavrara'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Corbina classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Corbina'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Corbina DOC',
    tipoVino: 'fermo',
    vitigni: ['Corbina'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Merlot classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Merlot classico riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Merlot riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Refosco classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino:
      'Bagnoli di sopra o Bagnoli Refosco classico riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Refosco DOC',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Refosco riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli rosato classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Cabernet Sauvignon, Raboso Piave'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli rosato DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Cabernet Sauvignon, Raboso Piave'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli rosso classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Cabernet Sauvignon, Raboso Piave'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli rosso classico riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Cabernet Sauvignon, Raboso Piave'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Cabernet Sauvignon, Raboso Piave'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli rosso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Cabernet Sauvignon, Raboso Piave'],
  },
  {
    denominazioneVino:
      'Bagnoli di sopra o Bagnoli Spumante bianco classico DOC',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Tocai Friulano, Raboso Piave'],
  },
  {
    denominazioneVino:
      'Bagnoli di sopra o Bagnoli Spumante bianco classico storico DOC',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Tocai Friulano, Raboso Piave'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Spumante bianco DOC',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Tocai Friulano, Raboso Piave'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Spumante bianco storico DOC',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Tocai Friulano, Raboso Piave'],
  },
  {
    denominazioneVino:
      'Bagnoli di sopra o Bagnoli Spumante rosato o rosé classico DOC',
    tipoVino: 'spumante',
    vitigni: ['Merlot, Cabernet Sauvignon, Raboso Piave'],
  },
  {
    denominazioneVino:
      'Bagnoli di sopra o Bagnoli Spumante rosato o rosé classico storico DOC',
    tipoVino: 'spumante',
    vitigni: ['Merlot, Cabernet Sauvignon, Raboso Piave'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Spumante rosato o rosé DOC',
    tipoVino: 'spumante',
    vitigni: ['Merlot, Cabernet Sauvignon, Raboso Piave'],
  },
  {
    denominazioneVino:
      'Bagnoli di sopra o Bagnoli Spumante rosato o rosé storico DOC',
    tipoVino: 'spumante',
    vitigni: ['Merlot, Cabernet Sauvignon, Raboso Piave'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Turchetta classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Turchetta'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Turchetta DOC',
    tipoVino: 'fermo',
    vitigni: ['Turchetta'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Vin da Viajo classico DOC',
    tipoVino: 'liquoroso',
    vitigni: ['Raboso Piave'],
  },
  {
    denominazioneVino:
      'Bagnoli di sopra o Bagnoli Vin da Viajo classico riserva DOC',
    tipoVino: 'liquoroso',
    vitigni: ['Raboso Piave'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Vin da Viajo DOC',
    tipoVino: 'liquoroso',
    vitigni: ['Raboso Piave'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Bagnoli Vin da Viajo riserva DOC',
    tipoVino: 'liquoroso',
    vitigni: ['Raboso Piave'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Marzemina bianca classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Marzemina bianca'],
  },
  {
    denominazioneVino: 'Bagnoli di sopra o Marzemina bianca DOC',
    tipoVino: 'fermo',
    vitigni: ['Marzemina bianca'],
  },
  {
    denominazioneVino: 'Bagnoli Friularo classico DOCG',
    tipoVino: 'fermo',
    vitigni: ['Raboso Piave'],
  },
  {
    denominazioneVino: 'Bagnoli Friularo classico passito DOCG',
    tipoVino: 'fermo',
    vitigni: ['Raboso Piave'],
  },
  {
    denominazioneVino: 'Bagnoli Friularo classico riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Raboso Piave'],
  },
  {
    denominazioneVino: 'Bagnoli Friularo DOCG',
    tipoVino: 'fermo',
    vitigni: ['Raboso Piave'],
  },
  {
    denominazioneVino: 'Bagnoli Friularo passito DOCG',
    tipoVino: 'passito',
    vitigni: ['Raboso Piave'],
  },
  {
    denominazioneVino: 'Bagnoli Friularo riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Raboso Piave'],
  },
  {
    denominazioneVino:
      'Bagnoli Friularo vendemmia tardiva classico riserva DOCG',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Raboso Piave'],
  },
  {
    denominazioneVino: 'Bagnoli Friularo vendemmia tardiva DOCG',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Raboso Piave'],
  },
  {
    denominazioneVino: 'Barbaresco DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Barbaresco riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Barbera d’Alba DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Nebbiolo'],
  },
  {
    denominazioneVino: 'Barbera d’Alba superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Nebbiolo'],
  },
  {
    denominazioneVino: 'Barbera d’Asti DOCG',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Barbera d’Asti superiore Colli Astiani o Astiano DOCG',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Barbera d’Asti superiore DOCG',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Barbera d’Asti superiore Nizza DOCG',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Barbera d’Asti superiore Tinella DOCG',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Barbera del Monferrato DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Freisa, Grignolino, Dolcetto'],
  },
  {
    denominazioneVino: 'Barbera del Monferrato frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Barbera, Freisa, Grignolino, Dolcetto'],
  },
  {
    denominazioneVino: 'Barbera del Monferrato Superiore DOCG',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Freisa, Grignolino, Dolcetto'],
  },
  {
    denominazioneVino: 'Barco Reale di Carmignano DOC',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Canaiolo nero, Cabernet Franc, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Bardolino Chiaretto Classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella, Molinara'],
  },
  {
    denominazioneVino: 'Bardolino Chiaretto DOC',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella, Molinara'],
  },
  {
    denominazioneVino: 'Bardolino Chiaretto spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Corvina, Corvinone, Rondinella, Molinara'],
  },
  {
    denominazioneVino: 'Bardolino classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella, Molinara'],
  },
  {
    denominazioneVino: 'Bardolino classico superiore DOCG',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella, Molinara'],
  },
  {
    denominazioneVino: 'Bardolino DOC',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella, Molinara'],
  },
  {
    denominazioneVino: 'Bardolino novello classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella, Molinara'],
  },
  {
    denominazioneVino: 'Bardolino novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella, Molinara'],
  },
  {
    denominazioneVino: 'Bardolino superiore DOCG',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella, Molinara'],
  },
  {
    denominazioneVino: 'Barletta DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Barletta DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Barletta DOC Malvasia bianca',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Barletta DOC Malvasia bianca frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Barletta DOC novello',
    tipoVino: 'fermo',
    vitigni: ['Uva di Troia'],
  },
  {
    denominazioneVino: 'Barletta DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Uva di Troia'],
  },
  {
    denominazioneVino: 'Barletta DOC rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Uva di Troia'],
  },
  {
    denominazioneVino: 'Barletta DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Uva di Troia'],
  },
  {
    denominazioneVino: 'Barletta DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Uva di Troia'],
  },
  {
    denominazioneVino: 'Barletta DOC Uva di Troia o Nero di Troia',
    tipoVino: 'fermo',
    vitigni: ['Uva di Troia'],
  },
  {
    denominazioneVino: 'Barletta DOC Uva di Troia o Nero di Troia riserva',
    tipoVino: 'fermo',
    vitigni: ['Uva di Troia'],
  },
  {
    denominazioneVino: 'Barolo DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Barolo riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Bianchello del Metauro DOC',
    tipoVino: 'fermo',
    vitigni: ['Biancame, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Bianchello del Metauro DOC passito',
    tipoVino: 'passito',
    vitigni: ['Biancame, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Bianchello del Metauro DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Biancame, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Bianchello del Metauro DOC superiore',
    tipoVino: 'fermo',
    vitigni: ['Biancame, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Bianco Capena DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Bianco Capena superiore DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Bianco dell’Empolese DOC',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Bianco dell’Empolese DOC Vin Santo',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Bianco delle Venezie DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Pinot bianco, Chardonnay, Müller-Thurgau, Garganega, Verduzzo Friulano, Verduzzo Trevigiano, Tocai Friulano',
    ],
  },
  {
    denominazioneVino: 'Bianco di Aprilia DOC',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Chardonnay'],
  },
  {
    denominazioneVino: 'Bianco di Custoza o Custoza DOC',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Garganega, Tocai Friulano, Cortese'],
  },
  {
    denominazioneVino: 'Bianco di Custoza o Custoza passito DOC',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Garganega, Tocai Friulano, Cortese'],
  },
  {
    denominazioneVino: 'Bianco di Custoza o Custoza spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Trebbiano Toscano, Garganega, Tocai Friulano, Cortese'],
  },
  {
    denominazioneVino: 'Bianco di Custoza o Custoza superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Garganega, Tocai Friulano, Cortese'],
  },
  {
    denominazioneVino: 'Bianco di Pitigliano DOC',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Greco, Malvasia bianca lunga, Verdello'],
  },
  {
    denominazioneVino: 'Bianco di Pitigliano DOC spumante',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Greco, Malvasia bianca lunga, Verdello'],
  },
  {
    denominazioneVino: 'Bianco di Pitigliano DOC superiore',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Greco, Malvasia bianca lunga, Verdello'],
  },
  {
    denominazioneVino: 'Bianco di Pitigliano DOC Vin Santo',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Greco, Malvasia bianca lunga, Verdello'],
  },
  {
    denominazioneVino: 'Bianco di Torgiano DOC',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Biferno DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Biferno DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano, Aglianico'],
  },
  {
    denominazioneVino: 'Biferno DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano, Aglianico'],
  },
  {
    denominazioneVino: 'Biferno DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano, Aglianico'],
  },
  {
    denominazioneVino: 'Biferno DOC rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano, Aglianico'],
  },
  {
    denominazioneVino: 'Bivongi DOC bianco',
    tipoVino: 'fermo',
    vitigni: [
      'Greco Bianco, Guardavalle, Montonico bianco, Malvasia bianca, Ansonica',
    ],
  },
  {
    denominazioneVino: 'Bivongi DOC novello',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo, Greco Nero, Nocera, Calabrese, Castiglione'],
  },
  {
    denominazioneVino: 'Bivongi DOC riserva',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo, Greco Nero, Nocera, Calabrese, Castiglione'],
  },
  {
    denominazioneVino: 'Bivongi DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo, Greco Nero, Nocera, Calabrese, Castiglione'],
  },
  {
    denominazioneVino: 'Bivongi DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo, Greco Nero, Nocera, Calabrese, Castiglione'],
  },
  {
    denominazioneVino: 'Boca DOC',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo, Vespolina, Uva rara'],
  },
  {
    denominazioneVino: 'Boca riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo, Vespolina, Uva rara'],
  },
  {
    denominazioneVino: 'Bolgheri DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Vermentino, Sauvignon, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Bolgheri DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Merlot, Cabernet Franc, Syrah, Sangiovese'],
  },
  {
    denominazioneVino: 'Bolgheri DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Merlot, Cabernet Franc, Syrah, Sangiovese'],
  },
  {
    denominazioneVino: 'Bolgheri DOC rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Merlot, Cabernet Franc, Syrah, Sangiovese'],
  },
  {
    denominazioneVino: 'Bolgheri DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Bolgheri DOC Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Bolgheri Sassicaia DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Bonarda dell’Oltrepò Pavese DOC',
    tipoVino: 'fermo',
    vitigni: ['Croatina, Barbera, Vespolina, Uva rara'],
  },
  {
    denominazioneVino: 'Bonarda dell’Oltrepò Pavese frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Croatina, Barbera, Vespolina, Uva rara'],
  },
  {
    denominazioneVino: 'Bosco Eliceo DOC Bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Romagnolo, Sauvignon, Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Bosco Eliceo DOC Bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Trebbiano Romagnolo, Sauvignon, Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Bosco Eliceo DOC Fortana',
    tipoVino: 'fermo',
    vitigni: ['Fortana'],
  },
  {
    denominazioneVino: 'Bosco Eliceo DOC Fortana frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Fortana'],
  },
  {
    denominazioneVino: 'Bosco Eliceo DOC Fortana vivace',
    tipoVino: 'vivace',
    vitigni: ['Fortana'],
  },
  {
    denominazioneVino: 'Bosco Eliceo DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Bosco Eliceo DOC Merlot vivace',
    tipoVino: 'vivace',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Bosco Eliceo DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Bosco Eliceo DOC Sauvignon frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Bosco Eliceo DOC Sauvignon vivace',
    tipoVino: 'vivace',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Botticino DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Schiava gentile, Marzemino, Sangiovese'],
  },
  {
    denominazioneVino: 'Botticino riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Schiava gentile, Marzemino, Sangiovese'],
  },
  {
    denominazioneVino: 'Brachetto d’Acqui o Acqui DOCG',
    tipoVino: 'fermo',
    vitigni: ['Brachetto'],
  },
  {
    denominazioneVino: 'Brachetto d’Acqui o Acqui passito DOCG',
    tipoVino: 'passito',
    vitigni: ['Brachetto'],
  },
  {
    denominazioneVino: 'Brachetto d’Acqui o Acqui spumante DOCG',
    tipoVino: 'spumante',
    vitigni: ['Brachetto'],
  },
  {
    denominazioneVino: 'Bramaterra DOC',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo, Croatina, Vespolina, Uva rara'],
  },
  {
    denominazioneVino: 'Bramaterra riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo, Croatina, Vespolina, Uva rara'],
  },
  {
    denominazioneVino: 'Breganze Bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Breganze Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Cabernet Franc, Carmènere'],
  },
  {
    denominazioneVino: 'Breganze Cabernet Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Breganze Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Breganze Marzemino DOC',
    tipoVino: 'fermo',
    vitigni: ['Marzemino'],
  },
  {
    denominazioneVino: 'Breganze Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Breganze Pinot bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Breganze Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Breganze Pinot nero DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Breganze Rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Breganze Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Breganze Tai DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Breganze Torcolato DOC',
    tipoVino: 'passito',
    vitigni: ['Vespaiola'],
  },
  {
    denominazioneVino: 'Breganze Vespaiolo DOC',
    tipoVino: 'fermo',
    vitigni: ['Vespaiola'],
  },
  {
    denominazioneVino: 'Breganze Vespaiolo spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Vespaiola'],
  },
  {
    denominazioneVino: 'Brindisi DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Brindisi DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Brindisi DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Brindisi DOC Chardonnay spumante',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Brindisi DOC Fiano',
    tipoVino: 'fermo',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Brindisi DOC Fiano spumante',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Brindisi DOC Malvasia bianca',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Brindisi DOC Malvasia bianca spumante',
    tipoVino: 'spumante',
    vitigni: ['Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Brindisi DOC Negroamaro',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Brindisi DOC Negroamaro riserva',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Brindisi DOC Negroamaro rosato',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Brindisi DOC Negroamaro rosato spumante',
    tipoVino: 'spumante',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Brindisi DOC rosato',
    tipoVino: 'fermo',
    vitigni: [
      'Negro Amaro, Malvasia nera di Brindisi, Susumaniello, Sangiovese, Montepulciano',
    ],
  },
  {
    denominazioneVino: 'Brindisi DOC rosato spumante',
    tipoVino: 'spumante',
    vitigni: [
      'Negro Amaro, Malvasia nera di Brindisi, Susumaniello, Sangiovese, Montepulciano',
    ],
  },
  {
    denominazioneVino: 'Brindisi DOC rosso',
    tipoVino: 'fermo',
    vitigni: [
      'Negro Amaro, Malvasia nera di Brindisi, Susumaniello, Sangiovese, Montepulciano',
    ],
  },
  {
    denominazioneVino: 'Brindisi DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: [
      'Negro Amaro, Malvasia nera di Brindisi, Susumaniello, Sangiovese, Montepulciano',
    ],
  },
  {
    denominazioneVino: 'Brindisi DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: [
      'Negro Amaro, Malvasia nera di Brindisi, Susumaniello, Sangiovese, Montepulciano',
    ],
  },
  {
    denominazioneVino: 'Brindisi DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Brindisi DOC Sauvignon spumante',
    tipoVino: 'spumante',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Brindisi DOC Susumaniello',
    tipoVino: 'fermo',
    vitigni: ['Susumaniello'],
  },
  {
    denominazioneVino: 'Brunello di Montalcino DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Brunello di Montalcino riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Buttafuoco dell’Oltrepò Pavese o Buttafuoco DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Croatina'],
  },
  {
    denominazioneVino:
      'Buttafuoco dell’Oltrepò Pavese o Buttafuoco frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Barbera, Croatina'],
  },
  {
    denominazioneVino: 'Cabernet sauvignon di Torgiano DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Cacc’e Mmitte di Lucera DOC',
    tipoVino: 'fermo',
    vitigni: ['Uva di Troia'],
  },
  {
    denominazioneVino: 'Cagliari DOC Malvasia',
    tipoVino: 'fermo',
    vitigni: ['Malvasia di Sardegna'],
  },
  {
    denominazioneVino: 'Cagliari DOC Malvasia riserva',
    tipoVino: 'fermo',
    vitigni: ['Malvasia di Sardegna'],
  },
  {
    denominazioneVino: 'Cagliari DOC Malvasia spumante',
    tipoVino: 'spumante',
    vitigni: ['Malvasia di Sardegna'],
  },
  {
    denominazioneVino: 'Cagliari DOC Monica',
    tipoVino: 'fermo',
    vitigni: ['Monica'],
  },
  {
    denominazioneVino: 'Cagliari DOC Monica riserva',
    tipoVino: 'fermo',
    vitigni: ['Monica'],
  },
  {
    denominazioneVino: 'Cagliari DOC Moscato',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Cagliari DOC Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Cagliari DOC Vermentino superiore',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Calosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Gamba rossa'],
  },
  {
    denominazioneVino: 'Calosso DOC con menzione vigna',
    tipoVino: 'fermo',
    vitigni: ['Gamba rossa'],
  },
  {
    denominazioneVino: 'Calosso DOC riserva',
    tipoVino: 'fermo',
    vitigni: ['Gamba rossa'],
  },
  {
    denominazioneVino: 'Calosso DOC riserva con menzione vigna',
    tipoVino: 'fermo',
    vitigni: ['Gamba rossa'],
  },
  {
    denominazioneVino: 'Calosso Passarà DOC',
    tipoVino: 'passito',
    vitigni: ['Gamba rossa'],
  },
  {
    denominazioneVino: 'Calosso Passarà DOC con menzione vigna',
    tipoVino: 'passito',
    vitigni: ['Gamba rossa'],
  },
  {
    denominazioneVino: 'Campi Flegrei bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Campi Flegrei DOC Falanghina',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Campi Flegrei DOC Falanghina passito',
    tipoVino: 'passito',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Campi Flegrei DOC Falanghina spumante',
    tipoVino: 'spumante',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Campi Flegrei DOC Piedirosso',
    tipoVino: 'fermo',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Campi Flegrei DOC Piedirosso passsito',
    tipoVino: 'passito',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Campi Flegrei DOC Piedirosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Campi Flegrei DOC Piedirosso rosato',
    tipoVino: 'fermo',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Campi Flegrei rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Piedirosso, Aglianico'],
  },
  {
    denominazioneVino: 'Campi Flegrei rosso novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Piedirosso, Aglianico'],
  },
  {
    denominazioneVino: 'Campidano di Terralba o Terralba DOC Bovale',
    tipoVino: 'fermo',
    vitigni: ['Bovale, Bovale grande'],
  },
  {
    denominazioneVino: 'Campidano di Terralba o Terralba DOC Bovale riserva',
    tipoVino: 'fermo',
    vitigni: ['Bovale, Bovale grande'],
  },
  {
    denominazioneVino: 'Campidano di Terralba o Terralba DOC Bovale superiore',
    tipoVino: 'fermo',
    vitigni: ['Bovale, Bovale grande'],
  },
  {
    denominazioneVino: 'Canavese Barbera DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Canavese bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Erbaluce'],
  },
  {
    denominazioneVino: 'Canavese bianco spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Erbaluce'],
  },
  {
    denominazioneVino: 'Canavese Nebbiolo DOC',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Canavese rosato DOC',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo, Barbera, Uva rara, Bonarda'],
  },
  {
    denominazioneVino: 'Canavese rosato spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Nebbiolo, Barbera, Uva rara, Bonarda'],
  },
  {
    denominazioneVino: 'Canavese rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo, Barbera, Uva rara, Bonarda'],
  },
  {
    denominazioneVino: 'Canavese rosso novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo, Barbera, Uva rara, Bonarda'],
  },
  {
    denominazioneVino: 'Candia dei Colli Apuani DOC Barsaglina o Massaretta',
    tipoVino: 'fermo',
    vitigni: ['Barsaglina'],
  },
  {
    denominazioneVino: 'Candia dei Colli Apuani DOC bianco amabile',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Candia dei Colli Apuani DOC bianco secco',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Candia dei Colli Apuani DOC bianco vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Candia dei Colli Apuani DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Merlot'],
  },
  {
    denominazioneVino: 'Candia dei Colli Apuani DOC rosato Vermentino nero',
    tipoVino: 'fermo',
    vitigni: ['Vermentino nero'],
  },
  {
    denominazioneVino: 'Candia dei Colli Apuani DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Merlot'],
  },
  {
    denominazioneVino: 'Candia dei Colli Apuani DOC Vermentino bianco',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Candia dei Colli Apuani DOC Vermentino nero',
    tipoVino: 'fermo',
    vitigni: ['Vermentino nero'],
  },
  {
    denominazioneVino: 'Candia dei Colli Apuani DOC Vin Santo',
    tipoVino: 'passito',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Canelli o Moscato di Canelli DOCG',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Canelli o Moscato di Canelli Riserva DOCG',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Canelli o Moscato di Canelli Riserva Vigna DOCG',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Canelli o Moscato di Canelli Vigna DOCG',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Cannellino di Frascati DOCG',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca di Candia, Malvasia del Lazio'],
  },
  {
    denominazioneVino: 'Cannonau di Sardegna DOC classico',
    tipoVino: 'fermo',
    vitigni: ['Cannonau'],
  },
  {
    denominazioneVino: 'Cannonau di Sardegna DOC liquoroso dolce',
    tipoVino: 'liquoroso',
    vitigni: ['Cannonau'],
  },
  {
    denominazioneVino: 'Cannonau di Sardegna DOC liquoroso secco',
    tipoVino: 'liquoroso',
    vitigni: ['Cannonau'],
  },
  {
    denominazioneVino: 'Cannonau di Sardegna DOC passito',
    tipoVino: 'passito',
    vitigni: ['Cannonau'],
  },
  {
    denominazioneVino: 'Cannonau di Sardegna DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Cannonau'],
  },
  {
    denominazioneVino: 'Cannonau di Sardegna DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Cannonau'],
  },
  {
    denominazioneVino: 'Cannonau di Sardegna DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Cannonau'],
  },
  {
    denominazioneVino: 'Capalbio DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Capalbio DOC Cabernet Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Capalbio DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Capalbio DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Capalbio DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Capalbio DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Capalbio DOC Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Capalbio DOC Vin Santo',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Capri bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina, Greco, Biancolella'],
  },
  {
    denominazioneVino: 'Capri rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Capriano del Colle bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano di Soave, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Capriano del Colle bianco superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano di Soave, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Capriano del Colle Marzemino DOC',
    tipoVino: 'fermo',
    vitigni: ['Marzemino'],
  },
  {
    denominazioneVino: 'Capriano del Colle novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Marzemino, Merlot, Sangiovese'],
  },
  {
    denominazioneVino: 'Capriano del Colle rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Marzemino, Merlot, Sangiovese'],
  },
  {
    denominazioneVino: 'Capriano del Colle rosso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Marzemino, Merlot, Sangiovese'],
  },
  {
    denominazioneVino: 'Capriano del Colle Trebbiano DOC',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano di Soave, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Carema DOC',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Carema riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Carignano del Sulcis DOC novello',
    tipoVino: 'fermo',
    vitigni: ['Carignano'],
  },
  {
    denominazioneVino: 'Carignano del Sulcis DOC passito',
    tipoVino: 'passito',
    vitigni: ['Carignano'],
  },
  {
    denominazioneVino: 'Carignano del Sulcis DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Carignano'],
  },
  {
    denominazioneVino: 'Carignano del Sulcis DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Carignano'],
  },
  {
    denominazioneVino: 'Carignano del Sulcis DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Carignano'],
  },
  {
    denominazioneVino: 'Carignano del Sulcis DOC rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Carignano'],
  },
  {
    denominazioneVino: 'Carmignano DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Canaiolo nero, Cabernet Franc, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Carmignano riserva DOCG',
    tipoVino: 'fermo',
    vitigni: [
      'Sangiovese, Canaiolo bianco, Canaiolo nero, Cabernet Franc, Cabernet Sauvignon, Trebbiano Toscano, Malvasia del Chianti',
    ],
  },
  {
    denominazioneVino: 'Carso Cabernet Franc DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Carso Cabernet Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Carso Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Carso Glera DOC',
    tipoVino: 'fermo',
    vitigni: ['Glera'],
  },
  {
    denominazioneVino: 'Carso Malvasia DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia Istriana'],
  },
  {
    denominazioneVino: 'Carso Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Carso Pinot Grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Carso Refosco o Refosco dal peduncolo rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino: 'Carso Rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Terrano'],
  },
  {
    denominazioneVino: 'Carso Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Carso Terrano Classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Terrano'],
  },
  {
    denominazioneVino: 'Carso Terrano DOC',
    tipoVino: 'fermo',
    vitigni: ['Terrano'],
  },
  {
    denominazioneVino: 'Carso Traminer DOC',
    tipoVino: 'fermo',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino: 'Carso Vitouska DOC',
    tipoVino: 'fermo',
    vitigni: ['Vitouska'],
  },
  {
    denominazioneVino: 'Casavecchia di Pontelatone rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Casavecchia'],
  },
  {
    denominazioneVino: 'Casavecchia di Pontelatone rosso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Casavecchia'],
  },
  {
    denominazioneVino: 'Casteggio DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Croatina, Uva rara, Vespolina, Pinot nero'],
  },
  {
    denominazioneVino: 'Castel del Monte Bombino nero DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nero di Troia'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC Aglianico',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC Aglianico riserva',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC Aglianico rosato',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC Aglianico rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Pampanuto, Chardonnay, Bombino bianco'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Pampanuto, Chardonnay, Bombino bianco'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Pampanuto, Chardonnay, Bombino bianco'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC Bombino bianco',
    tipoVino: 'fermo',
    vitigni: ['Bombino bianco'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC Bombino bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Bombino bianco'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC Bombino bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Bombino bianco'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC Cabernet',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC Cabernet riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC Chardonnay frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC Nero di Troia',
    tipoVino: 'fermo',
    vitigni: ['Uva di Troia'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Uva di Troia, Aglianico, Bombino nero'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Uva di Troia, Aglianico, Bombino nero'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC rosato spumante',
    tipoVino: 'spumante',
    vitigni: ['Uva di Troia, Aglianico, Bombino nero'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Uva di Troia, Aglianico, Montepulciano'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Uva di Troia, Aglianico, Montepulciano'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Castel del Monte DOC Sauvignon frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Castel del Monte Nero di Troia riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nero di Troia'],
  },
  {
    denominazioneVino: 'Castel del Monte Rosso riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nero di Troia'],
  },
  {
    denominazioneVino: 'Castel San Lorenzo DOC Aglianicone',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Castel San Lorenzo DOC Barbera',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Castel San Lorenzo DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Castel San Lorenzo DOC Moscato',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Castel San Lorenzo DOC Moscato lambiccato',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Castel San Lorenzo DOC Moscato passito',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Castel San Lorenzo DOC Moscato spumante',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Castel San Lorenzo DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Sangiovese'],
  },
  {
    denominazioneVino: 'Castel San Lorenzo DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Sangiovese'],
  },
  {
    denominazioneVino: 'Casteller DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Castelli di Jesi Verdicchio classico riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Verdicchio'],
  },
  {
    denominazioneVino: 'Castelli di Jesi Verdicchio riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Verdicchio'],
  },
  {
    denominazioneVino: 'Castelli Romani DOC bianco',
    tipoVino: 'fermo',
    vitigni: [
      'Malvasia bianca di Candia, Malvasia del Lazio, Trebbiano Toscano, Trebbiano di Soave',
    ],
  },
  {
    denominazioneVino: 'Castelli Romani DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: [
      'Malvasia bianca di Candia, Malvasia del Lazio, Trebbiano Toscano, Trebbiano di Soave',
    ],
  },
  {
    denominazioneVino: 'Castelli Romani DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Cesanese comune, Merlot, Montepulciano, Nero buono, Sangiovese'],
  },
  {
    denominazioneVino: 'Castelli Romani DOC rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Cesanese comune, Merlot, Montepulciano, Nero buono, Sangiovese'],
  },
  {
    denominazioneVino: 'Castelli Romani DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Cesanese comune, Merlot, Montepulciano, Nero buono, Sangiovese'],
  },
  {
    denominazioneVino: 'Castelli Romani DOC rosso frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Cesanese comune, Merlot, Montepulciano, Nero buono, Sangiovese'],
  },
  {
    denominazioneVino: 'Castelli Romani DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Cesanese comune, Merlot, Montepulciano, Nero buono, Sangiovese'],
  },
  {
    denominazioneVino: 'Cellatica DOC',
    tipoVino: 'fermo',
    vitigni: ['Marzemino, Barbera, Incrocio Terzi n.1'],
  },
  {
    denominazioneVino: 'Cellatica superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Marzemino, Barbera, Incrocio Terzi n.1'],
  },
  {
    denominazioneVino: 'Cerasuolo d’Abruzzo DOC',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Cerasuolo d’Abruzzo superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Cerasuolo di Vittoria classico DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nero d’Avola, Frappato'],
  },
  {
    denominazioneVino: 'Cerasuolo di Vittoria DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nero d’Avola, Frappato'],
  },
  {
    denominazioneVino: 'Cerveteri DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Cerveteri DOC bianco amabile',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Cerveteri DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Trebbiano Toscano, Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Cerveteri DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Montepulciano, Merlot'],
  },
  {
    denominazioneVino: 'Cerveteri DOC rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Sangiovese, Montepulciano, Merlot'],
  },
  {
    denominazioneVino: 'Cerveteri DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Montepulciano, Merlot'],
  },
  {
    denominazioneVino: 'Cerveteri DOC rosso amabile',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Montepulciano, Merlot'],
  },
  {
    denominazioneVino: 'Cerveteri DOC Trebbiano o Procanico',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Cesanese del Piglio o Piglio DOCG',
    tipoVino: 'fermo',
    vitigni: ['Cesanese di Affile, Cesanese comune'],
  },
  {
    denominazioneVino: 'Cesanese del Piglio o Piglio superiore DOCG',
    tipoVino: 'fermo',
    vitigni: ['Cesanese di Affile, Cesanese comune'],
  },
  {
    denominazioneVino: 'Cesanese del Piglio o Piglio superiore riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Cesanese di Affile, Cesanese comune'],
  },
  {
    denominazioneVino: 'Cesanese di Affile DOC',
    tipoVino: 'fermo',
    vitigni: ['Cesanese di Affile'],
  },
  {
    denominazioneVino: 'Cesanese di Affile dolce DOC',
    tipoVino: 'fermo',
    vitigni: ['Cesanese di Affile'],
  },
  {
    denominazioneVino: 'Cesanese di Affile riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cesanese di Affile'],
  },
  {
    denominazioneVino: 'Cesanese di Olevano Romano amabile DOC',
    tipoVino: 'fermo',
    vitigni: ['Cesanese di Affile, Cesanese comune'],
  },
  {
    denominazioneVino: 'Cesanese di Olevano Romano DOC',
    tipoVino: 'fermo',
    vitigni: ['Cesanese di Affile, Cesanese comune'],
  },
  {
    denominazioneVino: 'Cesanese di Olevano Romano dolce DOC',
    tipoVino: 'fermo',
    vitigni: ['Cesanese di Affile, Cesanese comune'],
  },
  {
    denominazioneVino: 'Cesanese di Olevano Romano dolce frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Cesanese di Affile, Cesanese comune'],
  },
  {
    denominazioneVino: 'Cesanese di Olevano Romano riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cesanese di Affile, Cesanese comune'],
  },
  {
    denominazioneVino: 'Cesanese di Olevano Romano superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Cesanese di Affile, Cesanese comune'],
  },
  {
    denominazioneVino: 'Chardonnay di Torgiano DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Chianti classico DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Chianti Classico Gran Selezione DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Chianti classico riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Chianti Colli Aretini DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Chianti Colli Aretini riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Chianti Colli Fiorentini DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Chianti Colli Fiorentini riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Chianti Colli Senesi DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Chianti Colli Senesi riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Chianti Colline Pisane DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Chianti Colline Pisane riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Chianti DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Chianti Montalbano DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Chianti Montalbano riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Chianti Montespertoli DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Chianti Montespertoli riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Chianti riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Chianti Rufina DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Chianti Rufina riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Chianti superiore DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Cilento DOC Aglianico',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Cilento DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Fiano, Trebbiano Toscano, Greco, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Cilento DOC Fiano',
    tipoVino: 'fermo',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Cilento DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Aglianico, Primitivo, Piedirosso'],
  },
  {
    denominazioneVino: 'Cilento DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Aglianico, Piedirosso, Primitivo'],
  },
  {
    denominazioneVino: 'Cinque Terre DOC',
    tipoVino: 'fermo',
    vitigni: ['Bosco, Albarola, Vermentino'],
  },
  {
    denominazioneVino: 'Cinque Terre DOC Costa da Posa',
    tipoVino: 'fermo',
    vitigni: ['Bosco, Albarola, Vermentino'],
  },
  {
    denominazioneVino: 'Cinque Terre DOC Costa de Campu',
    tipoVino: 'fermo',
    vitigni: ['Bosco, Albarola, Vermentino'],
  },
  {
    denominazioneVino: 'Cinque Terre DOC Costa de Sera',
    tipoVino: 'fermo',
    vitigni: ['Bosco, Albarola, Vermentino'],
  },
  {
    denominazioneVino: 'Cinque Terre DOC Sciacchetrà',
    tipoVino: 'passito',
    vitigni: ['Bosco, Albarola, Vermentino'],
  },
  {
    denominazioneVino: 'Cinque Terre DOC Sciacchetrà riserva',
    tipoVino: 'passito',
    vitigni: ['Bosco, Albarola, Vermentino'],
  },
  {
    denominazioneVino: 'Circeo DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Chardonnay, Malvasia del Lazio'],
  },
  {
    denominazioneVino: 'Circeo DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Trebbiano Toscano, Chardonnay, Malvasia del Lazio'],
  },
  {
    denominazioneVino: 'Circeo DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Trebbiano Toscano, Chardonnay, Malvasia del Lazio'],
  },
  {
    denominazioneVino: 'Circeo DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Circeo DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Sangiovese, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Circeo DOC rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Merlot, Sangiovese, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Circeo DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Sangiovese, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Circeo DOC rosso frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Merlot, Sangiovese, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Circeo DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Sangiovese, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Circeo DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Circeo DOC Trebbiano',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Cirò DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Greco Bianco'],
  },
  {
    denominazioneVino: 'Cirò DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo'],
  },
  {
    denominazioneVino: 'Cirò DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo'],
  },
  {
    denominazioneVino: 'Cirò DOC rosso classico',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo'],
  },
  {
    denominazioneVino: 'Cirò DOC rosso classico superiore',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo'],
  },
  {
    denominazioneVino: 'Cirò DOC rosso classico superiore riserva',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo'],
  },
  {
    denominazioneVino: 'Cirò DOC rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo'],
  },
  {
    denominazioneVino: 'Cirò DOC rosso superiore riserva',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo'],
  },
  {
    denominazioneVino: 'Cisterna d’Asti DOC',
    tipoVino: 'fermo',
    vitigni: ['Croatina'],
  },
  {
    denominazioneVino: 'Cisterna d’Asti superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Croatina'],
  },
  {
    denominazioneVino: 'Colli Albani DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Malvasia bianca di Candia, Malvasia del Lazio, Trebbiano Toscano, Trebbiano di Soave',
    ],
  },
  {
    denominazioneVino: 'Colli Albani novello DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Malvasia bianca di Candia, Malvasia del Lazio, Trebbiano Toscano, Trebbiano di Soave',
    ],
  },
  {
    denominazioneVino: 'Colli Albani spumante DOC',
    tipoVino: 'spumante',
    vitigni: [
      'Malvasia bianca di Candia, Malvasia del Lazio, Trebbiano Toscano, Trebbiano di Soave',
    ],
  },
  {
    denominazioneVino: 'Colli Albani superiore DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Malvasia bianca di Candia, Malvasia del Lazio, Trebbiano Toscano, Trebbiano di Soave',
    ],
  },
  {
    denominazioneVino: 'Colli Altotiberini DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Colli Altotiberini DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Grechetto, Chardonnay, Pinot bianco, Pinot nero, Pinot grigio'],
  },
  {
    denominazioneVino: 'Colli Altotiberini DOC bianco superiore',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Colli Altotiberini DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colli Altotiberini DOC Cabernet sauvignon riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colli Altotiberini DOC Grechetto',
    tipoVino: 'fermo',
    vitigni: ['Grechetto'],
  },
  {
    denominazioneVino: 'Colli Altotiberini DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Colli Altotiberini DOC Merlot riserva',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Colli Altotiberini DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Altotiberini DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Altotiberini DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Altotiberini DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Altotiberini DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Altotiberini DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Altotiberini DOC Trebbiano',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Colli Asolani Prosecco DOCG',
    tipoVino: 'fermo',
    vitigni: ['Glera'],
  },
  {
    denominazioneVino: 'Colli Asolani Prosecco frizzante DOCG',
    tipoVino: 'frizzante',
    vitigni: ['Glera'],
  },
  {
    denominazioneVino: 'Colli Asolani Prosecco spumante superiore DOCG',
    tipoVino: 'spumante',
    vitigni: ['Glera'],
  },
  {
    denominazioneVino: 'Colli Berici Barbarano rosso o Barbarano DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai rosso'],
  },
  {
    denominazioneVino: 'Colli Berici Barbarano rosso o Barbarano riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai rosso'],
  },
  {
    denominazioneVino: 'Colli Berici Barbarano spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Tocai rosso'],
  },
  {
    denominazioneVino: 'Colli Berici Bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Colli Berici Bianco frizzante DOC',
    tipoVino: 'fermo',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Colli Berici Bianco spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Colli Berici Bianco spumante metodo classico DOC',
    tipoVino: 'spumante',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Colli Berici Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Cabernet Franc, Carmènere'],
  },
  {
    denominazioneVino: 'Colli Berici Cabernet franc DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Colli Berici Cabernet franc riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Colli Berici Cabernet riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Cabernet Franc, Carmènere'],
  },
  {
    denominazioneVino: 'Colli Berici Cabernet sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colli Berici Cabernet sauvignon riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colli Berici Carmenère DOC',
    tipoVino: 'fermo',
    vitigni: ['Carmènere'],
  },
  {
    denominazioneVino: 'Colli Berici Carmenère riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Carmènere'],
  },
  {
    denominazioneVino: 'Colli Berici Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Colli Berici Garganego DOC',
    tipoVino: 'fermo',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Colli Berici Manzoni bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Manzoni bianco'],
  },
  {
    denominazioneVino: 'Colli Berici Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Colli Berici Merlot riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Colli Berici novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Colli Berici passito DOC',
    tipoVino: 'passito',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Colli Berici Pinot bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Colli Berici Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Colli Berici Pinot nero DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Colli Berici rosato o rosè metodo classico DOC',
    tipoVino: 'spumante',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Colli Berici rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Colli Berici rosso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Colli Berici Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Colli Berici Tai DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Colli Berici Tai Rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai rosso'],
  },
  {
    denominazioneVino: 'Colli Berici Tai Rosso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai rosso'],
  },
  {
    denominazioneVino: 'Colli Berici Tai rosso spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Tocai rosso'],
  },
  {
    denominazioneVino: 'Colli Bolognesi classico Pignoletto DOCG',
    tipoVino: 'fermo',
    vitigni: ['Pignoletto'],
  },
  {
    denominazioneVino: 'Colli Bolognesi DOC Barbera',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Colli Bolognesi DOC Barbera frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Colli Bolognesi DOC Barbera riserva',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Colli Bolognesi DOC Bologna bianco',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Colli Bolognesi DOC Bologna rosso',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colli Bolognesi DOC Bologna Spumante',
    tipoVino: 'spumante',
    vitigni: [
      'Chardonnay, Pinot bianco, Sauvignon, Riesling Italico, Pinot nero, Pignoletto',
    ],
  },
  {
    denominazioneVino: 'Colli Bolognesi DOC Cabernet Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colli Bolognesi DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Colli Bolognesi DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Colli Bolognesi DOC Pignoletto frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Pignoletto'],
  },
  {
    denominazioneVino: 'Colli Bolognesi DOC Pignoletto passito',
    tipoVino: 'fermo',
    vitigni: ['Pignoletto'],
  },
  {
    denominazioneVino: 'Colli Bolognesi DOC Pignoletto spumante',
    tipoVino: 'spumante',
    vitigni: ['Pignoletto'],
  },
  {
    denominazioneVino: 'Colli Bolognesi DOC Pignoletto superiore',
    tipoVino: 'fermo',
    vitigni: ['Pignoletto'],
  },
  {
    denominazioneVino: 'Colli Bolognesi DOC Pinot bianco',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Colli Bolognesi DOC Riesling Italico',
    tipoVino: 'fermo',
    vitigni: ['Riesling Italico'],
  },
  {
    denominazioneVino: 'Colli Bolognesi DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Colli d’Imola DOC Barbera',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Colli d’Imola DOC bianco',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Colli d’Imola DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Colli d’Imola DOC bianco superiore',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Colli d’Imola DOC Cabernet Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colli d’Imola DOC Cabernet Sauvignon riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colli d’Imola DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Colli d’Imola DOC Chardonnay frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Colli d’Imola DOC Pignoletto',
    tipoVino: 'fermo',
    vitigni: ['Pignoletto'],
  },
  {
    denominazioneVino: 'Colli d’Imola DOC Pignoletto frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Pignoletto'],
  },
  {
    denominazioneVino: 'Colli d’Imola DOC rosso',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Colli d’Imola DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Colli d’Imola DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Colli d’Imola DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli d’Imola DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli d’Imola DOC Trebbiano',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Romagnolo'],
  },
  {
    denominazioneVino: 'Colli d’Imola DOC Trebbiano frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Trebbiano Romagnolo'],
  },
  {
    denominazioneVino: 'Colli del Trasimeno DOC bianco',
    tipoVino: 'fermo',
    vitigni: [
      'Trebbiano Toscano, Grechetto, Chardonnay, Pinot bianco, Pinot grigio',
    ],
  },
  {
    denominazioneVino: 'Colli del Trasimeno DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: [
      'Trebbiano Toscano, Grechetto, Chardonnay, Pinot bianco, Pinot grigio',
    ],
  },
  {
    denominazioneVino: 'Colli del Trasimeno DOC bianco scelto',
    tipoVino: 'fermo',
    vitigni: [
      'Trebbiano Toscano, Grechetto, Chardonnay, Pinot bianco, Pinot grigio',
    ],
  },
  {
    denominazioneVino: 'Colli del Trasimeno DOC bianco vino santo',
    tipoVino: 'fermo',
    vitigni: [
      'Trebbiano Toscano, Grechetto, Chardonnay, Pinot bianco, Pinot grigio',
    ],
  },
  {
    denominazioneVino: 'Colli del Trasimeno DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colli del Trasimeno DOC Cabernet sauvignon riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colli del Trasimeno DOC Gamay',
    tipoVino: 'fermo',
    vitigni: ['Gamay del Trasimeno'],
  },
  {
    denominazioneVino: 'Colli del Trasimeno DOC Gamay riserva',
    tipoVino: 'fermo',
    vitigni: ['Gamay del Trasimeno'],
  },
  {
    denominazioneVino: 'Colli del Trasimeno DOC Grechetto',
    tipoVino: 'fermo',
    vitigni: ['Grechetto'],
  },
  {
    denominazioneVino: 'Colli del Trasimeno DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Colli del Trasimeno DOC Merlot riserva',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Colli del Trasimeno DOC rosato',
    tipoVino: 'fermo',
    vitigni: [
      'Sangiovese, Ciliegiolo, Merlot, Cabernet Sauvignon, Gamay del Trasimeno',
    ],
  },
  {
    denominazioneVino: 'Colli del Trasimeno DOC rosso',
    tipoVino: 'fermo',
    vitigni: [
      'Sangiovese, Ciliegiolo, Merlot, Cabernet Sauvignon, Gamay del Trasimeno',
    ],
  },
  {
    denominazioneVino: 'Colli del Trasimeno DOC rosso frizzante',
    tipoVino: 'frizzante',
    vitigni: [
      'Sangiovese, Ciliegiolo, Merlot, Cabernet Sauvignon, Gamay del Trasimeno',
    ],
  },
  {
    denominazioneVino: 'Colli del Trasimeno DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: [
      'Sangiovese, Ciliegiolo, Merlot, Cabernet Sauvignon, Gamay del Trasimeno',
    ],
  },
  {
    denominazioneVino: 'Colli del Trasimeno DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: [
      'Sangiovese, Ciliegiolo, Merlot, Cabernet Sauvignon, Gamay del Trasimeno',
    ],
  },
  {
    denominazioneVino: 'Colli del Trasimeno DOC rosso scelto',
    tipoVino: 'fermo',
    vitigni: [
      'Sangiovese, Ciliegiolo, Merlot, Cabernet Sauvignon, Gamay del Trasimeno',
    ],
  },
  {
    denominazioneVino: 'Colli del Trasimeno DOC spumante metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot bianco, Pinot grigio, Pinot nero, Grechetto'],
  },
  {
    denominazioneVino: 'Colli del Trasimeno DOC spumante metodo classico rosè',
    tipoVino: 'spumante',
    vitigni: ['Pinot nero, Chardonnay, Pinot bianco'],
  },
  {
    denominazioneVino: 'Colli dell’Etruria Centrale DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Colli dell’Etruria Centrale DOC Novello',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli dell’Etruria Centrale DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli dell’Etruria Centrale DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli dell’Etruria Centrale DOC Vin Santo',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino:
      'Colli dell’Etruria Centrale DOC Vin Santo Occhio di Pernice',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Colli dell’Etruria Centrale DOC Vin Santo Occhio di Pernice riserva',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli dell’Etruria Centrale DOC Vin Santo riserva',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Colli della Sabina bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia del Lazio, Trebbiano Toscano, Trebbiano giallo'],
  },
  {
    denominazioneVino: 'Colli della Sabina rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Montepulciano'],
  },
  {
    denominazioneVino: 'Colli di Conegliano bianco DOCG',
    tipoVino: 'fermo',
    vitigni: ['Manzoni bianco, Pinot bianco, Chardonnay, Riesling, Sauvignon'],
  },
  {
    denominazioneVino: 'Colli di Conegliano Refrontolo DOCG',
    tipoVino: 'fermo',
    vitigni: ['Marzemino'],
  },
  {
    denominazioneVino: 'Colli di Conegliano Refrontolo passito DOCG',
    tipoVino: 'passito',
    vitigni: ['Marzemino'],
  },
  {
    denominazioneVino: 'Colli di Conegliano rosso DOCG',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon, Marzemino, Merlot'],
  },
  {
    denominazioneVino: 'Colli di Conegliano rosso riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon, Marzemino, Merlot'],
  },
  {
    denominazioneVino: 'Colli di Conegliano Torchiato di Fregona DOCG',
    tipoVino: 'passito',
    vitigni: ['Glera, Verdiso, Boschera'],
  },
  {
    denominazioneVino: 'Colli di Faenza DOC bianco',
    tipoVino: 'fermo',
    vitigni: [
      'Chardonnay, Pignoletto, Pinot bianco, Sauvignon, Trebbiano Romagnolo',
    ],
  },
  {
    denominazioneVino: 'Colli di Faenza DOC Pinot bianco',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Colli di Faenza DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Ancellotta, Ciliegiolo, Merlot, Sangiovese'],
  },
  {
    denominazioneVino: 'Colli di Faenza DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Ancellotta, Ciliegiolo, Merlot, Sangiovese'],
  },
  {
    denominazioneVino: 'Colli di Faenza DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli di Faenza DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli di Faenza DOC Trebbiano',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Romagnolo'],
  },
  {
    denominazioneVino: 'Colli di Luni DOC Albarola',
    tipoVino: 'fermo',
    vitigni: ['Albarola'],
  },
  {
    denominazioneVino: 'Colli di Luni DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Vermentino, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Colli di Luni DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli di Luni DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli di Luni DOC Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Colli di Luni DOC Vermentino superiore',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Barbera',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Bonarda',
    tipoVino: 'fermo',
    vitigni: ['Bonarda'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Cabernet franc',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Chardonnay frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Chardonnay spumante',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Lambrusco',
    tipoVino: 'fermo',
    vitigni: ['Lambrusco Maestri'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Lambrusco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Lambrusco Maestri'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Malvasia',
    tipoVino: 'fermo',
    vitigni: ['Malvasia di Candia aromatica'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Malvasia frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Malvasia di Candia aromatica'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Malvasia spumante',
    tipoVino: 'spumante',
    vitigni: ['Malvasia di Candia aromatica'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Pinot bianco',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Pinot bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Pinot bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Pinot grigio',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Pinot grigio frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Pinot nero',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Bonarda, Croatina'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC rosso frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Barbera, Bonarda, Croatina'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Sauvignon frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Sauvignon spumante',
    tipoVino: 'spumante',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Colli di Parma DOC Spumante',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero, Chardonnay, Pinot bianco'],
  },
  {
    denominazioneVino: 'Colli di Rimini DOC Biancame',
    tipoVino: 'fermo',
    vitigni: ['Biancame'],
  },
  {
    denominazioneVino: 'Colli di Rimini DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Romagnolo, Biancame, Mostosa'],
  },
  {
    denominazioneVino: 'Colli di Rimini DOC Cabernet Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colli di Rimini DOC Cabernet Sauvignon riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colli di Rimini DOC Rèbola amabile',
    tipoVino: 'fermo',
    vitigni: ['Pignoletto'],
  },
  {
    denominazioneVino: 'Colli di Rimini DOC Rèbola dolce',
    tipoVino: 'fermo',
    vitigni: ['Pignoletto'],
  },
  {
    denominazioneVino: 'Colli di Rimini DOC Rèbola passito',
    tipoVino: 'passito',
    vitigni: ['Pignoletto'],
  },
  {
    denominazioneVino: 'Colli di Rimini DOC Rèbola secco',
    tipoVino: 'fermo',
    vitigni: ['Pignoletto'],
  },
  {
    denominazioneVino: 'Colli di Rimini DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Merlot, Barbera'],
  },
  {
    denominazioneVino: 'Colli di Rimini DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli di Rimini DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli di Rimini DOC Sangiovese superiore',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC bianco anche classico',
    tipoVino: 'fermo',
    vitigni: ['Spergola'],
  },
  {
    denominazioneVino:
      'Colli di Scandiano e Canossa DOC bianco frizzante e bianco classico frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Spergola'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Spergola'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino:
      'Colli di Scandiano e Canossa DOC Cabernet sauvignon riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Chardonnay frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Chardonnay spumante',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Lambrusco',
    tipoVino: 'fermo',
    vitigni: [
      'Lambrusco Maestri, Lambrusco Barghi, Lambrusco Marani, Lambrusco Salamino',
    ],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Lambrusco frizzante',
    tipoVino: 'fermo',
    vitigni: [
      'Lambrusco Maestri, Lambrusco Barghi, Lambrusco Marani, Lambrusco Salamino',
    ],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Lambrusco Grasparossa',
    tipoVino: 'fermo',
    vitigni: ['Lambrusco Grasparossa'],
  },
  {
    denominazioneVino:
      'Colli di Scandiano e Canossa DOC Lambrusco Grasparossa frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Lambrusco Grasparossa'],
  },
  {
    denominazioneVino:
      'Colli di Scandiano e Canossa DOC Lambrusco Montericco rosato',
    tipoVino: 'fermo',
    vitigni: ['Lambrusco Montericco'],
  },
  {
    denominazioneVino:
      'Colli di Scandiano e Canossa DOC Lambrusco Montericco rosato frizzante',
    tipoVino: 'fermo',
    vitigni: ['Lambrusco Montericco'],
  },
  {
    denominazioneVino:
      'Colli di Scandiano e Canossa DOC Lambrusco Montericco rosso',
    tipoVino: 'fermo',
    vitigni: ['Lambrusco Montericco'],
  },
  {
    denominazioneVino:
      'Colli di Scandiano e Canossa DOC Lambrusco Montericco rosso frizzante',
    tipoVino: 'fermo',
    vitigni: ['Lambrusco Montericco'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Malbo gentile',
    tipoVino: 'fermo',
    vitigni: ['Malbo gentile'],
  },
  {
    denominazioneVino:
      'Colli di Scandiano e Canossa DOC Malbo gentile frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Malbo gentile'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Malbo gentile novello',
    tipoVino: 'fermo',
    vitigni: ['Malbo gentile'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Malbo gentile passito',
    tipoVino: 'passito',
    vitigni: ['Malbo gentile'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Malvasia',
    tipoVino: 'fermo',
    vitigni: ['Malvasia di Candia aromatica'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Malvasia frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Malvasia di Candia aromatica'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Malvasia passito',
    tipoVino: 'passito',
    vitigni: ['Malvasia di Candia aromatica'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Malvasia spumante',
    tipoVino: 'spumante',
    vitigni: ['Malvasia di Candia aromatica'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Marzemino',
    tipoVino: 'fermo',
    vitigni: ['Marzemino'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Marzemino frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Marzemino'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Marzemino novello',
    tipoVino: 'fermo',
    vitigni: ['Marzemino'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Marzemino passito',
    tipoVino: 'passito',
    vitigni: ['Marzemino'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Pinot',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco, Pinot grigio, Pinot nero'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Pinot frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Pinot bianco, Pinot grigio, Pinot nero'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Pinot spumante',
    tipoVino: 'spumante',
    vitigni: ['Pinot bianco, Pinot grigio, Pinot nero'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Marzemino, Cabernet Sauvignon, Malbo gentile'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC rosso frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Marzemino, Cabernet Sauvignon, Malbo gentile'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Marzemino, Cabernet Sauvignon, Malbo gentile'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Sauvignon frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Sauvignon passito',
    tipoVino: 'passito',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Sauvignon riserva',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Spergola',
    tipoVino: 'fermo',
    vitigni: ['Spergola'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Spergola frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Spergola'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Spergola passito',
    tipoVino: 'passito',
    vitigni: ['Spergola'],
  },
  {
    denominazioneVino: 'Colli di Scandiano e Canossa DOC Spergola spumante',
    tipoVino: 'spumante',
    vitigni: ['Spergola'],
  },
  {
    denominazioneVino: 'Colli Etruschi Viterbesi o Tuscia DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Malvasia del Lazio, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Colli Etruschi Viterbesi o Tuscia DOC bianco amabile',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Malvasia del Lazio, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Colli Etruschi Viterbesi o Tuscia DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Trebbiano Toscano, Malvasia del Lazio, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Colli Etruschi Viterbesi o Tuscia DOC Canaiolo',
    tipoVino: 'fermo',
    vitigni: ['Canaiolo nero'],
  },
  {
    denominazioneVino: 'Colli Etruschi Viterbesi o Tuscia DOC Canaiolo amabile',
    tipoVino: 'fermo',
    vitigni: ['Canaiolo nero'],
  },
  {
    denominazioneVino: 'Colli Etruschi Viterbesi o Tuscia DOC Grechetto',
    tipoVino: 'fermo',
    vitigni: ['Grechetto'],
  },
  {
    denominazioneVino:
      'Colli Etruschi Viterbesi o Tuscia DOC Grechetto frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Grechetto'],
  },
  {
    denominazioneVino: 'Colli Etruschi Viterbesi o Tuscia DOC Greghetto',
    tipoVino: 'fermo',
    vitigni: ['Grechetto rosso'],
  },
  {
    denominazioneVino: 'Colli Etruschi Viterbesi o Tuscia DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Colli Etruschi Viterbesi o Tuscia DOC Moscatello',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Colli Etruschi Viterbesi o Tuscia DOC Moscatello amabile',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Colli Etruschi Viterbesi o Tuscia DOC Moscatello frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Colli Etruschi Viterbesi o Tuscia DOC Moscatello passito',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Colli Etruschi Viterbesi o Tuscia DOC Procanico',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino:
      'Colli Etruschi Viterbesi o Tuscia DOC Procanico frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Colli Etruschi Viterbesi o Tuscia DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Etruschi Viterbesi o Tuscia DOC rosato amabile',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Etruschi Viterbesi o Tuscia DOC rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Etruschi Viterbesi o Tuscia DOC Rossetto',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano giallo'],
  },
  {
    denominazioneVino: 'Colli Etruschi Viterbesi o Tuscia DOC Rossetto amabile',
    tipoVino: 'frizzante',
    vitigni: ['Trebbiano giallo'],
  },
  {
    denominazioneVino: 'Colli Etruschi Viterbesi o Tuscia DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Etruschi Viterbesi o Tuscia DOC rosso amabile',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Etruschi Viterbesi o Tuscia DOC rosso frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Etruschi Viterbesi o Tuscia DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Etruschi Viterbesi o Tuscia DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Colli Etruschi Viterbesi o Tuscia DOC Sangiovese amabile',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Colli Etruschi Viterbesi o Tuscia DOC Sangiovese frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Colli Etruschi Viterbesi o Tuscia DOC Sangiovese rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Colli Etruschi Viterbesi o Tuscia DOC Sangiovese rosato amabile',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Colli Etruschi Viterbesi o Tuscia DOC Sangiovese rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Etruschi Viterbesi o Tuscia DOC Violone',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Colli Euganei Bianco DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Garganega, Tocai Friulano, Sauvignon, Moscato bianco, Moscato giallo',
    ],
  },
  {
    denominazioneVino: 'Colli Euganei Bianco spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Colli Euganei Cabernet sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colli Euganei Cabernet sauvignon riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colli Euganei Carmenère DOC',
    tipoVino: 'fermo',
    vitigni: ['Carmènere'],
  },
  {
    denominazioneVino: 'Colli Euganei Carmenère riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Carmènere'],
  },
  {
    denominazioneVino: 'Colli Euganei Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Colli Euganei Fior d’Arancio DOCG',
    tipoVino: 'fermo',
    vitigni: ['Moscato giallo'],
  },
  {
    denominazioneVino: 'Colli Euganei Fior d’Arancio passito DOCG',
    tipoVino: 'passito',
    vitigni: ['Moscato giallo'],
  },
  {
    denominazioneVino: 'Colli Euganei Fior d’Arancio spumante DOCG',
    tipoVino: 'spumante',
    vitigni: ['Moscato giallo'],
  },
  {
    denominazioneVino: 'Colli Euganei Garganega DOC',
    tipoVino: 'fermo',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Colli Euganei Manzoni bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Manzoni bianco'],
  },
  {
    denominazioneVino: 'Colli Euganei Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Colli Euganei Merlot novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Colli Euganei Merlot riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Colli Euganei Moscato DOC',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Colli Euganei Moscato spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Colli Euganei Pinello frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Pinella'],
  },
  {
    denominazioneVino: 'Colli Euganei Pinello spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Pinella'],
  },
  {
    denominazioneVino: 'Colli Euganei Pinot bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Colli Euganei Raboso DOC',
    tipoVino: 'fermo',
    vitigni: ['Raboso Piave, Raboso Veronese'],
  },
  {
    denominazioneVino: 'Colli Euganei Raboso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Raboso Piave, Raboso Veronese'],
  },
  {
    denominazioneVino: 'Colli Euganei Rosso DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Merlot, Cabernet Sauvignon, Carmènere, Raboso Piave, Raboso Veronese',
    ],
  },
  {
    denominazioneVino: 'Colli Euganei Rosso riserva DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Merlot, Cabernet Sauvignon, Carmènere, Raboso Piave, Raboso Veronese',
    ],
  },
  {
    denominazioneVino: 'Colli Euganei Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Colli Euganei Serprino frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Glera'],
  },
  {
    denominazioneVino: 'Colli Euganei Serprino spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Glera'],
  },
  {
    denominazioneVino: 'Colli Euganei Tai DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Colli Lanuvini bianco DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Malvasia bianca di Candia, Malvasia del Lazio, Trebbiano Toscano, Trebbiano giallo',
    ],
  },
  {
    denominazioneVino: 'Colli Lanuvini bianco spumante DOC',
    tipoVino: 'spumante',
    vitigni: [
      'Malvasia bianca di Candia, Malvasia del Lazio, Trebbiano Toscano, Trebbiano giallo',
    ],
  },
  {
    denominazioneVino: 'Colli Lanuvini bianco superiore DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Malvasia bianca di Candia, Malvasia del Lazio, Trebbiano Toscano, Trebbiano giallo',
    ],
  },
  {
    denominazioneVino: 'Colli Lanuvini rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Lanuvini rosso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Lanuvini rosso superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Maceratesi DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Maceratino'],
  },
  {
    denominazioneVino: 'Colli Maceratesi DOC bianco passito',
    tipoVino: 'passito',
    vitigni: ['Maceratino'],
  },
  {
    denominazioneVino: 'Colli Maceratesi DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Maceratino'],
  },
  {
    denominazioneVino: 'Colli Maceratesi DOC Ribona',
    tipoVino: 'fermo',
    vitigni: ['Maceratino'],
  },
  {
    denominazioneVino: 'Colli Maceratesi DOC Ribona passito',
    tipoVino: 'passito',
    vitigni: ['Maceratino'],
  },
  {
    denominazioneVino: 'Colli Maceratesi DOC Ribona spumante',
    tipoVino: 'spumante',
    vitigni: ['Maceratino'],
  },
  {
    denominazioneVino: 'Colli Maceratesi DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Maceratesi DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Maceratesi DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Maceratesi DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Martani DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Colli Martani DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colli Martani DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Colli Martani DOC Grechetto',
    tipoVino: 'fermo',
    vitigni: ['Grechetto'],
  },
  {
    denominazioneVino: 'Colli Martani DOC Grechetto di Todi',
    tipoVino: 'fermo',
    vitigni: ['Grechetto'],
  },
  {
    denominazioneVino: 'Colli Martani DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Colli Martani DOC Merlot riserva',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Colli Martani DOC Riesling',
    tipoVino: 'fermo',
    vitigni: ['Riesling, Riesling Italico'],
  },
  {
    denominazioneVino: 'Colli Martani DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Martani DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Martani DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Martani DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Colli Martani DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Grechetto, Chardonnay, Pinot nero'],
  },
  {
    denominazioneVino: 'Colli Martani DOC Trebbiano',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Colli Martani DOC Vernaccia (nera)',
    tipoVino: 'passito',
    vitigni: ['Vernaccia nera'],
  },
  {
    denominazioneVino: 'Colli Orientali del Friuli Picolit Cialla DOCG',
    tipoVino: 'passito',
    vitigni: ['Picolit'],
  },
  {
    denominazioneVino: 'Colli Orientali del Friuli Picolit DOCG',
    tipoVino: 'passito',
    vitigni: ['Picolit'],
  },
  {
    denominazioneVino: 'Colli Perugini DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Colli Perugini DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colli Perugini DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Colli Perugini DOC Grechetto',
    tipoVino: 'fermo',
    vitigni: ['Grechetto'],
  },
  {
    denominazioneVino: 'Colli Perugini DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Colli Perugini DOC novello',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Perugini DOC Pinot grigio',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Colli Perugini DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Perugini DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Perugini DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Perugini DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Grechetto, Chardonnay, Pinot bianco, Pinot nero, Pinot grigio'],
  },
  {
    denominazioneVino: 'Colli Perugini DOC Trebbiano',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Colli Perugini DOC Vin Santo',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Colli Pesaresi DOC Biancame',
    tipoVino: 'fermo',
    vitigni: ['Biancame'],
  },
  {
    denominazioneVino: 'Colli Pesaresi DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Verdicchio, Biancame'],
  },
  {
    denominazioneVino: 'Colli Pesaresi DOC Focara Pinot nero',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Colli Pesaresi DOC Focara Pinot nero riserva',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Colli Pesaresi DOC Focara Pinot nero spumante',
    tipoVino: 'spumante',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino:
      'Colli Pesaresi DOC Focara Pinot nero vinificato in bianco',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino:
      'Colli Pesaresi DOC Focara Pinot nero vinificato in bianco riserva',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Colli Pesaresi DOC Focara rosso',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero, Cabernet Franc, Cabernet Sauvignon, Merlot'],
  },
  {
    denominazioneVino: 'Colli Pesaresi DOC Focara rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero, Cabernet Franc, Cabernet Sauvignon, Merlot'],
  },
  {
    denominazioneVino:
      'Colli Pesaresi DOC Parco naturale Monte San Bartolo Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino:
      'Colli Pesaresi DOC Parco naturale Monte San Bartolo Cabernet sauvignon riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino:
      'Colli Pesaresi DOC Parco naturale Monte San Bartolo Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Colli Pesaresi DOC Parco naturale Monte San Bartolo Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Pesaresi DOC Roncaglia bianco',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero, Trebbiano Toscano, Chardonnay'],
  },
  {
    denominazioneVino: 'Colli Pesaresi DOC Roncaglia bianco riserva',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero, Trebbiano Toscano, Chardonnay'],
  },
  {
    denominazioneVino: 'Colli Pesaresi DOC Roncaglia Pinot nero',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Colli Pesaresi DOC Roncaglia Pinot nero riserva',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Colli Pesaresi DOC Roncaglia Pinot nero spumante',
    tipoVino: 'spumante',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino:
      'Colli Pesaresi DOC Roncaglia Pinot nero vinificato in bianco',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino:
      'Colli Pesaresi DOC Roncaglia Pinot nero vinificato in bianco riserva',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Colli Pesaresi DOC rosato (o rosè)',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Pesaresi DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Pesaresi DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Pesaresi DOC Sangiovese novello',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Pesaresi DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Pesaresi DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Trebbiano Toscano, Verdicchio, Biancame'],
  },
  {
    denominazioneVino: 'Colli Pesaresi DOC Trebbiano',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Barbera',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Barbera frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Bonarda',
    tipoVino: 'fermo',
    vitigni: ['Croatina'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Bonarda frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Croatina'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Chardonnay frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Chardonnay spumante',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Malvasia',
    tipoVino: 'fermo',
    vitigni: ['Malvasia di Candia aromatica'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Malvasia frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Malvasia di Candia aromatica'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Malvasia passito',
    tipoVino: 'passito',
    vitigni: ['Malvasia di Candia aromatica'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Malvasia spumante',
    tipoVino: 'spumante',
    vitigni: ['Malvasia di Candia aromatica'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Monterosso Val d’Arda',
    tipoVino: 'fermo',
    vitigni: [
      'Malvasia di Candia aromatica, Moscato bianco, Trebbiano Romagnolo, Ortrugo',
    ],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Monterosso Val d’Arda frizzante',
    tipoVino: 'frizzante',
    vitigni: [
      'Malvasia di Candia aromatica, Moscato bianco, Trebbiano Romagnolo, Ortrugo',
    ],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Monterosso Val d’Arda spumante',
    tipoVino: 'spumante',
    vitigni: [
      'Malvasia di Candia aromatica, Moscato bianco, Trebbiano Romagnolo, Ortrugo',
    ],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Novello',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero, Barbera, Croatina'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Pinot grigio',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Pinot grigio frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Pinot grigio spumante',
    tipoVino: 'spumante',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Pinot nero',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Pinot nero frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Pinot nero spumante',
    tipoVino: 'spumante',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Sauvignon frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Trebbianino Val Trebbia',
    tipoVino: 'fermo',
    vitigni: [
      'Ortrugo, Malvasia di Candia aromatica, Moscato bianco, Sauvignon, Trebbiano Romagnolo',
    ],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Trebbianino Val Trebbia frizzante',
    tipoVino: 'frizzante',
    vitigni: [
      'Ortrugo, Malvasia di Candia aromatica, Moscato bianco, Sauvignon, Trebbiano Romagnolo',
    ],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Trebbianino Val Trebbia spumante',
    tipoVino: 'spumante',
    vitigni: [
      'Ortrugo, Malvasia di Candia aromatica, Moscato bianco, Sauvignon, Trebbiano Romagnolo',
    ],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Valnure',
    tipoVino: 'fermo',
    vitigni: ['Malvasia di Candia aromatica, Trebbiano Romagnolo, Ortrugo'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Valnure frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Malvasia di Candia aromatica, Trebbiano Romagnolo, Ortrugo'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Valnure spumante',
    tipoVino: 'spumante',
    vitigni: ['Malvasia di Candia aromatica, Trebbiano Romagnolo, Ortrugo'],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Vin Santo',
    tipoVino: 'passito',
    vitigni: [
      'Malvasia di Candia aromatica, Ortrugo, Sauvignon, Marsanne, Trebbiano Romagnolo',
    ],
  },
  {
    denominazioneVino: 'Colli Piacentini DOC Vin Santo di Vigoleno',
    tipoVino: 'passito',
    vitigni: ['Santa Maria, Melara, Bervedino, Ortrugo, Trebbiano Romagnolo'],
  },
  {
    denominazioneVino: 'Colli Romagna Centrale DOC bianco',
    tipoVino: 'fermo',
    vitigni: [
      'Chardonnay, Bombino bianco, Sauvignon, Trebbiano Romagnolo, Pinot bianco',
    ],
  },
  {
    denominazioneVino: 'Colli Romagna Centrale DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colli Romagna Centrale DOC Cabernet sauvignon riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colli Romagna Centrale DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Colli Romagna Centrale DOC Chardonnay riserva',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Colli Romagna Centrale DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Sangiovese, Barbera, Merlot, Montepulciano'],
  },
  {
    denominazioneVino: 'Colli Romagna Centrale DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Sangiovese, Barbera, Merlot, Montepulciano'],
  },
  {
    denominazioneVino: 'Colli Romagna Centrale DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Romagna Centrale DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colli Romagna Centrale DOC Trebbiano',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Romagnolo'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Barbera DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Barbera riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Barbera superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Cortese, Favorita, Müller-Thurgau, Pinot bianco, Pinot grigio'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Bianco frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Cortese, Favorita, Müller-Thurgau, Pinot bianco, Pinot grigio'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Chiaretto DOC',
    tipoVino: 'fermo',
    vitigni: ['Aleatico, Barbera, Bonarda, Dolcetto, Freisa, Grignolino'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Chiaretto frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Aleatico, Barbera, Bonarda, Dolcetto, Freisa, Grignolino'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Cortese DOC',
    tipoVino: 'fermo',
    vitigni: ['Cortese'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Cortese frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Cortese'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Cortese riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cortese'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Cortese spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Cortese'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Croatina DOC',
    tipoVino: 'fermo',
    vitigni: ['Croatina'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Croatina riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Croatina'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Dolcetto DOC',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Dolcetto novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Favorita DOC',
    tipoVino: 'fermo',
    vitigni: ['Favorita'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Freisa DOC',
    tipoVino: 'fermo',
    vitigni: ['Freisa'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Monleale DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Moscato DOC',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Aleatico, Barbera, Bonarda, Dolcetto, Freisa, Grignolino'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Aleatico, Barbera, Bonarda, Dolcetto, Freisa, Grignolino'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Rosso frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Aleatico, Barbera, Bonarda, Dolcetto, Freisa, Grignolino'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Terre di Libarna Bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Timorasso'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Terre di Libarna Rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Terre di Libarna Spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Timorasso'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Terre di Libarna Timorasso DOC',
    tipoVino: 'fermo',
    vitigni: ['Timorasso'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Timorasso DOC',
    tipoVino: 'fermo',
    vitigni: ['Timorasso'],
  },
  {
    denominazioneVino: 'Colli Tortonesi Timorasso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Timorasso'],
  },
  {
    denominazioneVino: 'Collina Torinese Barbera DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Collina Torinese Bonarda DOC',
    tipoVino: 'fermo',
    vitigni: ['Bonarda'],
  },
  {
    denominazioneVino: 'Collina Torinese Malvasia DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia di Schierano, Malvasia nera lunga'],
  },
  {
    denominazioneVino: 'Collina Torinese Pelaverga o Cari DOC',
    tipoVino: 'fermo',
    vitigni: ['Pelaverga'],
  },
  {
    denominazioneVino: 'Collina Torinese rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Freisa'],
  },
  {
    denominazioneVino: 'Collina Torinese rosso novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Freisa'],
  },
  {
    denominazioneVino: 'Colline di Levanto DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Vermentino, Albarola, Bosco'],
  },
  {
    denominazioneVino: 'Colline di Levanto DOC novello',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Ciliegiolo'],
  },
  {
    denominazioneVino: 'Colline di Levanto DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Ciliegiolo'],
  },
  {
    denominazioneVino: 'Colline di Levanto DOC Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Colline Joniche Tarantine DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Colline Joniche Tarantine DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Colline Joniche Tarantine DOC novello',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colline Joniche Tarantine DOC Primitivo',
    tipoVino: 'fermo',
    vitigni: ['Primitivo'],
  },
  {
    denominazioneVino:
      'Colline Joniche Tarantine DOC Primitivo liquoroso – Vino dolce naturale',
    tipoVino: 'liquoroso',
    vitigni: ['Primitivo'],
  },
  {
    denominazioneVino:
      'Colline Joniche Tarantine DOC Primitivo liquoroso secco',
    tipoVino: 'liquoroso',
    vitigni: ['Primitivo'],
  },
  {
    denominazioneVino: 'Colline Joniche Tarantine DOC Primitivo superiore',
    tipoVino: 'fermo',
    vitigni: ['Primitivo'],
  },
  {
    denominazioneVino: 'Colline Joniche Tarantine DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colline Joniche Tarantine DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colline Joniche Tarantine DOC rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Colline Joniche Tarantine DOC Verdeca',
    tipoVino: 'fermo',
    vitigni: ['Verdeca'],
  },
  {
    denominazioneVino: 'Colline Lucchesi DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Chardonnay, Greco'],
  },
  {
    denominazioneVino: 'Colline Lucchesi DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Colline Lucchesi DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Canaiolo nero, Ciliegiolo, Merlot, Syrah'],
  },
  {
    denominazioneVino: 'Colline Lucchesi DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Colline Lucchesi DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Colline Lucchesi DOC Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Colline Lucchesi DOC Vin Santo',
    tipoVino: 'passito',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Colline Lucchesi DOC Vin Santo Occhio di Pernice',
    tipoVino: 'passito',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Colline Novaresi DOC Barbera',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Colline Novaresi DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Erbaluce'],
  },
  {
    denominazioneVino: 'Colline Novaresi DOC Croatina',
    tipoVino: 'fermo',
    vitigni: ['Croatina'],
  },
  {
    denominazioneVino: 'Colline Novaresi DOC Nebbiolo (Spanna)',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Colline Novaresi DOC novello',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Colline Novaresi DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Colline Novaresi DOC rosato novello',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Colline Novaresi DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Colline Novaresi DOC Uva rara (Bonarda Novarese)',
    tipoVino: 'fermo',
    vitigni: ['Uva rara'],
  },
  {
    denominazioneVino: 'Colline Novaresi DOC Vespolina',
    tipoVino: 'fermo',
    vitigni: ['Vespolina'],
  },
  {
    denominazioneVino: 'Colline Saluzzesi DOC (rosso)',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Nebbiolo, Pelaverga, Chatus'],
  },
  {
    denominazioneVino: 'Colline Saluzzesi DOC Barbera',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Colline Saluzzesi DOC Chatus',
    tipoVino: 'fermo',
    vitigni: ['Chatus'],
  },
  {
    denominazioneVino: 'Colline Saluzzesi DOC Pelaverga',
    tipoVino: 'fermo',
    vitigni: ['Pelaverga'],
  },
  {
    denominazioneVino: 'Colline Saluzzesi DOC Pelaverga rosato',
    tipoVino: 'fermo',
    vitigni: ['Pelaverga'],
  },
  {
    denominazioneVino: 'Colline Saluzzesi DOC Quagliano',
    tipoVino: 'fermo',
    vitigni: ['Quagliano'],
  },
  {
    denominazioneVino: 'Colline Saluzzesi DOC Quagliano spumante',
    tipoVino: 'spumante',
    vitigni: ['Quagliano'],
  },
  {
    denominazioneVino: 'Collio bianco DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Collio Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Collio Cabernet franc DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Collio Cabernet sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Collio Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Collio Friulano DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Collio Malvasia DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia Istriana'],
  },
  {
    denominazioneVino: 'Collio Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Collio Müller-Thurgau DOC',
    tipoVino: 'fermo',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino: 'Collio Picolit DOC',
    tipoVino: 'fermo',
    vitigni: ['Picolit'],
  },
  {
    denominazioneVino: 'Collio Pinot bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Collio Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Collio Pinot nero DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Collio Ribolla o Ribolla gialla DOC',
    tipoVino: 'fermo',
    vitigni: ['Ribolla gialla'],
  },
  {
    denominazioneVino: 'Collio Riesling DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino: 'Collio Riesling italico DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling Italico'],
  },
  {
    denominazioneVino: 'Collio rosso DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Collio Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Collio Traminer aromatico DOC',
    tipoVino: 'fermo',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino: 'Conegliano Valdobbiadene Prosecco DOCG',
    tipoVino: 'fermo',
    vitigni: ['Glera'],
  },
  {
    denominazioneVino: 'Conegliano Valdobbiadene Prosecco frizzante DOCG',
    tipoVino: 'frizzante',
    vitigni: ['Glera'],
  },
  {
    denominazioneVino:
      'Conegliano Valdobbiadene Prosecco frizzante metodo tradizionale DOCG',
    tipoVino: 'spumante',
    vitigni: ['Glera'],
  },
  {
    denominazioneVino:
      'Conegliano Valdobbiadene Prosecco spumante superiore di Cartizze DOCG',
    tipoVino: 'spumante',
    vitigni: ['Glera'],
  },
  {
    denominazioneVino:
      'Conegliano Valdobbiadene Prosecco spumante superiore DOCG',
    tipoVino: 'spumante',
    vitigni: ['Glera'],
  },
  {
    denominazioneVino: 'Conero DOCG',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Ansonica o Inzolia',
    tipoVino: 'fermo',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Ansonica o Inzolia spumante',
    tipoVino: 'spumante',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco comune, Inzolia'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Catarratto bianco comune, Inzolia'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Cabernet Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Cabernet Sauvignon riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Catarratto',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco lucido, Catarratto bianco comune'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Catarratto spumante',
    tipoVino: 'spumante',
    vitigni: ['Catarratto bianco lucido, Catarratto bianco comune'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Chardonnay spumante',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC dolce',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Perricone'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC dolce vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Calabrese, Perricone'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Grecanico',
    tipoVino: 'fermo',
    vitigni: ['Grecanico dorato'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Grecanico spumante',
    tipoVino: 'spumante',
    vitigni: ['Grecanico dorato'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Grillo',
    tipoVino: 'fermo',
    vitigni: ['Grillo'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Grillo spumante',
    tipoVino: 'spumante',
    vitigni: ['Grillo'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Merlot riserva',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Nerello Mascalese',
    tipoVino: 'fermo',
    vitigni: ['Nerello Mascalese'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Nero d’ Avola o Calabrese',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino:
      'Contea di Sclafani DOC Nero d’ Avola o Calabrese riserva',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC novello',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Perricone'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Perricone',
    tipoVino: 'fermo',
    vitigni: ['Perricone'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Perricone riserva',
    tipoVino: 'fermo',
    vitigni: ['Perricone'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Pinot bianco',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Pinot bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Pinot nero',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Pinot nero riserva',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Nerello Mascalese'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC rosato spumante',
    tipoVino: 'spumante',
    vitigni: ['Nerello Mascalese'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Perricone'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Sauvignon spumante',
    tipoVino: 'spumante',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Syrah',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Contea di Sclafani DOC Syrah riserva',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Contessa Entellina DOC Ansonica',
    tipoVino: 'fermo',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Contessa Entellina DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Contessa Entellina DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Contessa Entellina DOC Catarratto',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco lucido, Catarratto bianco comune'],
  },
  {
    denominazioneVino: 'Contessa Entellina DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Contessa Entellina DOC Fiano',
    tipoVino: 'fermo',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Contessa Entellina DOC Grecanico',
    tipoVino: 'fermo',
    vitigni: ['Grecanico dorato'],
  },
  {
    denominazioneVino: 'Contessa Entellina DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Contessa Entellina DOC Nero d’Avola',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Contessa Entellina DOC Pinot nero',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Contessa Entellina DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Syrah'],
  },
  {
    denominazioneVino: 'Contessa Entellina DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Syrah'],
  },
  {
    denominazioneVino: 'Contessa Entellina DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Syrah'],
  },
  {
    denominazioneVino: 'Contessa Entellina DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Contessa Entellina DOC Syrah',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Contessa Entellina DOC vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Contessa Entellina DOC Viognier',
    tipoVino: 'fermo',
    vitigni: ['Viognier'],
  },
  {
    denominazioneVino: 'Controguerra DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Trebbiano Abruzzese, Passerina'],
  },
  {
    denominazioneVino: 'Controguerra DOC bianco passito',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Trebbiano Abruzzese, Passerina'],
  },
  {
    denominazioneVino: 'Controguerra DOC Cabernet',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Controguerra DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Controguerra DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Controguerra DOC novello',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Controguerra DOC Passerina',
    tipoVino: 'fermo',
    vitigni: ['Passerina'],
  },
  {
    denominazioneVino: 'Controguerra DOC Pecorino',
    tipoVino: 'fermo',
    vitigni: ['Pecorino'],
  },
  {
    denominazioneVino: 'Controguerra DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Controguerra DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Controguerra DOC rosso passito',
    tipoVino: 'passito',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Controguerra DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Controguerra DOC spumante metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Trebbiano Toscano, Trebbiano Abruzzese, Chardonnay, Pecorino'],
  },
  {
    denominazioneVino: 'Copertino DOC rosato',
    tipoVino: 'fermo',
    vitigni: [
      'Negro Amaro, Malvasia nera di Brindisi, Malvasia nera di Lecce, Sangiovese, Montepulciano',
    ],
  },
  {
    denominazioneVino: 'Copertino DOC rosso',
    tipoVino: 'fermo',
    vitigni: [
      'Negro Amaro, Malvasia nera di Brindisi, Malvasia nera di Lecce, Sangiovese, Montepulciano',
    ],
  },
  {
    denominazioneVino: 'Copertino DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: [
      'Negro Amaro, Malvasia nera di Brindisi, Malvasia nera di Lecce, Sangiovese, Montepulciano',
    ],
  },
  {
    denominazioneVino: 'Cori DOC Bellone',
    tipoVino: 'fermo',
    vitigni: ['Bellone'],
  },
  {
    denominazioneVino: 'Cori DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Bellone, Malvasia del Lazio, Greco'],
  },
  {
    denominazioneVino: 'Cori DOC Nero buono',
    tipoVino: 'fermo',
    vitigni: ['Nero buono'],
  },
  {
    denominazioneVino: 'Cori DOC Nero buono riserva',
    tipoVino: 'fermo',
    vitigni: ['Nero buono'],
  },
  {
    denominazioneVino: 'Cori DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Nero buono, Montepulciano, Cesanese comune, Cesanese di Affile'],
  },
  {
    denominazioneVino: 'Cortese dell’Alto Monferrato DOC',
    tipoVino: 'fermo',
    vitigni: ['Cortese'],
  },
  {
    denominazioneVino: 'Cortese dell’Alto Monferrato DOC frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Cortese'],
  },
  {
    denominazioneVino: 'Cortese dell’Alto Monferrato DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Cortese'],
  },
  {
    denominazioneVino: 'Corti Benedettine del Padovano Bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Corti Benedettine del Padovano Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Cabernet Franc, Carmènere'],
  },
  {
    denominazioneVino: 'Corti Benedettine del Padovano Cabernet riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Cabernet Franc, Carmènere'],
  },
  {
    denominazioneVino: 'Corti Benedettine del Padovano Cabernet Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino:
      'Corti Benedettine del Padovano Cabernet Sauvignon riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Corti Benedettine del Padovano Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Corti Benedettine del Padovano Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Corti Benedettine del Padovano Novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Raboso Piave'],
  },
  {
    denominazioneVino: 'Corti Benedettine del Padovano Passito DOC',
    tipoVino: 'passito',
    vitigni: ['Moscato giallo'],
  },
  {
    denominazioneVino: 'Corti Benedettine del Padovano Pinot Bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Corti Benedettine del Padovano Pinot Grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Corti Benedettine del Padovano Raboso DOC',
    tipoVino: 'fermo',
    vitigni: ['Raboso Piave'],
  },
  {
    denominazioneVino: 'Corti Benedettine del Padovano Raboso passito DOC',
    tipoVino: 'passito',
    vitigni: ['Raboso Piave'],
  },
  {
    denominazioneVino: 'Corti Benedettine del Padovano Raboso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Raboso Piave'],
  },
  {
    denominazioneVino:
      'Corti Benedettine del Padovano Refosco dal Peduncolo Rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino:
      'Corti Benedettine del Padovano Refosco dal Peduncolo Rosso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino: 'Corti Benedettine del Padovano Rosato DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Raboso Piave'],
  },
  {
    denominazioneVino: 'Corti Benedettine del Padovano Rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Raboso Piave'],
  },
  {
    denominazioneVino: 'Corti Benedettine del Padovano Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Corti Benedettine del Padovano Spumante Moscato DOC',
    tipoVino: 'spumante',
    vitigni: ['Moscato giallo'],
  },
  {
    denominazioneVino: 'Corti Benedettine del Padovano Tai DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Cortona DOC Cabernet Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Cortona DOC Cabernet Sauvignon riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Cortona DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Cortona DOC Grechetto',
    tipoVino: 'fermo',
    vitigni: ['Grechetto'],
  },
  {
    denominazioneVino: 'Cortona DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Cortona DOC Merlot riserva',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Cortona DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Syrah, Merlot'],
  },
  {
    denominazioneVino: 'Cortona DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Cortona DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Cortona DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Cortona DOC Syrah',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Cortona DOC Syrah riserva',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Cortona DOC Vin Santo',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Grechetto, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Cortona DOC Vin Santo Occhio di Pernice',
    tipoVino: 'passito',
    vitigni: ['Sangiovese, Malvasia nera'],
  },
  {
    denominazioneVino: 'Cortona DOC Vin Santo riserva',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Grechetto, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Costa d’Amalfi DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Falanghina, Biancolella'],
  },
  {
    denominazioneVino: 'Costa d’Amalfi DOC bianco passito',
    tipoVino: 'passito',
    vitigni: ['Falanghina, Biancolella'],
  },
  {
    denominazioneVino: 'Costa d’Amalfi DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Falanghina, Biancolella'],
  },
  {
    denominazioneVino: 'Costa d’Amalfi DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Piedirosso, Sciascinoso, Aglianico'],
  },
  {
    denominazioneVino: 'Costa d’Amalfi DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Piedirosso, Sciascinoso, Aglianico'],
  },
  {
    denominazioneVino: 'Costa d’Amalfi DOC rosso passito',
    tipoVino: 'passito',
    vitigni: ['Piedirosso, Sciascinoso, Aglianico'],
  },
  {
    denominazioneVino: 'Coste della Sesia DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Erbaluce'],
  },
  {
    denominazioneVino: 'Coste della Sesia DOC Croatina',
    tipoVino: 'fermo',
    vitigni: ['Croatina'],
  },
  {
    denominazioneVino: 'Coste della Sesia DOC Nebbiolo o Spanna',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Coste della Sesia DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Coste della Sesia DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Coste della Sesia DOC Vespolina',
    tipoVino: 'fermo',
    vitigni: ['Vespolina'],
  },
  {
    denominazioneVino: 'Curtefranca bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay, Pinot bianco, Pinot nero'],
  },
  {
    denominazioneVino: 'Curtefranca rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Carmènere, Merlot, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Grecanico dorato, Ansonica'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Grecanico dorato, Ansonica'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC Cabernet sauvignon riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC Damaschino',
    tipoVino: 'fermo',
    vitigni: ['Damaschino'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC Grecanico',
    tipoVino: 'fermo',
    vitigni: ['Grecanico dorato'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC Grillo',
    tipoVino: 'fermo',
    vitigni: ['Grillo'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC Inzolia',
    tipoVino: 'fermo',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC Merlot riserva',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC Müller-Thrurgau',
    tipoVino: 'fermo',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC Nero d’Avola',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC Nero d’Avola riserva',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC novello',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Perricone, Cabernet Sauvignon, Syrah, Sangiovese'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC Pignatello o Perricone',
    tipoVino: 'fermo',
    vitigni: ['Perricone'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC Pignatello o Perricone riserva',
    tipoVino: 'fermo',
    vitigni: ['Perricone'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Perricone, Cabernet Sauvignon, Syrah, Sangiovese'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Perricone, Cabernet Sauvignon, Syrah, Sangiovese'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Ansonica, Damaschino, Chardonnay'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC Syrah',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Delia Nivolelli DOC Syrah riserva',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Dogliani DOCG',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Dogliani superiore DOCG',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Dolcetto d’Acqui DOC',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Dolcetto d’Acqui superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Dolcetto d’Alba DOC',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Dolcetto d’Alba superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Dolcetto d’Asti DOC',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Dolcetto d’Asti superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Dolcetto di Diano d’Alba o Diano d’Alba DOCG',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Dolcetto di Diano d’Alba o Diano d’Alba superiore DOCG',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Dolcetto di Ovada DOC',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Dolcetto di Ovada superiore o Ovada DOCG',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino:
      'Dolcetto di Ovada superiore o Ovada DOCG con menzione vigna',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino:
      'Dolcetto di Ovada superiore o Ovada DOCG con menzione vigna riserva',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino:
      'Dolcetto di Ovada superiore riserva o Ovada riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino:
      'Elba Aleatico passito o Aleatico Passito dell’Elba DOCG',
    tipoVino: 'passito',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Elba DOC Ansonica',
    tipoVino: 'fermo',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Elba DOC Ansonica passito',
    tipoVino: 'passito',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Elba DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Ansonica, Vermentino'],
  },
  {
    denominazioneVino: 'Elba DOC bianco passito',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Ansonica, Vermentino'],
  },
  {
    denominazioneVino: 'Elba DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Trebbiano Toscano, Ansonica, Vermentino'],
  },
  {
    denominazioneVino: 'Elba DOC Moscato passito',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Elba DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Elba DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Elba DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Elba DOC Sangiovese o Sangioveto',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Elba DOC Trebbiano o Procanico',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Elba DOC Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Elba DOC Vin Santo',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Ansonica, Vermentino'],
  },
  {
    denominazioneVino: 'Elba DOC Vin Santo Occhio di Pernice',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Eloro DOC Frappato',
    tipoVino: 'fermo',
    vitigni: ['Frappato'],
  },
  {
    denominazioneVino: 'Eloro DOC Nero d’Avola',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Eloro DOC Pachino',
    tipoVino: 'fermo',
    vitigni: ['Frappato, Perricone'],
  },
  {
    denominazioneVino: 'Eloro DOC Pignatello',
    tipoVino: 'fermo',
    vitigni: ['Perricone'],
  },
  {
    denominazioneVino: 'Eloro DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Frappato, Perricone'],
  },
  {
    denominazioneVino: 'Eloro DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Frappato, Perricone'],
  },
  {
    denominazioneVino: 'Erbaluce di Caluso o Caluso DOCG',
    tipoVino: 'fermo',
    vitigni: ['Erbaluce'],
  },
  {
    denominazioneVino: 'Erbaluce di Caluso o Caluso passito DOCG',
    tipoVino: 'passito',
    vitigni: ['Erbaluce'],
  },
  {
    denominazioneVino: 'Erbaluce di Caluso o Caluso passito riserva DOCG',
    tipoVino: 'passito',
    vitigni: ['Erbaluce'],
  },
  {
    denominazioneVino: 'Erbaluce di Caluso o Caluso spumante DOCG',
    tipoVino: 'spumante',
    vitigni: ['Erbaluce'],
  },
  {
    denominazioneVino: 'Erice DOC Ansonica o Inzolia',
    tipoVino: 'fermo',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Erice DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco comune, Catarratto bianco lucido'],
  },
  {
    denominazioneVino: 'Erice DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Erice DOC Calabrese o Nero d’Avola',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Erice DOC Catarratto',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco comune, Catarratto bianco lucido'],
  },
  {
    denominazioneVino: 'Erice DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Erice DOC Frappato',
    tipoVino: 'fermo',
    vitigni: ['Frappato'],
  },
  {
    denominazioneVino: 'Erice DOC Grecanico',
    tipoVino: 'fermo',
    vitigni: ['Grecanico dorato'],
  },
  {
    denominazioneVino: 'Erice DOC Grillo',
    tipoVino: 'fermo',
    vitigni: ['Grillo'],
  },
  {
    denominazioneVino: 'Erice DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Erice DOC Moscato',
    tipoVino: 'fermo',
    vitigni: ['Zibibbo'],
  },
  {
    denominazioneVino: 'Erice DOC Müller-Thurgau',
    tipoVino: 'fermo',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino: 'Erice DOC passito',
    tipoVino: 'passito',
    vitigni: ['Zibibbo'],
  },
  {
    denominazioneVino: 'Erice DOC Perricone o Pignatello',
    tipoVino: 'fermo',
    vitigni: ['Perricone'],
  },
  {
    denominazioneVino: 'Erice DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Erice DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Erice DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Erice DOC Sauvignon vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Erice DOC spumante brut',
    tipoVino: 'spumante',
    vitigni: ['Zibibbo'],
  },
  {
    denominazioneVino: 'Erice DOC spumante dolce',
    tipoVino: 'spumante',
    vitigni: ['Zibibbo'],
  },
  {
    denominazioneVino: 'Erice DOC Syrah',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Erice DOC Zibibbo vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Zibibbo'],
  },
  {
    denominazioneVino: 'Esino DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Verdicchio'],
  },
  {
    denominazioneVino: 'Esino DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Verdicchio'],
  },
  {
    denominazioneVino: 'Esino DOC novello',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Montepulciano'],
  },
  {
    denominazioneVino: 'Esino DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Montepulciano'],
  },
  {
    denominazioneVino: 'Est!! Est!! Est!! di Montefiascone DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Trebbiano Toscano, Trebbiano giallo, Malvasia bianca lunga, Malvasia del Lazio',
    ],
  },
  {
    denominazioneVino: 'Est!! Est!! Est!! di Montefiascone DOC classico',
    tipoVino: 'fermo',
    vitigni: [
      'Trebbiano Toscano, Trebbiano giallo, Malvasia bianca lunga, Malvasia del Lazio',
    ],
  },
  {
    denominazioneVino: 'Est!! Est!! Est!! di Montefiascone DOC spumante',
    tipoVino: 'spumante',
    vitigni: [
      'Trebbiano Toscano, Trebbiano giallo, Malvasia bianca lunga, Malvasia del Lazio',
    ],
  },
  {
    denominazioneVino: 'Etna DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Carricante, Catarratto bianco comune, Catarratto bianco lucido'],
  },
  {
    denominazioneVino: 'Etna DOC bianco superiore',
    tipoVino: 'fermo',
    vitigni: ['Carricante, Trebbiano Toscano, Minnella bianca'],
  },
  {
    denominazioneVino: 'Etna DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Nerello Mascalese, Nerello Cappuccio'],
  },
  {
    denominazioneVino: 'Etna DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Nerello Mascalese, Nerello Cappuccio'],
  },
  {
    denominazioneVino: 'Etna DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Nerello Mascalese, Nerello Cappuccio'],
  },
  {
    denominazioneVino: 'Etna DOC spumante (vinificato in bianco)',
    tipoVino: 'spumante',
    vitigni: ['Nerello Mascalese'],
  },
  {
    denominazioneVino: 'Etna DOC spumante rosato',
    tipoVino: 'spumante',
    vitigni: ['Nerello Mascalese'],
  },
  {
    denominazioneVino: 'Falanghina del Sannio DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino:
      'Falanghina del Sannio Guardia Sanframondi o Guardiolo DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino:
      'Falanghina del Sannio Guardia Sanframondi o Guardiolo passito DOC',
    tipoVino: 'passito',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino:
      'Falanghina del Sannio Guardia Sanframondi o Guardiolo spumante di qualità DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino:
      'Falanghina del Sannio Guardia Sanframondi o Guardiolo spumante DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino:
      'Falanghina del Sannio Guardia Sanframondi o Guardiolo vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino:
      'Falanghina del Sannio Guardia Sanframondi o Guardiolospumante di qualità metodo classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Falanghina del Sannio passito DOC',
    tipoVino: 'passito',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Falanghina del Sannio Sant’Agata dei Goti DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Falanghina del Sannio Sant’Agata dei Goti passito DOC',
    tipoVino: 'passito',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino:
      'Falanghina del Sannio Sant’Agata dei Goti spumante di qualità DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino:
      'Falanghina del Sannio Sant’Agata dei Goti spumante di qualità metodo classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Falanghina del Sannio Sant’Agata dei Goti spumante DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino:
      'Falanghina del Sannio Sant’Agata dei Goti vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Falanghina del Sannio Solopaca DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Falanghina del Sannio Solopaca passito DOC',
    tipoVino: 'passito',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Falanghina del Sannio Solopaca spumante di qualità DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino:
      'Falanghina del Sannio Solopaca spumante di qualità metodo classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Falanghina del Sannio Solopaca spumante DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Falanghina del Sannio Solopaca vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Falanghina del Sannio spumante di qualità DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino:
      'Falanghina del Sannio spumante di qualità metodo classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Falanghina del Sannio spumante DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Falanghina del Sannio Taburno DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Falanghina del Sannio Taburno passito DOC',
    tipoVino: 'passito',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Falanghina del Sannio Taburno spumante di qualità DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino:
      'Falanghina del Sannio Taburno spumante di qualità metodo classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Falanghina del Sannio Taburno spumante DOC',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Falanghina del Sannio Taburno vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Falanghina del Sannio vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Falerio DOC',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Passerina, Pecorino'],
  },
  {
    denominazioneVino: 'Falerio DOC Pecorino',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Passerina, Pecorino'],
  },
  {
    denominazioneVino: 'Falerno del Massico DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Falerno del Massico DOC Primitivo',
    tipoVino: 'fermo',
    vitigni: ['Primitivo'],
  },
  {
    denominazioneVino: 'Falerno del Massico DOC Primitivo riserva (o vecchio)',
    tipoVino: 'fermo',
    vitigni: ['Primitivo'],
  },
  {
    denominazioneVino: 'Falerno del Massico DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Aglianico, Piedirosso'],
  },
  {
    denominazioneVino: 'Falerno del Massico DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Aglianico, Piedirosso'],
  },
  {
    denominazioneVino: 'Fara DOC',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo, Vespolina, Uva rara'],
  },
  {
    denominazioneVino: 'Fara DOC con menzione vigna',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo, Vespolina, Uva rara'],
  },
  {
    denominazioneVino: 'Faro DOC',
    tipoVino: 'fermo',
    vitigni: ['Nerello Mascalese, Nocera, Nerello Cappuccio'],
  },
  {
    denominazioneVino: 'Fiano di Avellino DOCG',
    tipoVino: 'fermo',
    vitigni: ['Fiano, Greco, Coda di Volpe, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Franciacorta DOCG',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot nero, Pinot bianco'],
  },
  {
    denominazioneVino: 'Franciacorta millesimato DOCG',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot nero, Pinot bianco'],
  },
  {
    denominazioneVino: 'Franciacorta riserva DOCG',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot nero, Pinot bianco'],
  },
  {
    denominazioneVino: 'Franciacorta Rosé DOCG',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot nero, Pinot bianco'],
  },
  {
    denominazioneVino: 'Franciacorta Rosé millesimato DOCG',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot nero, Pinot bianco'],
  },
  {
    denominazioneVino: 'Franciacorta Rosé riserva DOCG',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot nero, Pinot bianco'],
  },
  {
    denominazioneVino: 'Franciacorta Satèn DOCG',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot bianco'],
  },
  {
    denominazioneVino: 'Franciacorta Satèn millesimato DOCG',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot bianco'],
  },
  {
    denominazioneVino: 'Franciacorta Satèn riserva DOCG',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot bianco'],
  },
  {
    denominazioneVino: 'Frascati DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca di Candia, Malvasia del Lazio'],
  },
  {
    denominazioneVino: 'Frascati spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Malvasia bianca di Candia, Malvasia del Lazio'],
  },
  {
    denominazioneVino: 'Frascati superiore DOCG',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca di Candia, Malvasia del Lazio'],
  },
  {
    denominazioneVino: 'Frascati superiore riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca di Candia, Malvasia del Lazio'],
  },
  {
    denominazioneVino: 'Freisa d’Asti DOC',
    tipoVino: 'fermo',
    vitigni: ['Freisa'],
  },
  {
    denominazioneVino: 'Freisa d’Asti DOC frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Freisa'],
  },
  {
    denominazioneVino: 'Freisa d’Asti DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Freisa'],
  },
  {
    denominazioneVino: 'Freisa d’Asti DOC superiore',
    tipoVino: 'fermo',
    vitigni: ['Freisa'],
  },
  {
    denominazioneVino: 'Freisa di Chieri DOC dolce',
    tipoVino: 'fermo',
    vitigni: ['Freisa'],
  },
  {
    denominazioneVino: 'Freisa di Chieri DOC frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Freisa'],
  },
  {
    denominazioneVino: 'Freisa di Chieri DOC secco',
    tipoVino: 'fermo',
    vitigni: ['Freisa'],
  },
  {
    denominazioneVino: 'Freisa di Chieri DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Freisa'],
  },
  {
    denominazioneVino: 'Freisa di Chieri DOC superiore',
    tipoVino: 'fermo',
    vitigni: ['Freisa'],
  },
  {
    denominazioneVino: 'Friuli Annia Bianco DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Friuli Annia Cabernet franc DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Friuli Annia Cabernet sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Friuli Annia Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Friuli Annia Friulano DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Friuli Annia Malvasia DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia Istriana'],
  },
  {
    denominazioneVino: 'Friuli Annia Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Friuli Annia Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Friuli Annia Refosco dal peduncolo rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino: 'Friuli Annia Rosato DOC',
    tipoVino: 'fermo, frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Friuli Annia Rosso DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Friuli Annia Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Friuli Annia Spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot bianco'],
  },
  {
    denominazioneVino: 'Friuli Annia Traminer aromatico DOC',
    tipoVino: 'fermo',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino: 'Friuli Annia Verduzzo friulano DOC',
    tipoVino: 'fermo, frizzante',
    vitigni: ['Verduzzo Friulano'],
  },
  {
    denominazioneVino: 'Friuli Aquileia Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Friuli Aquileia Cabernet franc DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Friuli Aquileia Cabernet sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Friuli Aquileia Chardonnay DOC',
    tipoVino: 'fermo, vivace, frizzante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Friuli Aquileia Friulano DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Friuli Aquileia Malvasia istriana DOC',
    tipoVino: 'fermo, vivace, frizzante',
    vitigni: ['Malvasia Istriana'],
  },
  {
    denominazioneVino: 'Friuli Aquileia Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Friuli Aquileia Müller Thurgau DOC',
    tipoVino: 'fermo, vivace, frizzante',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino: 'Friuli Aquileia Novello DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Friuli Aquileia Pinot bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Friuli Aquileia Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Friuli Aquileia Riesling DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino: 'Friuli Aquileia Rosato DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Friuli Aquileia Rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino: 'Friuli Aquileia Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Friuli Aquileia Traminer aromatico DOC',
    tipoVino: 'fermo',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino: 'Friuli Aquileia Verduzzo friulano DOC',
    tipoVino: 'fermo',
    vitigni: ['Verduzzo Friulano'],
  },
  {
    denominazioneVino: 'Friuli Bianco DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Chardonnay, Tocai Friulano, Malvasia Istriana, Pinot bianco, Pinot grigio, Riesling Renano, Sauvignon, Traminer aromatico, Verduzzo Friulano, Ribolla gialla',
    ],
  },
  {
    denominazioneVino: 'Friuli Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon, Carmènere'],
  },
  {
    denominazioneVino: 'Friuli Cabernet Franc DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Friuli Cabernet Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Friuli Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Bianco DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Bianco DOC “Cialla”',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon, Carmènere'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Cabernet franc DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Cabernet sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Dolce DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Friulano DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Malvasia DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia Istriana'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Pignolo di Rosazzo DOC',
    tipoVino: 'fermo',
    vitigni: ['Pignolo'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Pignolo DOC',
    tipoVino: 'fermo',
    vitigni: ['Pignolo'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Pinot bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Pinot nero DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Refosco dal peduncolo rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino:
      'Friuli Colli Orientali Refosco dal peduncolo rosso DOC “Cialla”',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Refosco di Faedis DOC',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Ribolla gialla di Rosazzo DOC',
    tipoVino: 'fermo',
    vitigni: ['Ribolla gialla'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Ribolla gialla DOC',
    tipoVino: 'fermo',
    vitigni: ['Ribolla gialla'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Ribolla gialla DOC “Cialla”',
    tipoVino: 'fermo',
    vitigni: ['Ribolla gialla'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Riesling DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Rosso DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Rosso DOC “Cialla”',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Schioppettino di Prepotto DOC',
    tipoVino: 'fermo',
    vitigni: ['Schioppettino'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Schioppettino DOC',
    tipoVino: 'fermo',
    vitigni: ['Schioppettino'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Schioppettino DOC “Cialla”',
    tipoVino: 'fermo',
    vitigni: ['Schioppettino'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Tazzelenghe DOC',
    tipoVino: 'fermo',
    vitigni: ['Tazzelenghe'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Traminer aromatico DOC',
    tipoVino: 'fermo',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Verduzzo friulano DOC',
    tipoVino: 'fermo',
    vitigni: ['Verduzzo Friulano'],
  },
  {
    denominazioneVino: 'Friuli Colli Orientali Verduzzo friulano DOC “Cialla”',
    tipoVino: 'fermo',
    vitigni: ['Verduzzo Friulano'],
  },
  {
    denominazioneVino: 'Friuli Friulano DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Friuli Grave Bianco DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Friuli Grave Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon, Carmènere'],
  },
  {
    denominazioneVino: 'Friuli Grave Cabernet franc DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Friuli Grave Cabernet sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Friuli Grave Chardonnay DOC',
    tipoVino: 'fermo, spumante, frizzante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Friuli Grave Friulano DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Friuli Grave Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Friuli Grave Novello DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Friuli Grave Pinot bianco DOC',
    tipoVino: 'fermo, spumante, frizzante',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Friuli Grave Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Friuli Grave Pinot nero DOC',
    tipoVino: 'fermo, spumante',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Friuli Grave Refosco dal peduncolo rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino: 'Friuli Grave Riesling DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino: 'Friuli Grave Rosato DOC',
    tipoVino: 'fermo, frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Friuli Grave Rosso DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Friuli Grave Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Friuli Grave Spumante DOC',
    tipoVino: 'spumante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Friuli Grave Traminer aromatico DOC',
    tipoVino: 'fermo',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino: 'Friuli Grave Verduzzo friulano DOC',
    tipoVino: 'fermo, frizzante',
    vitigni: ['Verduzzo Friulano'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Bianco DOC',
    tipoVino: 'fermo, frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Friuli Isonzo Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Cabernet franc DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Cabernet sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Chardonnay spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot nero'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Franconia DOC',
    tipoVino: 'fermo',
    vitigni: ['Franconia'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Friulano DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Malvasia DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia Istriana'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Moscato giallo DOC',
    tipoVino: 'fermo',
    vitigni: ['Moscato giallo'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Moscato giallo spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Moscato giallo'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Moscato rosa DOC',
    tipoVino: 'fermo',
    vitigni: ['Moscato rosa'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Moscato rosa spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Moscato rosa'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Pignolo DOC',
    tipoVino: 'fermo',
    vitigni: ['Pignolo'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Pinot bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Pinot nero DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Pinot spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Refosco dal peduncolo rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Riesling DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Riesling italico DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling Italico'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Rosato DOC',
    tipoVino: 'fermo, frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Friuli Isonzo Rosso DOC',
    tipoVino: 'fermo, frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Friuli Isonzo Rosso spumante DOC',
    tipoVino: 'spumante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Friuli Isonzo Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Schioppettino DOC',
    tipoVino: 'fermo',
    vitigni: ['Schioppettino'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Traminer aromatico DOC',
    tipoVino: 'fermo',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Vendemmia Tardiva DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Tocai Friulano, Sauvignon, Verduzzo Friulano, Pinot bianco, Chardonnay, Malvasia Istriana',
    ],
  },
  {
    denominazioneVino: 'Friuli Isonzo Verduzzo friulano DOC',
    tipoVino: 'fermo',
    vitigni: ['Verduzzo Friulano'],
  },
  {
    denominazioneVino: 'Friuli Isonzo Verduzzo friulano spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Verduzzo Friulano'],
  },
  {
    denominazioneVino: 'Friuli Latisana Bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano, Chardonnay, Pinot bianco'],
  },
  {
    denominazioneVino: 'Friuli Latisana Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon, Carmènere'],
  },
  {
    denominazioneVino: 'Friuli Latisana Cabernet franc DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Friuli Latisana Cabernet franc novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Friuli Latisana Cabernet novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon, Carmènere'],
  },
  {
    denominazioneVino: 'Friuli Latisana Cabernet sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Friuli Latisana Cabernet sauvignon novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Friuli Latisana Carmenere DOC',
    tipoVino: 'fermo',
    vitigni: ['Carmènere'],
  },
  {
    denominazioneVino: 'Friuli Latisana Carmenere novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Carmènere'],
  },
  {
    denominazioneVino: 'Friuli Latisana Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Friuli Latisana Chardonnay frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Friuli Latisana Chardonnay spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Friuli Latisana Franconia DOC',
    tipoVino: 'fermo',
    vitigni: ['Franconia'],
  },
  {
    denominazioneVino: 'Friuli Latisana Franconia novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Franconia'],
  },
  {
    denominazioneVino: 'Friuli Latisana Friulano DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Friuli Latisana Malvasia DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia'],
  },
  {
    denominazioneVino: 'Friuli Latisana Malvasia frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Malvasia'],
  },
  {
    denominazioneVino: 'Friuli Latisana Malvasia spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Malvasia'],
  },
  {
    denominazioneVino: 'Friuli Latisana Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Friuli Latisana Merlot novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Friuli Latisana Passito DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano, Chardonnay, Pinot bianco'],
  },
  {
    denominazioneVino: 'Friuli Latisana Pinot bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Friuli Latisana Pinot bianco frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Friuli Latisana Pinot bianco spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Friuli Latisana Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Friuli Latisana Pinot nero DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Friuli Latisana Pinot nero frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Friuli Latisana Pinot nero spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Friuli Latisana Refosco dal peduncolo rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino:
      'Friuli Latisana Refosco dal peduncolo rosso novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino: 'Friuli Latisana Riesling DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino: 'Friuli Latisana Rosato DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Cabernet Sauvignon, Cabernet Franc, Carmènere'],
  },
  {
    denominazioneVino: 'Friuli Latisana Rosato frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Merlot, Cabernet Sauvignon, Cabernet Franc, Carmènere'],
  },
  {
    denominazioneVino: 'Friuli Latisana Rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Cabernet Sauvignon, Cabernet Franc, Carmènere'],
  },
  {
    denominazioneVino: 'Friuli Latisana Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Friuli Latisana Traminer aromatico DOC',
    tipoVino: 'fermo',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino: 'Friuli Latisana Verduzzo friulano DOC',
    tipoVino: 'fermo',
    vitigni: ['Verduzzo Friulano'],
  },
  {
    denominazioneVino: 'Friuli Latisana Verduzzo friulano frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Verduzzo Friulano'],
  },
  {
    denominazioneVino: 'Friuli Malvasia DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia Istriana'],
  },
  {
    denominazioneVino: 'Friuli Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Friuli Pinot bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Friuli Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Friuli Pinot nero DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Friuli Refosco dal Peduncolo Rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino: 'Friuli Ribolla Gialla Spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Ribolla gialla'],
  },
  {
    denominazioneVino: 'Friuli Ribolla Gialla Spumante Metodo Classico DOC',
    tipoVino: 'spumante',
    vitigni: ['Ribolla gialla'],
  },
  {
    denominazioneVino: 'Friuli Riesling DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling Italico, Riesling Renano'],
  },
  {
    denominazioneVino: 'Friuli Rosso DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Merlot, Cabernet Franc, Cabernet Sauvignon, Carmènere, Pinot nero, Refosco dal peduncolo rosso',
    ],
  },
  {
    denominazioneVino: 'Friuli Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Friuli Spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot bianco, Pinot grigio, Pinot nero'],
  },
  {
    denominazioneVino: 'Friuli Spumante Metodo Classico DOC',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot bianco, Pinot grigio, Pinot nero'],
  },
  {
    denominazioneVino: 'Friuli Traminer aromatico DOC',
    tipoVino: 'fermo',
    vitigni: ['Traminer aromatico'],
  },
  {
    denominazioneVino: 'Friuli Verduzzo Friulano DOC',
    tipoVino: 'fermo',
    vitigni: ['Verduzzo Friulano'],
  },
  {
    denominazioneVino: 'Gabiano DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Freisa, Grignolino'],
  },
  {
    denominazioneVino: 'Galatina DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Galatina DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Galatina DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Galatina DOC Negroamaro',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Galatina DOC Negroamaro riserva',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Galatina DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Galatina DOC rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Galatina DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Galatina DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Galluccio DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Galluccio DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Galluccio DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Galluccio DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Gambellara classico Vin Santo DOC',
    tipoVino: 'passito',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Gambellara DOC',
    tipoVino: 'fermo',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Gambellara DOC classico',
    tipoVino: 'fermo',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Gambellara DOC superiore',
    tipoVino: 'fermo',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Gambellara spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Garda Colli Mantovani bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Garganega, Trebbiano Toscano, Chardonnay'],
  },
  {
    denominazioneVino: 'Garda Colli Mantovani Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Garda Colli Mantovani Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Garda Colli Mantovani Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Garda Colli Mantovani Pinot bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Garda Colli Mantovani Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Garda Colli Mantovani rosato DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Rondinella, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Garda Colli Mantovani rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Rondinella, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Garda Colli Mantovani Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Garda DOC Barbera',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Garda DOC Cabernet',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon, Carmènere'],
  },
  {
    denominazioneVino: 'Garda DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Garda DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Garda DOC Chardonnay spumante',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Garda DOC Classico bianco',
    tipoVino: 'fermo',
    vitigni: ['Riesling Italico, Riesling'],
  },
  {
    denominazioneVino: 'Garda DOC Classico chiaretto',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Garda DOC Classico Groppello',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Garda DOC Classico Groppello riserva',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Garda DOC Classico rosso',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Garda DOC Classico rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Garda DOC Classico rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Garda DOC Cortese',
    tipoVino: 'fermo',
    vitigni: ['Cortese'],
  },
  {
    denominazioneVino: 'Garda DOC Corvina',
    tipoVino: 'fermo',
    vitigni: ['Corvina'],
  },
  {
    denominazioneVino: 'Garda DOC frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Riesling Italico, Riesling'],
  },
  {
    denominazioneVino: 'Garda DOC Garganega',
    tipoVino: 'fermo',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Garda DOC Marzemino',
    tipoVino: 'fermo',
    vitigni: ['Marzemino'],
  },
  {
    denominazioneVino: 'Garda DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Garda DOC Pinot bianco',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Garda DOC Pinot bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Garda DOC Pinot grigio',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Garda DOC Pinot nero',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Garda DOC Riesling',
    tipoVino: 'fermo',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino: 'Garda DOC Riesling Italico',
    tipoVino: 'fermo',
    vitigni: ['Riesling Italico'],
  },
  {
    denominazioneVino: 'Garda DOC Riesling spumante',
    tipoVino: 'spumante',
    vitigni: ['Riesling Italico, Riesling'],
  },
  {
    denominazioneVino: 'Garda DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Garda DOC spumante rosè',
    tipoVino: 'spumante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Garda DOC Tai',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Gattinara DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo, Vespolina, Uva rara'],
  },
  {
    denominazioneVino: 'Gattinara riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo, Vespolina, Uva rara'],
  },
  {
    denominazioneVino: 'Gavi o Cortese di Gavi frizzante DOCG',
    tipoVino: 'frizzante',
    vitigni: ['Cortese'],
  },
  {
    denominazioneVino: 'Gavi o Cortese di Gavi riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Cortese'],
  },
  {
    denominazioneVino:
      'Gavi o Cortese di Gavi riserva spumante metodo classico DOCG',
    tipoVino: 'spumante',
    vitigni: ['Cortese'],
  },
  {
    denominazioneVino: 'Gavi o Cortese di Gavi spumante DOCG',
    tipoVino: 'spumante',
    vitigni: ['Cortese'],
  },
  {
    denominazioneVino: 'Gavi o Cortese di Gavi tranquillo DOCG',
    tipoVino: 'fermo',
    vitigni: ['Cortese'],
  },
  {
    denominazioneVino: 'Genazzano bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Genazzano rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Ciliegiolo'],
  },
  {
    denominazioneVino: 'Ghemme DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo, Vespolina, Uva rara'],
  },
  {
    denominazioneVino: 'Ghemme riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo, Vespolina, Uva rara'],
  },
  {
    denominazioneVino: 'Gioia del Colle DOC Aleatico dolce',
    tipoVino: 'fermo',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Gioia del Colle DOC Aleatico liquoroso',
    tipoVino: 'liquoroso',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Gioia del Colle DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Gioia del Colle DOC Primitivo',
    tipoVino: 'fermo',
    vitigni: ['Primitivo'],
  },
  {
    denominazioneVino: 'Gioia del Colle DOC rosato',
    tipoVino: 'fermo',
    vitigni: [
      'Primitivo, Montepulciano, Sangiovese, Negro Amaro, Malvasia nera di Lecce',
    ],
  },
  {
    denominazioneVino: 'Gioia del Colle DOC rosso',
    tipoVino: 'fermo',
    vitigni: [
      'Primitivo, Montepulciano, Sangiovese, Negro Amaro, Malvasia nera di Lecce',
    ],
  },
  {
    denominazioneVino: 'Girò di Cagliari DOC',
    tipoVino: 'fermo',
    vitigni: ['Girò'],
  },
  {
    denominazioneVino: 'Girò di Cagliari liquoroso DOC',
    tipoVino: 'fermo',
    vitigni: ['Girò'],
  },
  {
    denominazioneVino: 'Girò di Cagliari liquoroso riserva DOC',
    tipoVino: 'liquoroso',
    vitigni: ['Girò'],
  },
  {
    denominazioneVino:
      'Golfo del Tigullio-Portofino o Portofino DOC Bianchetta Genovese',
    tipoVino: 'fermo',
    vitigni: ['Bianchetta Genovese'],
  },
  {
    denominazioneVino:
      'Golfo del Tigullio-Portofino o Portofino DOC Bianchetta Genovese frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Bianchetta Genovese'],
  },
  {
    denominazioneVino: 'Golfo del Tigullio-Portofino o Portofino DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Vermentino, Bianchetta Genovese'],
  },
  {
    denominazioneVino:
      'Golfo del Tigullio-Portofino o Portofino DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Vermentino, Bianchetta Genovese'],
  },
  {
    denominazioneVino:
      'Golfo del Tigullio-Portofino o Portofino DOC Ciliegiolo',
    tipoVino: 'fermo',
    vitigni: ['Ciliegiolo'],
  },
  {
    denominazioneVino:
      'Golfo del Tigullio-Portofino o Portofino DOC Ciliegiolo frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Ciliegiolo'],
  },
  {
    denominazioneVino:
      'Golfo del Tigullio-Portofino o Portofino DOC Ciliegiolo novello',
    tipoVino: 'fermo',
    vitigni: ['Ciliegiolo'],
  },
  {
    denominazioneVino:
      'Golfo del Tigullio-Portofino o Portofino DOC Costa dei Fieschi bianco',
    tipoVino: 'fermo',
    vitigni: ['Vermentino, Bianchetta Genovese'],
  },
  {
    denominazioneVino:
      'Golfo del Tigullio-Portofino o Portofino DOC Costa dei Fieschi moscato',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Golfo del Tigullio-Portofino o Portofino DOC Costa dei Fieschi moscato passito',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Golfo del Tigullio-Portofino o Portofino DOC Costa dei Fieschi passito',
    tipoVino: 'passito',
    vitigni: ['Vermentino, Bianchetta Genovese'],
  },
  {
    denominazioneVino:
      'Golfo del Tigullio-Portofino o Portofino DOC Costa dei Fieschi rosso',
    tipoVino: 'fermo',
    vitigni: ['Ciliegiolo, Dolcetto'],
  },
  {
    denominazioneVino:
      'Golfo del Tigullio-Portofino o Portofino DOC Costa dei Fieschi spumante',
    tipoVino: 'spumante',
    vitigni: ['Vermentino, Bianchetta Genovese'],
  },
  {
    denominazioneVino: 'Golfo del Tigullio-Portofino o Portofino DOC Moscato',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Golfo del Tigullio-Portofino o Portofino DOC Moscato passito',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Golfo del Tigullio-Portofino o Portofino DOC novello',
    tipoVino: 'fermo',
    vitigni: ['Ciliegiolo, Dolcetto'],
  },
  {
    denominazioneVino: 'Golfo del Tigullio-Portofino o Portofino DOC passito',
    tipoVino: 'passito',
    vitigni: ['Vermentino, Bianchetta Genovese'],
  },
  {
    denominazioneVino: 'Golfo del Tigullio-Portofino o Portofino DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Ciliegiolo, Dolcetto'],
  },
  {
    denominazioneVino:
      'Golfo del Tigullio-Portofino o Portofino DOC rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Ciliegiolo, Dolcetto'],
  },
  {
    denominazioneVino: 'Golfo del Tigullio-Portofino o Portofino DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Ciliegiolo, Dolcetto'],
  },
  {
    denominazioneVino:
      'Golfo del Tigullio-Portofino o Portofino DOC rosso frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Ciliegiolo, Dolcetto'],
  },
  {
    denominazioneVino:
      'Golfo del Tigullio-Portofino o Portofino DOC Scimscià (Cimixa)',
    tipoVino: 'fermo',
    vitigni: ['Scimiscià'],
  },
  {
    denominazioneVino: 'Golfo del Tigullio-Portofino o Portofino DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Vermentino, Bianchetta Genovese'],
  },
  {
    denominazioneVino:
      'Golfo del Tigullio-Portofino o Portofino DOC Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino:
      'Golfo del Tigullio-Portofino o Portofino DOC Vermentino frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Grance Senesi DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Grance Senesi DOC Cabernet Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Grance Senesi DOC Canaiolo',
    tipoVino: 'fermo',
    vitigni: ['Canaiolo nero'],
  },
  {
    denominazioneVino: 'Grance Senesi DOC Malvasia bianca lunga',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Grance Senesi DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Grance Senesi DOC passito',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Grance Senesi DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Grance Senesi DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Grance Senesi DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Grance Senesi DOC vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Gravina DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Greco, Malvasia bianca, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Gravina DOC passito',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Gravina DOC rosato',
    tipoVino: 'fermo',
    vitigni: [
      'Primitivo, Montepulciano, Aglianico, Uva di Troia, Cabernet Sauvignon, Cabernet Sauvignon',
    ],
  },
  {
    denominazioneVino: 'Gravina DOC rosso',
    tipoVino: 'fermo',
    vitigni: [
      'Primitivo, Montepulciano, Aglianico, Uva di Troia, Cabernet Sauvignon, Cabernet Sauvignon',
    ],
  },
  {
    denominazioneVino: 'Gravina DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Greco, Malvasia bianca, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Greco di Bianco DOC',
    tipoVino: 'passito',
    vitigni: ['Greco Bianco'],
  },
  {
    denominazioneVino: 'Greco di Tufo DOCG',
    tipoVino: 'fermo',
    vitigni: ['Greco, Coda di Volpe'],
  },
  {
    denominazioneVino: 'Greco di Tufo spumante DOCG',
    tipoVino: 'spumante',
    vitigni: ['Greco, Coda di Volpe'],
  },
  {
    denominazioneVino: 'Grignolino d’Asti DOC',
    tipoVino: 'fermo',
    vitigni: ['Grignolino, Freisa'],
  },
  {
    denominazioneVino: 'Grignolino del Monferrato Casalese DOC',
    tipoVino: 'fermo',
    vitigni: ['Grignolino, Freisa'],
  },
  {
    denominazioneVino: 'Grottino di Roccanova DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Malvasia nera di Basilicata'],
  },
  {
    denominazioneVino: 'Grottino di Roccanova DOC rosato',
    tipoVino: 'fermo',
    vitigni: [
      'Sangiovese, Cabernet Sauvignon, Malvasia nera di Basilicata, Montepulciano',
    ],
  },
  {
    denominazioneVino: 'Grottino di Roccanova DOC rosso',
    tipoVino: 'fermo',
    vitigni: [
      'Sangiovese, Cabernet Sauvignon, Malvasia nera di Basilicata, Montepulciano',
    ],
  },
  {
    denominazioneVino: 'Grottino di Roccanova DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: [
      'Sangiovese, Cabernet Sauvignon, Malvasia nera di Basilicata, Montepulciano',
    ],
  },
  {
    denominazioneVino: 'Gutturnio DOC classico riserva',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Croatina'],
  },
  {
    denominazioneVino: 'Gutturnio DOC classico superiore',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Croatina'],
  },
  {
    denominazioneVino: 'Gutturnio DOC frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Barbera, Croatina'],
  },
  {
    denominazioneVino: 'Gutturnio DOC riserva',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Croatina'],
  },
  {
    denominazioneVino: 'Gutturnio DOC superiore',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Croatina'],
  },
  {
    denominazioneVino: 'I Terreni di San Severino DOC moro',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'I Terreni di San Severino DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Vernaccia nera'],
  },
  {
    denominazioneVino: 'I Terreni di San Severino DOC rosso passito',
    tipoVino: 'passito',
    vitigni: ['Vernaccia nera'],
  },
  {
    denominazioneVino: 'I Terreni di San Severino DOC rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Vernaccia nera'],
  },
  {
    denominazioneVino: 'Irpinia DOC Aglianico',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Irpinia DOC Aglianico liquoroso',
    tipoVino: 'liquoroso',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Irpinia DOC Aglianico passito',
    tipoVino: 'passito',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Irpinia DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Greco, Fiano'],
  },
  {
    denominazioneVino: 'Irpinia DOC Coda di Volpe',
    tipoVino: 'fermo',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Irpinia DOC Falanghina',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Irpinia DOC Falanghina spumante',
    tipoVino: 'spumante',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Irpinia DOC Fiano',
    tipoVino: 'fermo',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Irpinia DOC Fiano passito',
    tipoVino: 'passito',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Irpinia DOC Fiano spumante',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Irpinia DOC Greco',
    tipoVino: 'fermo',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Irpinia DOC Greco passito',
    tipoVino: 'passito',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Irpinia DOC Greco spumante',
    tipoVino: 'spumante',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Irpinia DOC novello',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Irpinia DOC Piedirosso',
    tipoVino: 'fermo',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Irpinia DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Irpinia DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Irpinia DOC Sciascinoso',
    tipoVino: 'fermo',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino: 'Irpinia DOC sottozona Campi Taurasini',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Ischia DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Forastera, Biancolella'],
  },
  {
    denominazioneVino: 'Ischia DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Forastera, Biancolella'],
  },
  {
    denominazioneVino: 'Ischia DOC bianco superiore',
    tipoVino: 'fermo',
    vitigni: ['Forastera, Biancolella'],
  },
  {
    denominazioneVino: 'Ischia DOC Biancolella',
    tipoVino: 'fermo',
    vitigni: ['Biancolella'],
  },
  {
    denominazioneVino: 'Ischia DOC Forastera',
    tipoVino: 'fermo',
    vitigni: ['Forastera'],
  },
  {
    denominazioneVino: 'Ischia DOC Piedirosso o Per’e Palummo',
    tipoVino: 'fermo',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Ischia DOC Piedirosso o Per’e Palummo passito',
    tipoVino: 'passito',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Ischia DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Guarnaccia, Piedirosso'],
  },
  {
    denominazioneVino: 'Lacrima di Morro d’Alba DOC',
    tipoVino: 'fermo',
    vitigni: ['Lacrima'],
  },
  {
    denominazioneVino: 'Lacrima di Morro d’Alba DOC passito',
    tipoVino: 'passito',
    vitigni: ['Lacrima'],
  },
  {
    denominazioneVino: 'Lacrima di Morro d’Alba DOC superiore',
    tipoVino: 'fermo',
    vitigni: ['Lacrima'],
  },
  {
    denominazioneVino: 'Lago di Caldaro o Caldaro classico superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Schiava grossa, Schiava gentile, Schiava grigia'],
  },
  {
    denominazioneVino: 'Lago di Caldaro o Caldaro DOC',
    tipoVino: 'fermo',
    vitigni: ['Schiava grossa, Schiava gentile, Schiava grigia'],
  },
  {
    denominazioneVino:
      'Lago di Caldaro o Caldaro scelto (Auslese) classico superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Schiava grossa, Schiava gentile, Schiava grigia'],
  },
  {
    denominazioneVino: 'Lago di Caldaro o Caldaro scelto (Auslese) DOC',
    tipoVino: 'fermo',
    vitigni: ['Schiava grossa, Schiava gentile, Schiava grigia'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Grechetto, Sauvignon'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC bianco riserva',
    tipoVino: 'fermo',
    vitigni: ['Grechetto, Sauvignon'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC Cabernet sauvignon riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC Chardonnay riserva',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC Grechetto',
    tipoVino: 'fermo',
    vitigni: ['Grechetto'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC Grechetto riserva',
    tipoVino: 'fermo',
    vitigni: ['Grechetto'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC Merlot riserva',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC passito',
    tipoVino: 'passito',
    vitigni: ['Grechetto, Sauvignon'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC passito riserva',
    tipoVino: 'passito',
    vitigni: ['Grechetto, Sauvignon'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC Pinot nero',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC Pinot nero riserva',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Merlot, Pinot nero, Sangiovese'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Merlot, Pinot nero, Sangiovese'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC Sauvignon riserva',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC Vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Grechetto, Sauvignon'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Lago di Corbara DOC Vermentino riserva',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Lambrusco di Sorbara DOC rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Lambrusco di Sorbara, Lambrusco Salamino'],
  },
  {
    denominazioneVino: 'Lambrusco di Sorbara DOC rosato spumante',
    tipoVino: 'spumante',
    vitigni: ['Lambrusco di Sorbara, Lambrusco Salamino'],
  },
  {
    denominazioneVino: 'Lambrusco di Sorbara DOC rosso frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Lambrusco di Sorbara, Lambrusco Salamino'],
  },
  {
    denominazioneVino: 'Lambrusco di Sorbara DOC rosso spumante',
    tipoVino: 'spumante',
    vitigni: ['Lambrusco di Sorbara, Lambrusco Salamino'],
  },
  {
    denominazioneVino:
      'Lambrusco Grasparossa di Castelvetro DOC rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Lambrusco Grasparossa'],
  },
  {
    denominazioneVino:
      'Lambrusco Grasparossa di Castelvetro DOC rosato spumante',
    tipoVino: 'spumante',
    vitigni: ['Lambrusco Grasparossa'],
  },
  {
    denominazioneVino:
      'Lambrusco Grasparossa di Castelvetro DOC rosso frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Lambrusco Grasparossa'],
  },
  {
    denominazioneVino:
      'Lambrusco Grasparossa di Castelvetro DOC rosso spumante',
    tipoVino: 'spumante',
    vitigni: ['Lambrusco Grasparossa'],
  },
  {
    denominazioneVino: 'Lambrusco Mantovano Oltrepò Mantovano rosato DOC',
    tipoVino: 'frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Lambrusco Mantovano Oltrepò Mantovano rosso DOC',
    tipoVino: 'frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Lambrusco Mantovano rosato DOC',
    tipoVino: 'frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Lambrusco Mantovano rosso DOC',
    tipoVino: 'frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Lambrusco Mantovano Viadanese-Sabbionetano rosato DOC',
    tipoVino: 'frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Lambrusco Mantovano Viadanese-Sabbionetano rosso DOC',
    tipoVino: 'frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Lambrusco Salamino di Santa Croce DOC rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Lambrusco Salamino'],
  },
  {
    denominazioneVino: 'Lambrusco Salamino di Santa Croce DOC rosato spumante',
    tipoVino: 'spumante',
    vitigni: ['Lambrusco Salamino'],
  },
  {
    denominazioneVino: 'Lambrusco Salamino di Santa Croce DOC rosso frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Lambrusco Salamino'],
  },
  {
    denominazioneVino: 'Lambrusco Salamino di Santa Croce DOC rosso spumante',
    tipoVino: 'spumante',
    vitigni: ['Lambrusco Salamino'],
  },
  {
    denominazioneVino: 'Lamezia DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Greco Bianco'],
  },
  {
    denominazioneVino: 'Lamezia DOC Gaglioppo',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo'],
  },
  {
    denominazioneVino: 'Lamezia DOC Greco',
    tipoVino: 'fermo',
    vitigni: ['Greco Bianco'],
  },
  {
    denominazioneVino: 'Lamezia DOC Greco nero',
    tipoVino: 'fermo',
    vitigni: ['Greco Nero'],
  },
  {
    denominazioneVino: 'Lamezia DOC Mantonico',
    tipoVino: 'fermo',
    vitigni: ['Montonico bianco'],
  },
  {
    denominazioneVino: 'Lamezia DOC novello',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo, Magliocco canino, Greco Nero'],
  },
  {
    denominazioneVino: 'Lamezia DOC passito',
    tipoVino: 'passito',
    vitigni: ['Greco, Montonico bianco'],
  },
  {
    denominazioneVino: 'Lamezia DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo, Magliocco canino, Greco Nero'],
  },
  {
    denominazioneVino: 'Lamezia DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo, Magliocco canino, Greco Nero'],
  },
  {
    denominazioneVino: 'Lamezia DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo, Magliocco canino, Greco Nero'],
  },
  {
    denominazioneVino: 'Lamezia DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Greco, Montonico bianco'],
  },
  {
    denominazioneVino: 'Lamezia DOC spumante rosato',
    tipoVino: 'spumante',
    vitigni: ['Greco, Montonico bianco, Gaglioppo'],
  },
  {
    denominazioneVino: 'Langhe DOC Arneis',
    tipoVino: 'fermo',
    vitigni: ['Arneis'],
  },
  {
    denominazioneVino: 'Langhe DOC Arneis passito',
    tipoVino: 'passito',
    vitigni: ['Arneis'],
  },
  {
    denominazioneVino: 'Langhe DOC Barbera',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Langhe DOC bianco',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Langhe DOC bianco passito',
    tipoVino: 'passito',
    vitigni: ['Arneis, Chardonnay, Nascetta, Riesling Italico'],
  },
  {
    denominazioneVino: 'Langhe DOC Cabernet Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Langhe DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Langhe DOC Dolcetto',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Langhe DOC Dolcetto novello',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Langhe DOC Favorita',
    tipoVino: 'fermo',
    vitigni: ['Favorita'],
  },
  {
    denominazioneVino: 'Langhe DOC Freisa',
    tipoVino: 'fermo',
    vitigni: ['Freisa'],
  },
  {
    denominazioneVino: 'Langhe DOC Freisa frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Freisa'],
  },
  {
    denominazioneVino: 'Langhe DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Langhe DOC Nascetta',
    tipoVino: 'fermo',
    vitigni: ['Nascetta'],
  },
  {
    denominazioneVino: 'Langhe DOC Nebbiolo',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Langhe DOC Pinot Nero',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Langhe DOC Riesling',
    tipoVino: 'fermo',
    vitigni: ['Riesling Italico'],
  },
  {
    denominazioneVino: 'Langhe DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Dolcetto, Nebbiolo'],
  },
  {
    denominazioneVino: 'Langhe DOC Rossese bianco',
    tipoVino: 'fermo',
    vitigni: ['Rossese bianco'],
  },
  {
    denominazioneVino: 'Langhe DOC rosso',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Langhe DOC rosso passito',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Dolcetto, Nebbiolo'],
  },
  {
    denominazioneVino: 'Langhe DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Lessini Durello o Durello Lessini spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Durella'],
  },
  {
    denominazioneVino: 'Lessini Durello o Durello Lessini spumante riserva DOC',
    tipoVino: 'spumante',
    vitigni: ['Durella'],
  },
  {
    denominazioneVino: 'Lessona DOC',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo, Vespolina, Uva rara'],
  },
  {
    denominazioneVino: 'Lessona DOC riserva',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo, Vespolina, Uva rara'],
  },
  {
    denominazioneVino: 'Leverano DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca, Vermentino'],
  },
  {
    denominazioneVino: 'Leverano DOC bianco dolce naturale',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca, Vermentino'],
  },
  {
    denominazioneVino: 'Leverano DOC bianco passito',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca, Vermentino'],
  },
  {
    denominazioneVino: 'Leverano DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Leverano DOC Fiano',
    tipoVino: 'fermo',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Leverano DOC Malvasia bianca',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca'],
  },
  {
    denominazioneVino: 'Leverano DOC Negroamaro rosato',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Leverano DOC Negroamaro rosso',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Leverano DOC Negroamaro rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Leverano DOC Negroamaro rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Leverano DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro, Malvasia nera di Lecce, Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'Leverano DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro, Malvasia nera di Lecce, Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'Leverano DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro, Malvasia nera di Lecce, Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'Leverano DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro, Malvasia nera di Lecce, Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'Lison classico DOCG',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Lison DOCG',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Lison e Lison classico DOCG',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Lison Pramaggiore Bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Lison Pramaggiore Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon, Carmènere'],
  },
  {
    denominazioneVino: 'Lison Pramaggiore Cabernet franc DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Lison Pramaggiore Cabernet sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Lison Pramaggiore Carmenère DOC',
    tipoVino: 'fermo',
    vitigni: ['Carmènere'],
  },
  {
    denominazioneVino: 'Lison Pramaggiore Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Lison Pramaggiore Malbech DOC',
    tipoVino: 'fermo',
    vitigni: ['Malbech'],
  },
  {
    denominazioneVino: 'Lison Pramaggiore Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Lison Pramaggiore Merlot riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Lison Pramaggiore Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Lison Pramaggiore Refosco dal peduncolo rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino:
      'Lison Pramaggiore Refosco dal peduncolo rosso passito DOC',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino:
      'Lison Pramaggiore Refosco dal peduncolo rosso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino: 'Lison Pramaggiore Rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Lison Pramaggiore Rosso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Lison Pramaggiore Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Lison Pramaggiore Spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot bianco, Pinot nero'],
  },
  {
    denominazioneVino: 'Lison Pramaggiore Verduzzo DOC',
    tipoVino: 'fermo',
    vitigni: ['Verduzzo Friulano'],
  },
  {
    denominazioneVino: 'Lison Pramaggiore Verduzzo passito DOC',
    tipoVino: 'fermo',
    vitigni: ['Verduzzo Friulano'],
  },
  {
    denominazioneVino: 'Lizzano DOC bianco',
    tipoVino: 'fermo',
    vitigni: [
      'Trebbiano Toscano, Chardonnay, Pinot bianco, Malvasia bianca lunga, Bianco d’Alessano, Sauvignon',
    ],
  },
  {
    denominazioneVino: 'Lizzano DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: [
      'Trebbiano Toscano, Chardonnay, Pinot bianco, Malvasia bianca lunga, Bianco d’Alessano, Sauvignon',
    ],
  },
  {
    denominazioneVino: 'Lizzano DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: [
      'Trebbiano Toscano, Chardonnay, Pinot bianco, Malvasia bianca lunga, Bianco d’Alessano, Sauvignon',
    ],
  },
  {
    denominazioneVino: 'Lizzano DOC Malvasia nera',
    tipoVino: 'fermo',
    vitigni: ['Malvasia nera di Brindisi, Malvasia nera di Lecce'],
  },
  {
    denominazioneVino: 'Lizzano DOC Negroamaro rosato',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Lizzano DOC Negroamaro rosso',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Lizzano DOC rosato',
    tipoVino: 'fermo',
    vitigni: [
      'Negro Amaro, Montepulciano, Sangiovese, Bombino nero, Pinot nero',
    ],
  },
  {
    denominazioneVino: 'Lizzano DOC rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: [
      'Negro Amaro, Montepulciano, Sangiovese, Bombino nero, Pinot nero',
    ],
  },
  {
    denominazioneVino: 'Lizzano DOC rosato novello',
    tipoVino: 'fermo',
    vitigni: [
      'Negro Amaro, Montepulciano, Sangiovese, Bombino nero, Pinot nero',
    ],
  },
  {
    denominazioneVino: 'Lizzano DOC rosato spumante',
    tipoVino: 'spumante',
    vitigni: [
      'Negro Amaro, Montepulciano, Sangiovese, Bombino nero, Pinot nero',
    ],
  },
  {
    denominazioneVino: 'Lizzano DOC rosso',
    tipoVino: 'fermo',
    vitigni: [
      'Negro Amaro, Montepulciano, Sangiovese, Bombino nero, Pinot nero',
    ],
  },
  {
    denominazioneVino: 'Lizzano DOC rosso frizzante',
    tipoVino: 'frizzante',
    vitigni: [
      'Negro Amaro, Montepulciano, Sangiovese, Bombino nero, Pinot nero',
    ],
  },
  {
    denominazioneVino: 'Lizzano DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: [
      'Negro Amaro, Montepulciano, Sangiovese, Bombino nero, Pinot nero',
    ],
  },
  {
    denominazioneVino: 'Loazzolo DOC',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Locorotondo DOC',
    tipoVino: 'fermo',
    vitigni: ['Verdeca, Bianco d’Alessano'],
  },
  {
    denominazioneVino: 'Locorotondo DOC Bianco d’Alessano',
    tipoVino: 'fermo',
    vitigni: ['Bianco d’Alessano'],
  },
  {
    denominazioneVino: 'Locorotondo DOC Fiano',
    tipoVino: 'fermo',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Locorotondo DOC passito',
    tipoVino: 'passito',
    vitigni: ['Verdeca, Bianco d’Alessano'],
  },
  {
    denominazioneVino: 'Locorotondo DOC riserva',
    tipoVino: 'fermo',
    vitigni: ['Verdeca, Bianco d’Alessano'],
  },
  {
    denominazioneVino: 'Locorotondo DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Verdeca, Bianco d’Alessano'],
  },
  {
    denominazioneVino: 'Locorotondo DOC superiore',
    tipoVino: 'fermo',
    vitigni: ['Verdeca, Bianco d’Alessano'],
  },
  {
    denominazioneVino: 'Locorotondo DOC Verdeca',
    tipoVino: 'fermo',
    vitigni: ['Verdeca'],
  },
  {
    denominazioneVino: 'Lugana DOC',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano di Soave'],
  },
  {
    denominazioneVino: 'Lugana riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano di Soave'],
  },
  {
    denominazioneVino: 'Lugana spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Trebbiano di Soave'],
  },
  {
    denominazioneVino: 'Lugana superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano di Soave'],
  },
  {
    denominazioneVino: 'Lugana Vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Trebbiano di Soave'],
  },
  {
    denominazioneVino: 'Malvasia delle Lipari DOC bianco o dolce naturale',
    tipoVino: 'fermo',
    vitigni: ['Malvasia di Lipari, Corinto nero'],
  },
  {
    denominazioneVino: 'Malvasia delle Lipari DOC liquoroso',
    tipoVino: 'liquoroso',
    vitigni: ['Malvasia di Lipari, Corinto nero'],
  },
  {
    denominazioneVino: 'Malvasia delle Lipari DOC passito',
    tipoVino: 'passito',
    vitigni: ['Malvasia di Lipari, Corinto nero'],
  },
  {
    denominazioneVino: 'Malvasia di Bosa DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia di Sardegna'],
  },
  {
    denominazioneVino: 'Malvasia di Bosa DOC passito',
    tipoVino: 'passito',
    vitigni: ['Malvasia di Sardegna'],
  },
  {
    denominazioneVino: 'Malvasia di Bosa DOC riserva',
    tipoVino: 'fermo',
    vitigni: ['Malvasia di Sardegna'],
  },
  {
    denominazioneVino: 'Malvasia di Bosa DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Malvasia di Sardegna'],
  },
  {
    denominazioneVino: 'Malvasia di Casorzo o Casorzo DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia di Casorzo, Freisa, Grignolino, Barbera'],
  },
  {
    denominazioneVino: 'Malvasia di Casorzo o Casorzo DOC passito',
    tipoVino: 'passito',
    vitigni: ['Malvasia di Casorzo, Freisa, Grignolino, Barbera'],
  },
  {
    denominazioneVino: 'Malvasia di Casorzo o Casorzo DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Malvasia di Casorzo, Freisa, Grignolino, Barbera'],
  },
  {
    denominazioneVino: 'Malvasia di Castelnuovo Don Bosco DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia di Schierano, Malvasia nera lunga, Freisa'],
  },
  {
    denominazioneVino: 'Malvasia di Castelnuovo Don Bosco DOC spumante',
    tipoVino: 'passito',
    vitigni: ['Malvasia di Schierano, Malvasia nera lunga, Freisa'],
  },
  {
    denominazioneVino: 'Mamertino di Milazzo o Mamertino DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Ansonica, Catarratto bianco comune, Catarratto bianco lucido'],
  },
  {
    denominazioneVino: 'Mamertino di Milazzo o Mamertino DOC bianco riserva',
    tipoVino: 'fermo',
    vitigni: ['Ansonica, Catarratto bianco comune, Catarratto bianco lucido'],
  },
  {
    denominazioneVino:
      'Mamertino di Milazzo o Mamertino DOC Calabrese o Nero d’Avola',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino:
      'Mamertino di Milazzo o Mamertino DOC Calabrese o Nero d’Avola riserva',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino:
      'Mamertino di Milazzo o Mamertino DOC Grillo-Ansonica (o Inzolia)',
    tipoVino: 'fermo',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Mamertino di Milazzo o Mamertino DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Nocera'],
  },
  {
    denominazioneVino: 'Mamertino di Milazzo o Mamertino DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Nocera'],
  },
  {
    denominazioneVino: 'Mandrolisai o Sardegna Mandrolisai DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Bovale, Cannonau, Monica'],
  },
  {
    denominazioneVino: 'Mandrolisai o Sardegna Mandrolisai DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Bovale, Cannonau, Monica'],
  },
  {
    denominazioneVino: 'Mandrolisai o Sardegna Mandrolisai DOC rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Bovale, Cannonau, Monica'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Alicante',
    tipoVino: 'fermo',
    vitigni: ['Alicante'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Ansonica',
    tipoVino: 'fermo',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Ansonica passito',
    tipoVino: 'passito',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Ansonica spumante',
    tipoVino: 'spumante',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Ansonica vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Vermentino'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC bianco passito',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Vermentino'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Trebbiano Toscano, Vermentino'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC bianco vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Trebbiano Toscano, Vermentino'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Cabernet',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Cabernet Franc'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Cabernet passito',
    tipoVino: 'passito',
    vitigni: ['Cabernet Sauvignon, Cabernet Franc'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Cabernet sauvignon passito',
    tipoVino: 'passito',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Canaiolo',
    tipoVino: 'fermo',
    vitigni: ['Canaiolo nero'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Chardonnay passito',
    tipoVino: 'passito',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Chardonnay vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Ciliegiolo',
    tipoVino: 'fermo',
    vitigni: ['Ciliegiolo'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Ciliegiolo passito',
    tipoVino: 'passito',
    vitigni: ['Ciliegiolo'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Ciliegiolo'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC rosso passito',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Sangiovese passito',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Sauvignon passito',
    tipoVino: 'passito',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Sauvignon vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Syrah',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Trebbiano',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Trebbiano vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Vermentino passito',
    tipoVino: 'passito',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Vermentino spumante',
    tipoVino: 'spumante',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Vermentino vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC vin santo',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Viognier',
    tipoVino: 'fermo',
    vitigni: ['Viognier'],
  },
  {
    denominazioneVino: 'Maremma Toscana DOC Viognier vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Viognier'],
  },
  {
    denominazioneVino: 'Marino Bellone DOC',
    tipoVino: 'fermo',
    vitigni: ['Bellone'],
  },
  {
    denominazioneVino: 'Marino Bombino DOC',
    tipoVino: 'fermo',
    vitigni: ['Bombino bianco'],
  },
  {
    denominazioneVino: 'Marino classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Marino classico passito DOC',
    tipoVino: 'passito',
    vitigni: ['Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Marino classico superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Marino classico vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Marino DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Marino frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Marino Greco DOC',
    tipoVino: 'fermo',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Marino Malvasia del Lazio DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia del Lazio'],
  },
  {
    denominazioneVino: 'Marino passito DOC',
    tipoVino: 'passito',
    vitigni: ['Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Marino spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Marino superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Marino Trebbiano verde DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Marino vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Marsala DOC ambra fine',
    tipoVino: 'liquoroso',
    vitigni: [
      'Ansonica, Catarratto bianco comune, Catarratto bianco lucido, Damaschino',
    ],
  },
  {
    denominazioneVino: 'Marsala DOC ambra superiore',
    tipoVino: 'liquoroso',
    vitigni: [
      'Ansonica, Catarratto bianco comune, Catarratto bianco lucido, Damaschino',
    ],
  },
  {
    denominazioneVino: 'Marsala DOC ambra superiore riserva',
    tipoVino: 'liquoroso',
    vitigni: [
      'Ansonica, Catarratto bianco comune, Catarratto bianco lucido, Damaschino',
    ],
  },
  {
    denominazioneVino: 'Marsala DOC ambra Vergine o Soleras',
    tipoVino: 'liquoroso',
    vitigni: [
      'Ansonica, Catarratto bianco comune, Catarratto bianco lucido, Damaschino',
    ],
  },
  {
    denominazioneVino: 'Marsala DOC ambra Vergine stravecchio o riserva',
    tipoVino: 'liquoroso',
    vitigni: [
      'Ansonica, Catarratto bianco comune, Catarratto bianco lucido, Damaschino',
    ],
  },
  {
    denominazioneVino: 'Marsala DOC oro fine',
    tipoVino: 'liquoroso',
    vitigni: [
      'Ansonica, Catarratto bianco comune, Catarratto bianco lucido, Damaschino',
    ],
  },
  {
    denominazioneVino: 'Marsala DOC oro superiore',
    tipoVino: 'liquoroso',
    vitigni: [
      'Ansonica, Catarratto bianco comune, Catarratto bianco lucido, Damaschino',
    ],
  },
  {
    denominazioneVino: 'Marsala DOC oro superiore riserva',
    tipoVino: 'liquoroso',
    vitigni: [
      'Ansonica, Catarratto bianco comune, Catarratto bianco lucido, Damaschino',
    ],
  },
  {
    denominazioneVino: 'Marsala DOC oro Vergine o Soleras',
    tipoVino: 'liquoroso',
    vitigni: [
      'Ansonica, Catarratto bianco comune, Catarratto bianco lucido, Damaschino',
    ],
  },
  {
    denominazioneVino: 'Marsala DOC oro Vergine stravecchio o riserva',
    tipoVino: 'liquoroso',
    vitigni: [
      'Ansonica, Catarratto bianco comune, Catarratto bianco lucido, Damaschino',
    ],
  },
  {
    denominazioneVino: 'Marsala DOC rubino fine',
    tipoVino: 'liquoroso',
    vitigni: ['Perricone, Calabrese, Nerello Mascalese'],
  },
  {
    denominazioneVino: 'Marsala DOC rubino superiore',
    tipoVino: 'liquoroso',
    vitigni: ['Perricone, Calabrese, Nerello Mascalese'],
  },
  {
    denominazioneVino: 'Marsala DOC rubino superiore riserva',
    tipoVino: 'liquoroso',
    vitigni: ['Perricone, Calabrese, Nerello Mascalese'],
  },
  {
    denominazioneVino: 'Marsala DOC rubino Vergine o Soleras',
    tipoVino: 'liquoroso',
    vitigni: ['Perricone, Calabrese, Nerello Mascalese'],
  },
  {
    denominazioneVino: 'Marsala DOC rubino Vergine stravecchio o riserva',
    tipoVino: 'liquoroso',
    vitigni: ['Perricone, Calabrese, Nerello Mascalese'],
  },
  {
    denominazioneVino: 'Martina o Martinafranca DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Verdeca, Bianco d’Alessano, Fiano, Bombino bianco, Malvasia bianca',
    ],
  },
  {
    denominazioneVino: 'Martina o Martinafranca DOC spumante',
    tipoVino: 'spumante',
    vitigni: [
      'Verdeca, Bianco d’Alessano, Fiano, Bombino bianco, Malvasia bianca',
    ],
  },
  {
    denominazioneVino: 'Matera DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca di Basilicata'],
  },
  {
    denominazioneVino: 'Matera DOC bianco passito',
    tipoVino: 'passito',
    vitigni: ['Malvasia bianca di Basilicata'],
  },
  {
    denominazioneVino: 'Matera DOC Greco',
    tipoVino: 'fermo',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Matera DOC Moro',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Primitivo, Merlot'],
  },
  {
    denominazioneVino: 'Matera DOC Moro riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Primitivo, Merlot'],
  },
  {
    denominazioneVino: 'Matera DOC Primitivo',
    tipoVino: 'fermo',
    vitigni: ['Primitivo'],
  },
  {
    denominazioneVino: 'Matera DOC Primitivo passito',
    tipoVino: 'passito',
    vitigni: ['Primitivo'],
  },
  {
    denominazioneVino: 'Matera DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Primitivo'],
  },
  {
    denominazioneVino: 'Matera DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Primitivo'],
  },
  {
    denominazioneVino: 'Matera DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Malvasia bianca di Basilicata'],
  },
  {
    denominazioneVino: 'Matera DOC spumante rosé',
    tipoVino: 'spumante',
    vitigni: ['Primitivo'],
  },
  {
    denominazioneVino: 'Matino DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro, Malvasia nera di Lecce, Sangiovese'],
  },
  {
    denominazioneVino: 'Matino DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro, Malvasia nera di Lecce, Sangiovese'],
  },
  {
    denominazioneVino: 'Melissa DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Greco Bianco, Trebbiano Toscano, Malvasia bianca'],
  },
  {
    denominazioneVino: 'Melissa DOC rosso',
    tipoVino: 'fermo',
    vitigni: [
      'Gaglioppo, Greco Nero, Greco Bianco, Trebbiano Toscano, Malvasia bianca',
    ],
  },
  {
    denominazioneVino: 'Melissa DOC rosso superiore',
    tipoVino: 'fermo',
    vitigni: [
      'Gaglioppo, Greco Nero, Greco Bianco, Trebbiano Toscano, Malvasia bianca',
    ],
  },
  {
    denominazioneVino: 'Menfi DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Ansonica, Chardonnay, Catarratto bianco lucido'],
  },
  {
    denominazioneVino: 'Menfi DOC Bonera',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Sangiovese, Cabernet Sauvignon, Syrah, Syrah'],
  },
  {
    denominazioneVino: 'Menfi DOC Bonera riserva',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Sangiovese, Cabernet Sauvignon, Syrah, Syrah'],
  },
  {
    denominazioneVino: 'Menfi DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Menfi DOC Catarratto bianco lucido',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco lucido'],
  },
  {
    denominazioneVino: 'Menfi DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Menfi DOC Feudo dei Fiori',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay, Ansonica'],
  },
  {
    denominazioneVino: 'Menfi DOC Grecanico',
    tipoVino: 'fermo',
    vitigni: ['Grecanico dorato'],
  },
  {
    denominazioneVino: 'Menfi DOC Inzolia o Ansonica',
    tipoVino: 'fermo',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Menfi DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Menfi DOC Nero d’Avola',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Menfi DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Sangiovese, Cabernet Sauvignon, Syrah, Syrah'],
  },
  {
    denominazioneVino: 'Menfi DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Sangiovese, Cabernet Sauvignon, Syrah, Syrah'],
  },
  {
    denominazioneVino: 'Menfi DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Menfi DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Menfi DOC Syrah',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Menfi DOC vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Chardonnay, Catarratto bianco lucido, Ansonica, Sauvignon'],
  },
  {
    denominazioneVino: 'Merlara Bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Merlara Bianco frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Merlara Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon, Carmènere'],
  },
  {
    denominazioneVino: 'Merlara Cabernet Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Merlara Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Merlara Malvasia DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia Istriana'],
  },
  {
    denominazioneVino: 'Merlara Marzemino frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Marzemino'],
  },
  {
    denominazioneVino: 'Merlara Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Merlara Novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Merlara Pinot bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Merlara Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Merlara Raboso DOC',
    tipoVino: 'fermo',
    vitigni: ['Raboso Piave, Raboso Veronese'],
  },
  {
    denominazioneVino: 'Merlara Refosco DOC',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino: 'Merlara Riesling DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling Italico, Riesling'],
  },
  {
    denominazioneVino: 'Merlara Rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Merlara Tai DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Merlot di Aprilia DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Merlot di Torgiano DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Modena DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Montù, Pignoletto, Trebbiano Romagnolo'],
  },
  {
    denominazioneVino: 'Modena DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Montù, Pignoletto, Trebbiano Romagnolo'],
  },
  {
    denominazioneVino: 'Modena DOC Lambrusco frizzante',
    tipoVino: 'frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Modena DOC Lambrusco novello frizzante',
    tipoVino: 'frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Modena DOC Lambrusco rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Modena DOC Lambrusco rosato spumante',
    tipoVino: 'spumante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Modena DOC Lambrusco spumante',
    tipoVino: 'spumante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Modena DOC Pignoletto frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Pignoletto'],
  },
  {
    denominazioneVino: 'Modena DOC Pignoletto spumante',
    tipoVino: 'spumante',
    vitigni: ['Pignoletto'],
  },
  {
    denominazioneVino: 'Modena DOC rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Modena DOC rosato spumante',
    tipoVino: 'spumante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Modena DOC rosso frizzante',
    tipoVino: 'frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Modena DOC rosso novello frizzante',
    tipoVino: 'frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Modena DOC rosso spumante',
    tipoVino: 'spumante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Aglianico',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Aglianico riserva',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC bianco spumante di qualità',
    tipoVino: 'spumante',
    vitigni: [
      'Chardonnay, Pinot bianco, Pinot grigio, Moscato bianco, Falanghina, Montepulciano, Fiano, Malvasia bianca lunga',
    ],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Chardonnay frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Chardonnay spumante',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Falanghina',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Falanghina passito',
    tipoVino: 'passito',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Falanghina spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Fiano',
    tipoVino: 'fermo',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Fiano frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Fiano spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Greco bianco',
    tipoVino: 'fermo',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Malvasia',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Malvasia frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Malvasia spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Merlot frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Merlot novello',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Moscato bianco',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Moscato bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Moscato bianco passito',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Molise o del Molise DOC Moscato bianco spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC novello',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Pinot bianco',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Pinot bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino:
      'Molise o del Molise DOC Pinot bianco spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Pinot grigio',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Pinot grigio frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino:
      'Molise o del Molise DOC Pinot grigio spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Pinot nero',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC rosato spumante di qualità',
    tipoVino: 'spumante',
    vitigni: [
      'Chardonnay, Pinot bianco, Pinot grigio, Moscato bianco, Falanghina, Montepulciano, Fiano, Malvasia bianca lunga',
    ],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC rosso spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Molise o del Molise DOC Trebbiano',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Monferrato DOC bianco',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Monferrato DOC Casalese',
    tipoVino: 'fermo',
    vitigni: ['Cortese'],
  },
  {
    denominazioneVino: 'Monferrato DOC Chiaretto o Ciaret',
    tipoVino: 'fermo',
    vitigni: [
      'Barbera, Bonarda, Cabernet Franc, Cabernet Sauvignon, Dolcetto, Freisa, Grignolino, Pinot nero, Nebbiolo',
    ],
  },
  {
    denominazioneVino: 'Monferrato DOC Dolcetto',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Monferrato DOC Freisa',
    tipoVino: 'fermo',
    vitigni: ['Freisa'],
  },
  {
    denominazioneVino: 'Monferrato DOC rosso',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Monica di Sardegna DOC',
    tipoVino: 'fermo',
    vitigni: ['Monica'],
  },
  {
    denominazioneVino: 'Monica di Sardegna DOC frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Monica'],
  },
  {
    denominazioneVino: 'Monica di Sardegna DOC superiore',
    tipoVino: 'fermo',
    vitigni: ['Monica'],
  },
  {
    denominazioneVino: 'Monreale DOC Ansonica o Inzolia',
    tipoVino: 'fermo',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Monreale DOC Ansonica o Inzolia superiore',
    tipoVino: 'fermo',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Monreale DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco comune, Catarratto bianco lucido, Ansonica'],
  },
  {
    denominazioneVino: 'Monreale DOC bianco superiore',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco comune, Catarratto bianco lucido, Ansonica'],
  },
  {
    denominazioneVino: 'Monreale DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Monreale DOC Cabernet sauvignon riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Monreale DOC Calabrese o Nero d’Avola',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Monreale DOC Calabrese o Nero d’Avola riserva',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Monreale DOC Catarratto',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco comune, Catarratto bianco lucido'],
  },
  {
    denominazioneVino: 'Monreale DOC Catarratto superiore',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco comune, Catarratto bianco lucido'],
  },
  {
    denominazioneVino: 'Monreale DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Monreale DOC Chardonnay superiore',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Monreale DOC Grillo',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Monreale DOC Grillo superiore',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Monreale DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Monreale DOC Merlot riserva',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Monreale DOC Novello',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Perricone'],
  },
  {
    denominazioneVino: 'Monreale DOC Perricone',
    tipoVino: 'fermo',
    vitigni: ['Perricone'],
  },
  {
    denominazioneVino: 'Monreale DOC Perricone riserva',
    tipoVino: 'fermo',
    vitigni: ['Perricone'],
  },
  {
    denominazioneVino: 'Monreale DOC Pinot bianco',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Monreale DOC Pinot bianco superiore',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Monreale DOC Pinot nero',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Monreale DOC Pinot nero riserva',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Monreale DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Nerello Mascalese, Perricone, Sangiovese'],
  },
  {
    denominazioneVino: 'Monreale DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Perricone'],
  },
  {
    denominazioneVino: 'Monreale DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Perricone'],
  },
  {
    denominazioneVino: 'Monreale DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Monreale DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Monreale DOC Syrah',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Monreale DOC Syrah riserva',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Monreale DOC vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Catarratto bianco comune, Catarratto bianco lucido, Ansonica'],
  },
  {
    denominazioneVino: 'Montecarlo DOC bianco',
    tipoVino: 'fermo',
    vitigni: [
      'Trebbiano Toscano, Sémillon, Pinot grigio, Pinot bianco, Vermentino, Sauvignon, Roussanne',
    ],
  },
  {
    denominazioneVino: 'Montecarlo DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Montecarlo DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Montecarlo DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Canaiolo nero, Merlot, Syrah'],
  },
  {
    denominazioneVino: 'Montecarlo DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Canaiolo nero, Merlot, Syrah'],
  },
  {
    denominazioneVino: 'Montecarlo DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Montecarlo DOC Syrah',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Montecarlo DOC Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Montecarlo DOC Vin Santo',
    tipoVino: 'passito',
    vitigni: [
      'Trebbiano Toscano, Sémillon, Pinot grigio, Pinot bianco, Vermentino, Sauvignon, Roussanne',
    ],
  },
  {
    denominazioneVino: 'Montecarlo DOC Vin Santo Occhio di Pernice',
    tipoVino: 'passito',
    vitigni: ['Sangiovese, Canaiolo nero, Merlot, Syrah'],
  },
  {
    denominazioneVino: 'Montecompatri Colonna DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia del Lazio, Trebbiano Toscano, Trebbiano giallo'],
  },
  {
    denominazioneVino: 'Montecompatri Colonna frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Malvasia del Lazio, Trebbiano Toscano, Trebbiano giallo'],
  },
  {
    denominazioneVino: 'Montecompatri Colonna superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia del Lazio, Trebbiano Toscano, Trebbiano giallo'],
  },
  {
    denominazioneVino: 'Montecucco DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Vermentino'],
  },
  {
    denominazioneVino: 'Montecucco DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Ciliegiolo'],
  },
  {
    denominazioneVino: 'Montecucco DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Montecucco DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Montecucco DOC Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Montecucco DOC Vin Santo',
    tipoVino: 'passito',
    vitigni: ['Malvasia bianca lunga, Grechetto, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Montecucco DOC Vin Santo Occhio di Pernice',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Montecucco Sangiovese DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Montecucco Sangiovese riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Montefalco DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Grechetto, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Montefalco DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Sagrantino'],
  },
  {
    denominazioneVino: 'Montefalco DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Sagrantino'],
  },
  {
    denominazioneVino: 'Montefalco Sagrantino DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sagrantino'],
  },
  {
    denominazioneVino: 'Montefalco Sagrantino passito DOCG',
    tipoVino: 'passito',
    vitigni: ['Sagrantino'],
  },
  {
    denominazioneVino: 'Montello e Colli Asolani Bianchetta DOC',
    tipoVino: 'fermo',
    vitigni: ['Bianchetta Trevigiana'],
  },
  {
    denominazioneVino: 'Montello e Colli Asolani Bianco DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Chardonnay, Manzoni bianco, Bianchetta Trevigiana, Bianchetta Trevigiana',
    ],
  },
  {
    denominazioneVino: 'Montello e Colli Asolani Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Cabernet Franc, Carmènere'],
  },
  {
    denominazioneVino: 'Montello e Colli Asolani Cabernet franc DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Montello e Colli Asolani Cabernet sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Montello e Colli Asolani Carmenère DOC',
    tipoVino: 'fermo',
    vitigni: ['Carmènere'],
  },
  {
    denominazioneVino: 'Montello e Colli Asolani Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Montello e Colli Asolani Chardonnay spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Montello e Colli Asolani Manzoni bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Manzoni bianco'],
  },
  {
    denominazioneVino: 'Montello e Colli Asolani Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Montello e Colli Asolani Pinot Bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Montello e Colli Asolani Pinot Bianco spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Montello e Colli Asolani Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Montello e Colli Asolani Recantina DOC',
    tipoVino: 'fermo',
    vitigni: ['Recantina'],
  },
  {
    denominazioneVino: 'Montello e Colli Asolani Rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Cabernet Franc, Merlot, Carmènere'],
  },
  {
    denominazioneVino: 'Montello e Colli Asolani Venegazzù DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Cabernet Franc, Merlot, Carmènere'],
  },
  {
    denominazioneVino: 'Montello e Colli Asolani Venegazzù superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Cabernet Franc, Merlot, Carmènere'],
  },
  {
    denominazioneVino: 'Montello rosso DOCG',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Cabernet Franc, Merlot, Carmènere'],
  },
  {
    denominazioneVino: 'Montello rosso superiore DOCG',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Cabernet Franc, Merlot, Carmènere'],
  },
  {
    denominazioneVino: 'Montepulciano d’Abruzzo Colline Teramane DOCG',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Montepulciano d’Abruzzo Colline Teramane riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Montepulciano d’Abruzzo DOC',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Montepulciano d’Abruzzo DOC Alto Tirino',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Montepulciano d’Abruzzo DOC Alto Tirino riserva',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Montepulciano d’Abruzzo DOC Casauria',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Montepulciano d’Abruzzo DOC Casauria riserva',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Montepulciano d’Abruzzo DOC riserva',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Montepulciano d’Abruzzo DOC Teate',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Montepulciano d’Abruzzo DOC Teate riserva',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Montepulciano d’Abruzzo DOC Terre dei Peligni',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Montepulciano d’Abruzzo DOC Terre dei Peligni riserva',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Montepulciano d’Abruzzo DOC Terre dei Vestini',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Montepulciano d’Abruzzo DOC Terre dei Vestini riserva',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Monteregio di Massa Marittima DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Vermentino'],
  },
  {
    denominazioneVino: 'Monteregio di Massa Marittima DOC Novello',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Monteregio di Massa Marittima DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Monteregio di Massa Marittima DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Monteregio di Massa Marittima DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Monteregio di Massa Marittima DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Monteregio di Massa Marittima DOC Sangiovese novello',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Monteregio di Massa Marittima DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Monteregio di Massa Marittima DOC Sangiovese rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Monteregio di Massa Marittima DOC Syrah',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Monteregio di Massa Marittima DOC Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Monteregio di Massa Marittima DOC Vin Santo',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Vermentino'],
  },
  {
    denominazioneVino:
      'Monteregio di Massa Marittima DOC Vin Santo Occhio di Pernice',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Monteregio di Massa Marittima DOC Vin Santo Occhio di Pernice riserva',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Monteregio di Massa Marittima DOC Vin Santo riserva',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Vermentino'],
  },
  {
    denominazioneVino: 'Monteregio di Massa Marittima DOC Viognier',
    tipoVino: 'fermo',
    vitigni: ['Viognier'],
  },
  {
    denominazioneVino: 'Montescudaio DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Montescudaio DOC Cabernet franc',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Montescudaio DOC Cabernet franc riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Montescudaio DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Montescudaio DOC Cabernet sauvignon riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Montescudaio DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Montescudaio DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Montescudaio DOC Merlot riserva',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Montescudaio DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Montescudaio DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Montescudaio DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Montescudaio DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Montescudaio DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Montescudaio DOC Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Montescudaio DOC Vin santo',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Monti Lessini Bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Monti Lessini Durello DOC',
    tipoVino: 'fermo',
    vitigni: ['Durella'],
  },
  {
    denominazioneVino: 'Monti Lessini Pinot nero DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Morellino di Scansano DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Morellino di Scansano riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Moscadello di Montalcino DOC frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Moscadello di Montalcino DOC tranquillo',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Moscadello di Montalcino DOC vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Moscato d’Asti Canelli DOCG',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Moscato d’Asti DOCG',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Moscato d’Asti Santa Vittoria d’Alba DOCG',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Moscato d’Asti Strevi DOCG',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Moscato d’Asti vendemmia tardiva DOCG',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Moscato d’Asti vendemmia tardiva Santa Vittoria d’Alba DOCG',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Moscato di Noto DOC',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Moscato di Noto DOC liquoroso',
    tipoVino: 'liquoroso',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Moscato di Noto DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Moscato di Noto passito DOC o Passito di Noto DOC',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Moscato di Pantelleria DOC',
    tipoVino: 'fermo',
    vitigni: ['Zibibbo'],
  },
  {
    denominazioneVino: 'Moscato di Sardegna DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Moscato di Sardegna DOC da uve stramature',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Moscato di Sardegna DOC passito',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Moscato di Sardegna DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Moscato di Sorso-Sennori DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Moscato di Sorso-Sennori DOC liquoroso',
    tipoVino: 'liquoroso',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Moscato di Sorso-Sennori DOC passito',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Moscato di Sorso-Sennori DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Moscato di Trani dolce naturaleDOC',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Moscato di Trani liquoroso DOC',
    tipoVino: 'liquoroso',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Nardò DOC rosato',
    tipoVino: 'fermo',
    vitigni: [
      'Negro Amaro, Malvasia nera di Brindisi, Malvasia nera di Lecce, Montepulciano',
    ],
  },
  {
    denominazioneVino: 'Nardò DOC rosso',
    tipoVino: 'fermo',
    vitigni: [
      'Negro Amaro, Malvasia nera di Brindisi, Malvasia nera di Lecce, Montepulciano',
    ],
  },
  {
    denominazioneVino: 'Nardò DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: [
      'Negro Amaro, Malvasia nera di Brindisi, Malvasia nera di Lecce, Montepulciano',
    ],
  },
  {
    denominazioneVino: 'Nasco di Cagliari DOC',
    tipoVino: 'fermo',
    vitigni: ['Nasco'],
  },
  {
    denominazioneVino: 'Nasco di Cagliari DOC liquoroso',
    tipoVino: 'liquoroso',
    vitigni: ['Nasco'],
  },
  {
    denominazioneVino: 'Nasco di Cagliari DOC liquoroso riserva',
    tipoVino: 'liquoroso',
    vitigni: ['Nasco'],
  },
  {
    denominazioneVino: 'Nebbiolo d’Alba DOC',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Nebbiolo d’Alba DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Nebbiolo d’Alba DOC spumante rosé',
    tipoVino: 'spumante',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Nebbiolo d’Alba DOC superiore',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Negroamaro di Terra d’Otranto rosato DOC',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Negroamaro di Terra d’Otranto rosato frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Negroamaro di Terra d’Otranto rosato spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Negroamaro di Terra d’Otranto rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Negroamaro di Terra d’Otranto rosso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Nettuno DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Bellone, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Nettuno DOC bianco Bellone',
    tipoVino: 'fermo',
    vitigni: ['Bellone'],
  },
  {
    denominazioneVino: 'Nettuno DOC bianco Bellone frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Bellone'],
  },
  {
    denominazioneVino: 'Nettuno DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Bellone, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Nettuno DOC novello',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Sangiovese'],
  },
  {
    denominazioneVino: 'Nettuno DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Nettuno DOC rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Sangiovese, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Nettuno DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Sangiovese'],
  },
  {
    denominazioneVino: 'Nizza DOCG',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Nizza Riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Noto DOC Nero d’Avola',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Noto DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Nuragus di Cagliari DOC',
    tipoVino: 'fermo',
    vitigni: ['Nuragus'],
  },
  {
    denominazioneVino: 'Nuragus di Cagliari DOC frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Nuragus'],
  },
  {
    denominazioneVino: 'Offida Passerina DOCG',
    tipoVino: 'fermo',
    vitigni: ['Passerina'],
  },
  {
    denominazioneVino: 'Offida Pecorino DOCG',
    tipoVino: 'fermo',
    vitigni: ['Pecorino'],
  },
  {
    denominazioneVino: 'Offida rosso DOCG',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Barbera DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Barbera frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Barbera riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling, Riesling Italico, Pinot nero'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Cabernet Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Chardonnay frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Chardonnay spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Cortese DOC',
    tipoVino: 'fermo',
    vitigni: ['Cortese'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Cortese frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Cortese'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Cortese spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Cortese'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Malvasia DOC',
    tipoVino: 'fermo',
    vitigni: ['Malvasia di Candia aromatica'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Malvasia frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Malvasia di Candia aromatica'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Malvasia spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Malvasia di Candia aromatica'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Metodo Classico DOCG',
    tipoVino: 'spumante',
    vitigni: ['Pinot nero, Chardonnay, Pinot grigio, Pinot bianco'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Metodo Classico millesimato DOCG',
    tipoVino: 'spumante',
    vitigni: ['Pinot nero, Chardonnay, Pinot grigio, Pinot bianco'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Metodo Classico pinot-nero DOCG',
    tipoVino: 'spumante',
    vitigni: ['Pinot nero, Chardonnay, Pinot grigio, Pinot bianco'],
  },
  {
    denominazioneVino:
      'Oltrepò Pavese Metodo Classico pinot-nero millesimato DOCG',
    tipoVino: 'spumante',
    vitigni: ['Pinot nero, Chardonnay, Pinot grigio, Pinot bianco'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Metodo Classico pinot-nero rosé DOCG',
    tipoVino: 'spumante',
    vitigni: ['Pinot nero, Chardonnay, Pinot grigio, Pinot bianco'],
  },
  {
    denominazioneVino:
      'Oltrepò Pavese Metodo Classico pinot-nero rosé millesimato DOCG',
    tipoVino: 'spumante',
    vitigni: ['Pinot nero, Chardonnay, Pinot grigio, Pinot bianco'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Metodo Classico rosé DOCG',
    tipoVino: 'spumante',
    vitigni: ['Pinot nero, Chardonnay, Pinot grigio, Pinot bianco'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Metodo Classico rosé millesimato DOCG',
    tipoVino: 'spumante',
    vitigni: ['Pinot nero, Chardonnay, Pinot grigio, Pinot bianco'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Moscato DOC',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco, Malvasia di Candia aromatica'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Moscato frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Moscato bianco, Malvasia di Candia aromatica'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Moscato liquoroso DOC',
    tipoVino: 'liquoroso',
    vitigni: ['Moscato bianco, Malvasia di Candia aromatica'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Moscato passito DOC',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco, Malvasia di Candia aromatica'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Moscato spumante dolce DOC',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco, Malvasia di Candia aromatica'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio, Pinot nero'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Pinot grigio frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Pinot grigio, Pinot nero'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Pinot nero (vinificato in Bianco) DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero, Chardonnay, Pinot grigio, Pinot bianco'],
  },
  {
    denominazioneVino:
      'Oltrepò Pavese Pinot nero (vinificato in Bianco) frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Pinot nero, Chardonnay, Pinot grigio, Pinot bianco'],
  },
  {
    denominazioneVino:
      'Oltrepò Pavese Pinot nero (vinificato in Bianco) spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Pinot nero, Chardonnay, Pinot grigio, Pinot bianco'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Pinot nero (vinificato in rosato) DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero, Chardonnay, Pinot grigio, Pinot bianco'],
  },
  {
    denominazioneVino:
      'Oltrepò Pavese Pinot nero (vinificato in rosato) frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Pinot nero, Chardonnay, Pinot grigio, Pinot bianco'],
  },
  {
    denominazioneVino:
      'Oltrepò Pavese Pinot nero (vinificato in rosato) spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Pinot nero, Chardonnay, Pinot grigio, Pinot bianco'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Riesling DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Riesling, Riesling Italico, Pinot nero, Pinot grigio, Pinot bianco',
    ],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Riesling frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: [
      'Riesling, Riesling Italico, Pinot nero, Pinot grigio, Pinot bianco',
    ],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Riesling riserva DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Riesling, Riesling Italico, Pinot nero, Pinot grigio, Pinot bianco',
    ],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Riesling spumante DOC',
    tipoVino: 'spumante',
    vitigni: [
      'Riesling, Riesling Italico, Pinot nero, Pinot grigio, Pinot bianco',
    ],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Riesling superiore DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Riesling, Riesling Italico, Pinot nero, Pinot grigio, Pinot bianco',
    ],
  },
  {
    denominazioneVino: 'Oltrepò Pavese rosato DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Croatina'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese rosato frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Barbera, Croatina'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Croatina'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese rosso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Croatina'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Oltrepò Pavese Sauvignon spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Orcia DOC',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Orcia DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Orcia DOC riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Orcia DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Orcia DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Orcia DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Orcia DOC Vinsanto o Vin Santo',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Orta Nova rosato DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Sangiovese, Uva di Troia, Montepulciano, Lambrusco Maestri, Trebbiano Toscano',
    ],
  },
  {
    denominazioneVino: 'Orta Nova rosso DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Sangiovese, Uva di Troia, Montepulciano, Lambrusco Maestri, Trebbiano Toscano',
    ],
  },
  {
    denominazioneVino: 'Ortona DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Abruzzese, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Ortona DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Ortrugo dei Colli Piacentini DOC',
    tipoVino: 'fermo',
    vitigni: ['Ortrugo'],
  },
  {
    denominazioneVino: 'Ortrugo dei Colli Piacentini DOC frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Ortrugo'],
  },
  {
    denominazioneVino: 'Ortrugo dei Colli Piacentini DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Ortrugo'],
  },
  {
    denominazioneVino: 'Orvieto classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Grechetto'],
  },
  {
    denominazioneVino: 'Orvieto DOC',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Grechetto'],
  },
  {
    denominazioneVino: 'Orvieto DOC classico muffa nobile',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Grechetto'],
  },
  {
    denominazioneVino: 'Orvieto DOC classico superiore',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Grechetto'],
  },
  {
    denominazioneVino: 'Orvieto DOC classico vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Trebbiano Toscano, Grechetto'],
  },
  {
    denominazioneVino: 'Orvieto DOC muffa nobile',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Grechetto'],
  },
  {
    denominazioneVino: 'Orvieto DOC superiore',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Grechetto'],
  },
  {
    denominazioneVino: 'Orvieto DOC vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Trebbiano Toscano, Grechetto'],
  },
  {
    denominazioneVino: 'Ostuni bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Impigno, Bianco d’Alessano, Verdeca'],
  },
  {
    denominazioneVino: 'Ostuni Ottavianello o Ottavianello di Ostuni DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Ottavianello, Negro Amaro, Malvasia nera di Brindisi, Notardomenico, Susumaniello',
    ],
  },
  {
    denominazioneVino: 'Pantelleria DOC Moscato spumante',
    tipoVino: 'spumante',
    vitigni: ['Zibibbo'],
  },
  {
    denominazioneVino: 'Pantelleria DOC Moscato dorato',
    tipoVino: 'fermo',
    vitigni: ['Zibibbo'],
  },
  {
    denominazioneVino: 'Pantelleria DOC Moscato liquoroso',
    tipoVino: 'liquoroso',
    vitigni: ['Zibibbo'],
  },
  {
    denominazioneVino: 'Pantelleria DOC passito liquoroso',
    tipoVino: 'spumante',
    vitigni: ['Zibibbo'],
  },
  {
    denominazioneVino: 'Pantelleria DOC Zibibbo bianco',
    tipoVino: 'fermo',
    vitigni: ['Zibibbo'],
  },
  {
    denominazioneVino: 'Pantelleria DOC Zibibbo bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Zibibbo'],
  },
  {
    denominazioneVino: 'Pantelleria DOC Zibibbo dolce',
    tipoVino: 'fermo',
    vitigni: ['Zibibbo'],
  },
  {
    denominazioneVino: 'Parrina DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Ansonica, Vermentino'],
  },
  {
    denominazioneVino: 'Parrina DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Parrina DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Parrina DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Parrina DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Parrina DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Parrina DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Parrina DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Parrina DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Parrina DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Parrina DOC Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Parrina DOC Vin Santo',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Ansonica, Vermentino'],
  },
  {
    denominazioneVino: 'Passito di Pantelleria DOC',
    tipoVino: 'fermo',
    vitigni: ['Zibibbo'],
  },
  {
    denominazioneVino: 'Penisola Sorrentina DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Falanghina, Biancolella, Greco'],
  },
  {
    denominazioneVino: 'Penisola Sorrentina DOC bianco Sorrento',
    tipoVino: 'fermo',
    vitigni: ['Falanghina, Biancolella, Greco'],
  },
  {
    denominazioneVino: 'Penisola Sorrentina DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Piedirosso, Sciascinoso, Aglianico'],
  },
  {
    denominazioneVino: 'Penisola Sorrentina DOC rosso frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Piedirosso, Sciascinoso, Aglianico'],
  },
  {
    denominazioneVino: 'Penisola Sorrentina DOC rosso frizzante Gragnano',
    tipoVino: 'frizzante',
    vitigni: ['Piedirosso, Sciascinoso, Aglianico'],
  },
  {
    denominazioneVino: 'Penisola Sorrentina DOC rosso frizzante Lettere',
    tipoVino: 'frizzante',
    vitigni: ['Piedirosso, Sciascinoso, Aglianico'],
  },
  {
    denominazioneVino: 'Penisola Sorrentina DOC rosso Sorrento',
    tipoVino: 'fermo',
    vitigni: ['Piedirosso, Sciascinoso, Aglianico'],
  },
  {
    denominazioneVino: 'Pentro d’Isernia o Pentro DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Bombino bianco'],
  },
  {
    denominazioneVino: 'Pentro d’Isernia o Pentro DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano, Tintilia'],
  },
  {
    denominazioneVino: 'Pentro d’Isernia o Pentro DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano, Tintilia'],
  },
  {
    denominazioneVino: 'Pentro d’Isernia o Pentro DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano, Tintilia'],
  },
  {
    denominazioneVino: 'Pergola DOC Aleatico',
    tipoVino: 'fermo',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Pergola DOC Aleatico passito',
    tipoVino: 'passito',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Pergola DOC Aleatico riserva',
    tipoVino: 'fermo',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Pergola DOC Aleatico spumante',
    tipoVino: 'spumante',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Pergola DOC Aleatico superiore',
    tipoVino: 'fermo',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Pergola DOC rosato o rosè',
    tipoVino: 'fermo',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Pergola DOC rosato o rosè frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Pergola DOC rosato o rosè spumante',
    tipoVino: 'spumante',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Pergola DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Pergola DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Pergola DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Pergola DOC rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Piave Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Piave Cabernet riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Piave Carmenère DOC',
    tipoVino: 'fermo',
    vitigni: ['Carmènere'],
  },
  {
    denominazioneVino: 'Piave Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Piave Malanotte DOCG',
    tipoVino: 'fermo',
    vitigni: ['Raboso Piave, Raboso Veronese'],
  },
  {
    denominazioneVino: 'Piave Manzoni bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Manzoni bianco'],
  },
  {
    denominazioneVino: 'Piave Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Piave Merlot riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Piave Raboso DOC',
    tipoVino: 'fermo',
    vitigni: ['Raboso Piave'],
  },
  {
    denominazioneVino: 'Piave Raboso passito DOC',
    tipoVino: 'fermo',
    vitigni: ['Raboso Piave'],
  },
  {
    denominazioneVino: 'Piave Rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Piave Rosso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Piave Tai DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Piave Verduzzo DOC',
    tipoVino: 'fermo',
    vitigni: ['Verduzzo Friulano, Verduzzo Trevigiano'],
  },
  {
    denominazioneVino: 'Piave Verduzzo passito DOC',
    tipoVino: 'fermo',
    vitigni: ['Verduzzo Friulano, Verduzzo Trevigiano'],
  },
  {
    denominazioneVino: 'Piemonte DOC Albarossa',
    tipoVino: 'fermo',
    vitigni: ['Albarossa'],
  },
  {
    denominazioneVino: 'Piemonte DOC Barbera',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Piemonte DOC Barbera frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Piemonte DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Cortese, Chardonnay, Favorita, Erbaluce'],
  },
  {
    denominazioneVino: 'Piemonte DOC bianco da due vitigni',
    tipoVino: 'fermo',
    vitigni: ['Cortese, Chardonnay, Sauvignon'],
  },
  {
    denominazioneVino: 'Piemonte DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Cortese, Chardonnay, Favorita, Erbaluce'],
  },
  {
    denominazioneVino: 'Piemonte DOC Bonarda',
    tipoVino: 'fermo',
    vitigni: ['Bonarda'],
  },
  {
    denominazioneVino: 'Piemonte DOC Bonarda frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Bonarda'],
  },
  {
    denominazioneVino: 'Piemonte DOC Brachetto',
    tipoVino: 'fermo',
    vitigni: ['Brachetto'],
  },
  {
    denominazioneVino: 'Piemonte DOC brachetto passito',
    tipoVino: 'passito',
    vitigni: ['Brachetto'],
  },
  {
    denominazioneVino: 'Piemonte DOC Brachetto spumante',
    tipoVino: 'spumante',
    vitigni: ['Brachetto'],
  },
  {
    denominazioneVino: 'Piemonte DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Piemonte DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Piemonte DOC Chardonnay frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Piemonte DOC Chardonnay spumante',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Piemonte DOC Chardonnay-Pinot spumante',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot bianco, Pinot grigio, Pinot nero'],
  },
  {
    denominazioneVino: 'Piemonte DOC Cortese',
    tipoVino: 'fermo',
    vitigni: ['Cortese'],
  },
  {
    denominazioneVino: 'Piemonte DOC Cortese frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Cortese'],
  },
  {
    denominazioneVino: 'Piemonte DOC Cortese spumante',
    tipoVino: 'spumante',
    vitigni: ['Cortese'],
  },
  {
    denominazioneVino: 'Piemonte DOC Dolcetto',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Piemonte DOC Dolcetto frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Piemonte DOC Freisa',
    tipoVino: 'fermo',
    vitigni: ['Freisa'],
  },
  {
    denominazioneVino: 'Piemonte DOC Grignolino',
    tipoVino: 'fermo',
    vitigni: ['Grignolino'],
  },
  {
    denominazioneVino: 'Piemonte DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Piemonte DOC Moscato',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Piemonte DOC moscato passito',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Piemonte DOC Pinot bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Piemonte DOC Pinot grigio spumante',
    tipoVino: 'spumante',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Piemonte DOC Pinot nero',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Piemonte DOC Pinot nero spumante',
    tipoVino: 'spumante',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Piemonte DOC Pinot spumante',
    tipoVino: 'spumante',
    vitigni: ['Pinot bianco, Pinot grigio, Pinot nero'],
  },
  {
    denominazioneVino: 'Piemonte DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Nebbiolo, Dolcetto, Freisa, Croatina'],
  },
  {
    denominazioneVino: 'Piemonte DOC rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Barbera, Nebbiolo, Dolcetto, Freisa, Croatina'],
  },
  {
    denominazioneVino: 'Piemonte DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Nebbiolo, Dolcetto, Freisa, Croatina'],
  },
  {
    denominazioneVino: 'Piemonte DOC rosso da due vitigni',
    tipoVino: 'fermo',
    vitigni: [
      'Barbera, Dolcetto, Freisa, Bonarda, Cabernet Sauvignon, Merlot, Syrah, Pinot nero',
    ],
  },
  {
    denominazioneVino: 'Piemonte DOC rosso frizzante',
    tipoVino: 'spumante',
    vitigni: ['Barbera, Nebbiolo, Dolcetto, Freisa, Croatina'],
  },
  {
    denominazioneVino: 'Piemonte DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Piemonte DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot bianco, Pinot grigio, Pinot nero'],
  },
  {
    denominazioneVino: 'Piemonte DOC Syrah',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Pinerolese DOC Barbera',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Pinerolese DOC Bonarda',
    tipoVino: 'fermo',
    vitigni: ['Bonarda'],
  },
  {
    denominazioneVino: 'Pinerolese DOC Dolcetto',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Pinerolese DOC Doux d’Henry',
    tipoVino: 'fermo',
    vitigni: ['Doux d’Henry'],
  },
  {
    denominazioneVino: 'Pinerolese DOC Freisa',
    tipoVino: 'fermo',
    vitigni: ['Freisa'],
  },
  {
    denominazioneVino: 'Pinerolese DOC Ramie',
    tipoVino: 'fermo',
    vitigni: ['Avanà, Avarengo, Neretto di Bairo'],
  },
  {
    denominazioneVino: 'Pinerolese DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Bonarda, Nebbiolo, Neretto di Bairo'],
  },
  {
    denominazioneVino: 'Pinerolese DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Bonarda, Nebbiolo, Neretto di Bairo'],
  },
  {
    denominazioneVino: 'Pinot grigio delle Venezie DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Pinot grigio delle Venezie frizzante DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Pinot grigio delle Venezie spumante DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Pinot grigio di Torgiano DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Pinot nero dell’Oltrepò Pavese DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Pinot nero dell’Oltrepò Pavese riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Pinot nero di Torgiano DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Pomino DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco, Pinot grigio, Chardonnay'],
  },
  {
    denominazioneVino: 'Pomino DOC bianco riserva',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco, Pinot grigio, Chardonnay'],
  },
  {
    denominazioneVino: 'Pomino DOC bianco vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Pinot bianco, Pinot grigio, Chardonnay'],
  },
  {
    denominazioneVino: 'Pomino DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Pomino DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Pomino DOC Pinot nero',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Pomino DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Pinot nero, Merlot'],
  },
  {
    denominazioneVino: 'Pomino DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Pinot nero, Merlot'],
  },
  {
    denominazioneVino: 'Pomino DOC rosso vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Sangiovese, Pinot nero, Merlot'],
  },
  {
    denominazioneVino: 'Pomino DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Pomino DOC spumante bianco',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot bianco, Pinot nero'],
  },
  {
    denominazioneVino: 'Pomino DOC spumante bianco riserva',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot bianco, Pinot nero'],
  },
  {
    denominazioneVino: 'Pomino DOC spumante rosato',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot bianco, Pinot nero'],
  },
  {
    denominazioneVino: 'Pomino DOC spumante rosato riserva',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot bianco, Pinot nero'],
  },
  {
    denominazioneVino: 'Pomino DOC Vin Santo',
    tipoVino: 'passito',
    vitigni: ['Pinot bianco, Pinot grigio, Chardonnay, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Pomino DOC Vin Santo Occhio di Pernice',
    tipoVino: 'passito',
    vitigni: ['Sangiovese, Pinot nero, Merlot'],
  },
  {
    denominazioneVino: 'Pornassio o Ormeasco di Pornassio DOC passito',
    tipoVino: 'passito',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino:
      'Pornassio o Ormeasco di Pornassio DOC passito liquoroso',
    tipoVino: 'liquoroso',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Pornassio o Ormeasco di Pornassio DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Pornassio o Ormeasco di Pornassio DOC rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Pornassio o Ormeasco di Pornassio DOC Sciactrà',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto'],
  },
  {
    denominazioneVino: 'Primitivo di Manduria DOC',
    tipoVino: 'fermo',
    vitigni: ['Primitivo'],
  },
  {
    denominazioneVino: 'Primitivo di Manduria dolce naturale DOCG',
    tipoVino: 'fermo',
    vitigni: ['Primitivo'],
  },
  {
    denominazioneVino: 'Primitivo di Manduria riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Primitivo'],
  },
  {
    denominazioneVino: 'Prosecco DOC',
    tipoVino: 'fermo',
    vitigni: ['Glera'],
  },
  {
    denominazioneVino: 'Prosecco frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Glera'],
  },
  {
    denominazioneVino: 'Prosecco rosé DOC',
    tipoVino: 'spumante',
    vitigni: ['Glera, Pinot nero'],
  },
  {
    denominazioneVino: 'Prosecco spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Glera'],
  },
  {
    denominazioneVino: 'Ramandolo DOCG',
    tipoVino: 'passito',
    vitigni: ['Verduzzo Friulano'],
  },
  {
    denominazioneVino: 'Recioto della Valpolicella Classico DOCG',
    tipoVino: 'passito',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Recioto della Valpolicella DOCG',
    tipoVino: 'passito',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Recioto della Valpolicella spumante Classico DOCG',
    tipoVino: 'spumante',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Recioto della Valpolicella spumante DOCG',
    tipoVino: 'spumante',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Recioto della Valpolicella spumante Valpantena DOCG',
    tipoVino: 'spumante',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Recioto della Valpolicella Valpantena DOCG',
    tipoVino: 'passito',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Recioto di Gambellara classico DOCG',
    tipoVino: 'fermo',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Recioto di Gambellara spumante DOCG',
    tipoVino: 'spumante',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Recioto di Soave classico DOCG',
    tipoVino: 'fermo',
    vitigni: ['Garganega, Trebbiano di Soave'],
  },
  {
    denominazioneVino: 'Recioto di Soave DOCG',
    tipoVino: 'fermo',
    vitigni: ['Garganega, Trebbiano di Soave'],
  },
  {
    denominazioneVino: 'Recioto di Soave spumante classico DOCG',
    tipoVino: 'spumante',
    vitigni: ['Garganega, Trebbiano di Soave'],
  },
  {
    denominazioneVino: 'Recioto di Soave spumante DOCG',
    tipoVino: 'spumante',
    vitigni: ['Garganega, Trebbiano di Soave'],
  },
  {
    denominazioneVino: 'Reggiano DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Reggiano DOC Lambrusco',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Reggiano DOC Lambrusco frizzante',
    tipoVino: 'frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Reggiano DOC Lambrusco novello',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Reggiano DOC Lambrusco novello frizzante',
    tipoVino: 'frizzante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Reggiano DOC Lambrusco Salamino',
    tipoVino: 'fermo',
    vitigni: ['Lambrusco Salamino'],
  },
  {
    denominazioneVino: 'Reggiano DOC Lambrusco Salamino frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Lambrusco Salamino'],
  },
  {
    denominazioneVino: 'Reggiano DOC Lambrusco spumante',
    tipoVino: 'spumante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Reggiano DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Ancellotta'],
  },
  {
    denominazioneVino: 'Reggiano DOC rosso frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Ancellotta'],
  },
  {
    denominazioneVino: 'Reggiano DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Ancellotta'],
  },
  {
    denominazioneVino: 'Reno DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Albana, Trebbiano Romagnolo'],
  },
  {
    denominazioneVino: 'Reno DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Albana, Trebbiano Romagnolo'],
  },
  {
    denominazioneVino: 'Reno DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Albana, Trebbiano Romagnolo'],
  },
  {
    denominazioneVino: 'Reno DOC Montuni',
    tipoVino: 'fermo',
    vitigni: ['Montù'],
  },
  {
    denominazioneVino: 'Reno DOC Montuni frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Montù'],
  },
  {
    denominazioneVino: 'Reno DOC Montuni spumante',
    tipoVino: 'spumante',
    vitigni: ['Montù'],
  },
  {
    denominazioneVino: 'Reno DOC Pignoletto',
    tipoVino: 'fermo',
    vitigni: ['Pignoletto'],
  },
  {
    denominazioneVino: 'Reno DOC Pignoletto frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Pignoletto'],
  },
  {
    denominazioneVino: 'Reno DOC Pignoletto spumante',
    tipoVino: 'spumante',
    vitigni: ['Pignoletto'],
  },
  {
    denominazioneVino: 'Riesi DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Ansonica, Chardonnay'],
  },
  {
    denominazioneVino: 'Riesi DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Riesi DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Riesi DOC Isolia',
    tipoVino: 'fermo',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Riesi DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Riesi DOC Nero d’Avola',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Riesi DOC novello',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Riesi DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Cabernet Sauvignon, Nerello Mascalese'],
  },
  {
    denominazioneVino: 'Riesi DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Riesi DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Ansonica, Chardonnay'],
  },
  {
    denominazioneVino: 'Riesi DOC superiore',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Riesi DOC superiore riserva',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Riesi DOC Syrah',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Riesi DOC vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Ansonica, Chardonnay'],
  },
  {
    denominazioneVino: 'Riesling Italico di Torgiano DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling Italico'],
  },
  {
    denominazioneVino: 'Riviera del Brenta Bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Riviera del Brenta Bianco frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Riviera del Brenta Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon, Carmènere'],
  },
  {
    denominazioneVino: 'Riviera del Brenta Cabernet DOC riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon, Carmènere'],
  },
  {
    denominazioneVino: 'Riviera del Brenta Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Riviera del Brenta Chardonnay frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Riviera del Brenta Chardonnay spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Riviera del Brenta Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Riviera del Brenta Novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Riviera del Brenta Pinot bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Riviera del Brenta Pinot bianco frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Riviera del Brenta Pinot bianco spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Riviera del Brenta Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Riviera del Brenta Raboso DOC',
    tipoVino: 'fermo',
    vitigni: ['Raboso Piave, Raboso Veronese'],
  },
  {
    denominazioneVino: 'Riviera del Brenta Raboso DOC riserva',
    tipoVino: 'fermo',
    vitigni: ['Raboso Piave, Raboso Veronese'],
  },
  {
    denominazioneVino: 'Riviera del Brenta Refosco DOC',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino: 'Riviera del Brenta Refosco DOC riserva',
    tipoVino: 'fermo',
    vitigni: ['Refosco dal peduncolo rosso'],
  },
  {
    denominazioneVino: 'Riviera del Brenta Rosato DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Riviera del Brenta Rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Riviera del Brenta Spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Riviera del Brenta Tai DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'Riviera del Garda Bresciano bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling Italico, Riesling'],
  },
  {
    denominazioneVino: 'Riviera del Garda Bresciano chiaretto DOC',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Marzemino, Barbera'],
  },
  {
    denominazioneVino: 'Riviera del Garda Bresciano Groppello DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Riviera del Garda Bresciano rosé o rosato DOC',
    tipoVino: 'spumante',
    vitigni: ['Sangiovese, Marzemino, Barbera'],
  },
  {
    denominazioneVino: 'Riviera del Garda Bresciano rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Marzemino, Barbera'],
  },
  {
    denominazioneVino: 'Riviera del Garda Classico bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling Italico, Riesling'],
  },
  {
    denominazioneVino: 'Riviera del Garda Classico Chiaretto DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Groppello di Mocasina, Groppello di Revò, Groppello di Santo Stefano, Barbera, Sangiovese, Marzemino',
    ],
  },
  {
    denominazioneVino: 'Riviera del Garda Classico Groppello DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Groppello di Mocasina, Groppello di Revò, Groppello di Santo Stefano',
    ],
  },
  {
    denominazioneVino: 'Riviera del Garda Classico rosso DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Groppello di Mocasina, Groppello di Revò, Groppello di Santo Stefano, Sangiovese, Marzemino, Barbera',
    ],
  },
  {
    denominazioneVino: 'Riviera del Garda Classico rosso superiore DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Groppello di Mocasina, Groppello di Revò, Groppello di Santo Stefano, Sangiovese, Marzemino, Barbera',
    ],
  },
  {
    denominazioneVino: 'Riviera del Garda Classico spumante rosé DOC',
    tipoVino: 'spumante',
    vitigni: [
      'Groppello di Mocasina, Groppello di Revò, Groppello di Santo Stefano, Sangiovese, Marzemino, Barbera',
    ],
  },
  {
    denominazioneVino: 'Riviera Ligure di Ponente DOC Albenganese Pigato',
    tipoVino: 'fermo',
    vitigni: ['Pigato'],
  },
  {
    denominazioneVino: 'Riviera Ligure di Ponente DOC Albenganese Rossese',
    tipoVino: 'fermo',
    vitigni: ['Rossese'],
  },
  {
    denominazioneVino: 'Riviera Ligure di Ponente DOC Albenganese Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Riviera Ligure di Ponente DOC Finalese Pigato',
    tipoVino: 'fermo',
    vitigni: ['Pigato'],
  },
  {
    denominazioneVino: 'Riviera Ligure di Ponente DOC Finalese Rossese',
    tipoVino: 'fermo',
    vitigni: ['Rossese'],
  },
  {
    denominazioneVino: 'Riviera Ligure di Ponente DOC Finalese Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Riviera Ligure di Ponente DOC Granaccia (Alicante)',
    tipoVino: 'fermo',
    vitigni: ['Alicante'],
  },
  {
    denominazioneVino:
      'Riviera Ligure di Ponente DOC Granaccia (Alicante) passito',
    tipoVino: 'passito',
    vitigni: ['Alicante'],
  },
  {
    denominazioneVino:
      'Riviera Ligure di Ponente DOC Granaccia (Alicante) superiore',
    tipoVino: 'fermo',
    vitigni: ['Alicante'],
  },
  {
    denominazioneVino: 'Riviera Ligure di Ponente DOC Moscato',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Riviera Ligure di Ponente DOC Moscato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Riviera Ligure di Ponente DOC Moscato passito',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Riviera Ligure di Ponente DOC Moscato vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Riviera Ligure di Ponente DOC Pigato',
    tipoVino: 'fermo',
    vitigni: ['Pigato'],
  },
  {
    denominazioneVino: 'Riviera Ligure di Ponente DOC Pigato passito',
    tipoVino: 'passito',
    vitigni: ['Pigato'],
  },
  {
    denominazioneVino: 'Riviera Ligure di Ponente DOC Pigato superiore',
    tipoVino: 'fermo',
    vitigni: ['Pigato'],
  },
  {
    denominazioneVino: 'Riviera Ligure di Ponente DOC Quiliano Granaccia',
    tipoVino: 'fermo',
    vitigni: ['Alicante'],
  },
  {
    denominazioneVino: 'Riviera Ligure di Ponente DOC Riviera dei Fiori Pigato',
    tipoVino: 'fermo',
    vitigni: ['Pigato'],
  },
  {
    denominazioneVino:
      'Riviera Ligure di Ponente DOC Riviera dei Fiori Rossese',
    tipoVino: 'fermo',
    vitigni: ['Rossese'],
  },
  {
    denominazioneVino:
      'Riviera Ligure di Ponente DOC Riviera dei Fiori Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Riviera Ligure di Ponente DOC Rossese',
    tipoVino: 'fermo',
    vitigni: ['Rossese'],
  },
  {
    denominazioneVino: 'Riviera Ligure di Ponente DOC Rossese passito',
    tipoVino: 'passito',
    vitigni: ['Rossese'],
  },
  {
    denominazioneVino: 'Riviera Ligure di Ponente DOC Taggia Moscatello',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Riviera Ligure di Ponente DOC Taggia Moscatello frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Riviera Ligure di Ponente DOC Taggia Moscatello passito',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Riviera Ligure di Ponente DOC Taggia Moscatello vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Riviera Ligure di Ponente DOC Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Riviera Ligure di Ponente DOC Vermentino passito',
    tipoVino: 'passito',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Riviera Ligure di Ponente DOC Vermentino superiore',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Roero Arneis DOCG',
    tipoVino: 'fermo',
    vitigni: ['Arneis'],
  },
  {
    denominazioneVino: 'Roero Arneis spumante DOCG',
    tipoVino: 'spumante',
    vitigni: ['Arneis'],
  },
  {
    denominazioneVino: 'Roero DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Roero riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Roma DOC Bellone',
    tipoVino: 'fermo',
    vitigni: ['Bellone'],
  },
  {
    denominazioneVino: 'Roma DOC Bellone classico',
    tipoVino: 'fermo',
    vitigni: ['Bellone'],
  },
  {
    denominazioneVino: 'Roma DOC bianco',
    tipoVino: 'fermo',
    vitigni: [
      'Malvasia del Lazio, Bellone, Bombino bianco, Greco, Trebbiano giallo',
    ],
  },
  {
    denominazioneVino: 'Roma DOC bianco classico',
    tipoVino: 'fermo',
    vitigni: [
      'Malvasia del Lazio, Bellone, Bombino bianco, Greco, Trebbiano giallo',
    ],
  },
  {
    denominazioneVino: 'Roma DOC Malvasia puntinata',
    tipoVino: 'fermo',
    vitigni: ['Malvasia del Lazio'],
  },
  {
    denominazioneVino: 'Roma DOC Malvasia puntinata classico',
    tipoVino: 'fermo',
    vitigni: ['Malvasia del Lazio'],
  },
  {
    denominazioneVino: 'Roma DOC Romanella spumante',
    tipoVino: 'spumante',
    vitigni: [
      'Malvasia del Lazio, Bellone, Bombino bianco, Greco, Trebbiano giallo',
    ],
  },
  {
    denominazioneVino: 'Roma DOC rosato',
    tipoVino: 'fermo',
    vitigni: [
      'Montepulciano, Cesanese comune, Cesanese di Affile, Sangiovese, Cabernet Sauvignon, Cabernet Franc, Syrah',
    ],
  },
  {
    denominazioneVino: 'Roma DOC rosato classico',
    tipoVino: 'fermo',
    vitigni: [
      'Montepulciano, Cesanese comune, Cesanese di Affile, Sangiovese, Cabernet Sauvignon, Cabernet Franc, Syrah',
    ],
  },
  {
    denominazioneVino: 'Roma DOC rosso',
    tipoVino: 'fermo',
    vitigni: [
      'Montepulciano, Cesanese comune, Cesanese di Affile, Sangiovese, Cabernet Sauvignon, Cabernet Franc, Syrah',
    ],
  },
  {
    denominazioneVino: 'Roma DOC rosso classico',
    tipoVino: 'fermo',
    vitigni: [
      'Montepulciano, Cesanese comune, Cesanese di Affile, Sangiovese, Cabernet Sauvignon, Cabernet Franc, Syrah',
    ],
  },
  {
    denominazioneVino: 'Roma DOC rosso classico riserva',
    tipoVino: 'fermo',
    vitigni: [
      'Montepulciano, Cesanese comune, Cesanese di Affile, Sangiovese, Cabernet Sauvignon, Cabernet Franc, Syrah',
    ],
  },
  {
    denominazioneVino: 'Roma DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: [
      'Montepulciano, Cesanese comune, Cesanese di Affile, Sangiovese, Cabernet Sauvignon, Cabernet Franc, Syrah',
    ],
  },
  {
    denominazioneVino: 'Romagna Albana amabile DOCG',
    tipoVino: 'fermo',
    vitigni: ['Albana'],
  },
  {
    denominazioneVino: 'Romagna Albana dolce DOCG',
    tipoVino: 'fermo',
    vitigni: ['Albana'],
  },
  {
    denominazioneVino: 'Romagna Albana passito DOCG',
    tipoVino: 'fermo',
    vitigni: ['Albana'],
  },
  {
    denominazioneVino: 'Romagna Albana passito riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Albana'],
  },
  {
    denominazioneVino: 'Romagna Albana secco DOCG',
    tipoVino: 'fermo',
    vitigni: ['Albana'],
  },
  {
    denominazioneVino: 'Romagna DOC Albana spumante',
    tipoVino: 'spumante',
    vitigni: ['Albana'],
  },
  {
    denominazioneVino: 'Romagna DOC Cagnina',
    tipoVino: 'fermo',
    vitigni: ['Terrano'],
  },
  {
    denominazioneVino: 'Romagna DOC Pagadebit',
    tipoVino: 'fermo',
    vitigni: ['Bombino bianco'],
  },
  {
    denominazioneVino: 'Romagna DOC Pagadebit amabile',
    tipoVino: 'fermo',
    vitigni: ['Bombino bianco'],
  },
  {
    denominazioneVino: 'Romagna DOC Pagadebit amabile frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Bombino bianco'],
  },
  {
    denominazioneVino: 'Romagna DOC Pagadebit Bertinoro amabile',
    tipoVino: 'fermo',
    vitigni: ['Bombino bianco'],
  },
  {
    denominazioneVino: 'Romagna DOC Pagadebit Bertinoro amabile frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Bombino bianco'],
  },
  {
    denominazioneVino: 'Romagna DOC Pagadebit Bertinoro secco',
    tipoVino: 'fermo',
    vitigni: ['Bombino bianco'],
  },
  {
    denominazioneVino: 'Romagna DOC Pagadebit Bertinoro secco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Bombino bianco'],
  },
  {
    denominazioneVino: 'Romagna DOC Pagadebit frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Bombino bianco'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese Bertinoro riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese Brisighella',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese Brisighella riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese Castrocaro-Terra del Sole',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Romagna DOC Sangiovese Castrocaro-Terra del Sole riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese Cesena',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese Cesena riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese Longiano',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese Longiano riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese Marzeno',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese Marzeno riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese Meldola',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese Meldola riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese Modigliana',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese Modigliana riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese novello',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese Oriolo',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese Oriolo riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese Predappio',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese Predappio riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese San Vicinio',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese San Vicinio riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese superiore',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Sangiovese superiore riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Romagna DOC Trebbiano',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Romagnolo'],
  },
  {
    denominazioneVino: 'Romagna DOC Trebbiano frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Trebbiano Romagnolo'],
  },
  {
    denominazioneVino: 'Romagna DOC Trebbiano spumante',
    tipoVino: 'spumante',
    vitigni: ['Trebbiano Romagnolo'],
  },
  {
    denominazioneVino: 'Rosato di Aprilia DOC',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Cabernet Sauvignon, Merlot'],
  },
  {
    denominazioneVino: 'Rosato di Carmignano DOC',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Canaiolo nero, Cabernet Franc, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Rosato di Torgiano DOC',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Rosazzo DOCG',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano, Sauvignon, Ribolla gialla'],
  },
  {
    denominazioneVino: 'Rossese di Dolceacqua o Dolceacqua DOC',
    tipoVino: 'fermo',
    vitigni: ['Rossese'],
  },
  {
    denominazioneVino: 'Rossese di Dolceacqua o Dolceacqua DOC superiore',
    tipoVino: 'fermo',
    vitigni: ['Rossese'],
  },
  {
    denominazioneVino: 'Rosso Conero DOC',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Rosso della Val di Cornia DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Cabernet Sauvignon, Merlot'],
  },
  {
    denominazioneVino: 'Rosso della Val di Cornia riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Cabernet Sauvignon, Merlot'],
  },
  {
    denominazioneVino: 'Rosso di Aprilia DOC',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Cabernet Sauvignon, Merlot'],
  },
  {
    denominazioneVino: 'Rosso di Cerignola DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Uva di Troia, Negro Amaro, Sangiovese, Barbera, Montepulciano, Malbech, Trebbiano Toscano',
    ],
  },
  {
    denominazioneVino: 'Rosso di Cerignola riserva DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Uva di Troia, Negro Amaro, Sangiovese, Barbera, Montepulciano, Malbech, Trebbiano Toscano',
    ],
  },
  {
    denominazioneVino: 'Rosso di Montalcino DOC',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Rosso di Montepulciano DOC',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Rosso di Torgiano DOC',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Rosso Orvietano o Orvietano rosso DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Aleatico, Cabernet Franc, Cabernet Sauvignon, Canaiolo nero, Ciliegiolo, Merlot, Montepulciano, Pinot nero, Sangiovese',
    ],
  },
  {
    denominazioneVino: 'Rosso Orvietano o Orvietano rosso DOC Aleatico',
    tipoVino: 'fermo',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Rosso Orvietano o Orvietano rosso DOC Cabernet',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Rosso Orvietano o Orvietano rosso DOC Cabernet franc',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino:
      'Rosso Orvietano o Orvietano rosso DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Rosso Orvietano o Orvietano rosso DOC Canaiolo',
    tipoVino: 'fermo',
    vitigni: ['Canaiolo nero'],
  },
  {
    denominazioneVino: 'Rosso Orvietano o Orvietano rosso DOC Ciliegiolo',
    tipoVino: 'fermo',
    vitigni: ['Ciliegiolo'],
  },
  {
    denominazioneVino: 'Rosso Orvietano o Orvietano rosso DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Rosso Orvietano o Orvietano rosso DOC Pinot nero',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Rosso Orvietano o Orvietano rosso DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Rosso Piceno DOC',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'Rosso Piceno DOC novello',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'Rosso Piceno DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Rosso Piceno DOC superiore',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'Rubino di Cantavenna DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Grignolino, Freisa'],
  },
  {
    denominazioneVino: 'Ruchè di Castagnole Monferrato DOCG',
    tipoVino: 'fermo',
    vitigni: ['Ruchè, Barbera, Brachetto'],
  },
  {
    denominazioneVino: 'S.Anna Isola di Capo Rizzuto DOC bianco',
    tipoVino: 'fermo',
    vitigni: [
      'Gaglioppo, Nocera, Nerello Mascalese, Nerello Cappuccio, Malvasia nera di Basilicata, Malvasia bianca, Greco Bianco',
    ],
  },
  {
    denominazioneVino: 'S.Anna Isola di Capo Rizzuto DOC rosso',
    tipoVino: 'fermo',
    vitigni: [
      'Gaglioppo, Nocera, Nerello Mascalese, Nerello Cappuccio, Malvasia nera di Basilicata, Malvasia bianca, Greco Bianco',
    ],
  },
  {
    denominazioneVino: 'Salaparuta DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco comune, Catarratto bianco lucido'],
  },
  {
    denominazioneVino: 'Salaparuta DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Salaparuta DOC Cabernet sauvignon riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Salaparuta DOC Catarratto',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco comune, Catarratto bianco lucido'],
  },
  {
    denominazioneVino: 'Salaparuta DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Salaparuta DOC Grillo',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Salaparuta DOC Inzolia',
    tipoVino: 'fermo',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Salaparuta DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Salaparuta DOC Merlot riserva',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Salaparuta DOC Nero d’Avola',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Salaparuta DOC Nero d’Avola riserva',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Salaparuta DOC novello',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Merlot'],
  },
  {
    denominazioneVino: 'Salaparuta DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Salaparuta DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Salaparuta DOC Syrah',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Salaparuta DOC Syrah riserva',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Salice Salentino DOC Aleatico dolce',
    tipoVino: 'fermo',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Salice Salentino DOC Aleatico liquoroso dolce',
    tipoVino: 'liquoroso',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Salice Salentino DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Salice Salentino DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Salice Salentino DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Salice Salentino DOC Chardonnay spumante',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Salice Salentino DOC Fiano',
    tipoVino: 'fermo',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Salice Salentino DOC Fiano spumante',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Salice Salentino DOC Negroamaro',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Salice Salentino DOC Negroamaro riserva',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Salice Salentino DOC Negroamaro rosato',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Salice Salentino DOC Negroamaro rosato spumante',
    tipoVino: 'spumante',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Salice Salentino DOC Pinot bianco',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Salice Salentino DOC Pinot bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Salice Salentino DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Salice Salentino DOC rosato spumante',
    tipoVino: 'spumante',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Salice Salentino DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Salice Salentino DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Sambuca di Sicilia DOC Ansonica o Inzolia',
    tipoVino: 'fermo',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Sambuca di Sicilia DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Sambuca di Sicilia DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Sambuca di Sicilia DOC Cabernet sauvignon riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Sambuca di Sicilia DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Sambuca di Sicilia DOC Grecanico',
    tipoVino: 'fermo',
    vitigni: ['Grecanico dorato'],
  },
  {
    denominazioneVino: 'Sambuca di Sicilia DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Sambuca di Sicilia DOC Merlot riserva',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Sambuca di Sicilia DOC Nero d’Avola',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Sambuca di Sicilia DOC Nero d’Avola riserva',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Sambuca di Sicilia DOC passito',
    tipoVino: 'passito',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Sambuca di Sicilia DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Sambuca di Sicilia DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Sambuca di Sicilia DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Sambuca di Sicilia DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sambuca di Sicilia DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sambuca di Sicilia DOC Syrah',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Sambuca di Sicilia DOC Syrah riserva',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'San Colombano al Lambro o San Colombano bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay, Pinot nero'],
  },
  {
    denominazioneVino:
      'San Colombano al Lambro o San Colombano bianco frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Chardonnay, Pinot nero'],
  },
  {
    denominazioneVino:
      'San Colombano al Lambro o San Colombano bianco menzione vigna DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay, Pinot nero'],
  },
  {
    denominazioneVino:
      'San Colombano al Lambro o San Colombano bianco menzione vigna frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Chardonnay, Pinot nero'],
  },
  {
    denominazioneVino:
      'San Colombano al Lambro o San Colombano rosso con menzione vigna DOC',
    tipoVino: 'fermo',
    vitigni: ['Croatina, Barbera, Uva rara'],
  },
  {
    denominazioneVino: 'San Colombano al Lambro o San Colombano rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Croatina, Barbera, Uva rara'],
  },
  {
    denominazioneVino:
      'San Colombano al Lambro o San Colombano rosso frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Croatina, Barbera, Uva rara'],
  },
  {
    denominazioneVino:
      'San Colombano al Lambro o San Colombano rosso riserva con menzione vigna DOC',
    tipoVino: 'fermo',
    vitigni: ['Croatina, Barbera, Uva rara'],
  },
  {
    denominazioneVino: 'San Gimignano DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'San Gimignano DOC Cabernet sauvignon riseva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'San Gimignano DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'San Gimignano DOC Merlot riserva',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'San Gimignano DOC Pinot nero',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'San Gimignano DOC Pinot nero risrva',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'San Gimignano DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Merlot, Syrah, Pinot nero'],
  },
  {
    denominazioneVino: 'San Gimignano DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Merlot, Syrah, Pinot nero'],
  },
  {
    denominazioneVino: 'San Gimignano DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Merlot, Syrah, Pinot nero'],
  },
  {
    denominazioneVino: 'San Gimignano DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'San Gimignano DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'San Gimignano DOC Syrah',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'San Gimignano DOC Syrah riserva',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'San Gimignano DOC Vinsanto o Vin Santo',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino:
      'San Gimignano DOC Vinsanto Occhio di Pernice o Vin Santo Occhio di Pernice',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'San Ginesio DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Vernaccia nera'],
  },
  {
    denominazioneVino: 'San Ginesio DOC spumante dolce',
    tipoVino: 'spumante',
    vitigni: ['Vernaccia nera'],
  },
  {
    denominazioneVino: 'San Ginesio DOC spumante secco',
    tipoVino: 'spumante',
    vitigni: ['Vernaccia nera'],
  },
  {
    denominazioneVino: 'San Martino della Battaglia DOC',
    tipoVino: 'fermo',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'San Martino della Battaglia liquoroso DOC',
    tipoVino: 'liquoroso',
    vitigni: ['Tocai Friulano'],
  },
  {
    denominazioneVino: 'San Severo DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Bombino bianco, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'San Severo DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Bombino bianco, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'San Severo DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Bombino bianco, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'San Severo DOC Bombino bianco',
    tipoVino: 'fermo',
    vitigni: ['Bombino bianco'],
  },
  {
    denominazioneVino: 'San Severo DOC Bombino bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Bombino bianco'],
  },
  {
    denominazioneVino: 'San Severo DOC Bombino bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Bombino bianco'],
  },
  {
    denominazioneVino: 'San Severo DOC Falanghina',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'San Severo DOC Malvasia bianca di Candia',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'San Severo DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'San Severo DOC Merlot rosato',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'San Severo DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'San Severo DOC rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'San Severo DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'San Severo DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'San Severo DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano, Sangiovese'],
  },
  {
    denominazioneVino: 'San Severo DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'San Severo DOC Sangiovese rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'San Severo DOC Trebbiano bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'San Severo DOC Uva di Troia o Nero di Troia',
    tipoVino: 'fermo',
    vitigni: ['Uva di Troia'],
  },
  {
    denominazioneVino: 'San Severo DOC Uva di Troia o Nero di Troia riserva',
    tipoVino: 'fermo',
    vitigni: ['Uva di Troia'],
  },
  {
    denominazioneVino: 'San Severo DOC Uva di Troia o Nero di Troia rosato',
    tipoVino: 'fermo',
    vitigni: ['Uva di Troia'],
  },
  {
    denominazioneVino: 'San Torpè DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'San Torpè DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'San Torpè DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'San Torpè DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'San Torpè DOC Trebbiano',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'San Torpè DOC Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'San Torpè DOC Vin Santo',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'San Torpè DOC Vin Santo riserva',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino:
      'Sangue di Giuda dell’Oltrepò Pavese o Sangue di Giuda DOC',
    tipoVino: 'fermo',
    vitigni: ['Barbera, Croatina'],
  },
  {
    denominazioneVino:
      'Sangue di Giuda dell’Oltrepò Pavese o Sangue di Giuda frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Barbera, Croatina'],
  },
  {
    denominazioneVino:
      'Sangue di Giuda dell’Oltrepò Pavese o Sangue di Giuda spumante dolce DOC',
    tipoVino: 'spumante',
    vitigni: ['Barbera, Croatina'],
  },
  {
    denominazioneVino: 'Sannio DOC Aglianico',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Aglianico novello',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC aglianico passito',
    tipoVino: 'passito',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Aglianico riserva',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Aglianico rosato',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Aglianico spumante',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Aglianico spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Aglianico spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Aglianico spumante di qualità metodo classico rosato o rosé',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Aglianico spumante di qualità rosato o rosé',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Aglianico spumante rosato o rosé',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Aglianico-Piedirosso',
    tipoVino: 'fermo',
    vitigni: ['Aglianico, Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Aglianico-Piedirosso rosato',
    tipoVino: 'fermo',
    vitigni: ['Aglianico, Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Barbera',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Sannio DOC Barbera passito',
    tipoVino: 'passito',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Sannio DOC Barbera spumante',
    tipoVino: 'spumante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Sannio DOC Barbera spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Sannio DOC Barbera spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Sannio DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Sannio DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Trebbiano Toscano, Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Sannio DOC Coda di Volpe',
    tipoVino: 'fermo',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Sannio DOC Coda di Volpe passito',
    tipoVino: 'passito',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Sannio DOC Coda di Volpe spumante',
    tipoVino: 'spumante',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Sannio DOC Coda di Volpe spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino:
      'Sannio DOC Coda di Volpe spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Sannio DOC Fiano',
    tipoVino: 'fermo',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sannio DOC Fiano passito',
    tipoVino: 'passito',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sannio DOC Fiano spumante',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sannio DOC Fiano spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sannio DOC Fiano spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sannio DOC Greco',
    tipoVino: 'fermo',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Sannio DOC Greco passito',
    tipoVino: 'passito',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Sannio DOC Greco spumante',
    tipoVino: 'spumante',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Sannio DOC Greco spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Sannio DOC Greco spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Sannio DOC Guardia Sanframondi o Guardiolo Aglianico',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Aglianico novello',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo aglianico passito',
    tipoVino: 'passito',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Aglianico riserva',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Aglianico rosato',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Aglianico spumante',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Aglianico spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Aglianico spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Aglianico spumante di qualità metodo classico rosato o rosé',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Aglianico spumante di qualità rosato o rosé',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Aglianico spumante rosato o rosé',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Aglianico-Piedirosso',
    tipoVino: 'fermo',
    vitigni: ['Aglianico, Piedirosso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Aglianico-Piedirosso rosato',
    tipoVino: 'fermo',
    vitigni: ['Aglianico, Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Guardia Sanframondi o Guardiolo Barbera',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Barbera passito',
    tipoVino: 'passito',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Barbera spumante',
    tipoVino: 'spumante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Barbera spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Barbera spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Sannio DOC Guardia Sanframondi o Guardiolo bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Malvasia bianca di Candia'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Trebbiano Toscano, Malvasia bianca di Candia'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Coda di Volpe',
    tipoVino: 'fermo',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Coda di Volpe passito',
    tipoVino: 'passito',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Coda di Volpe spumante',
    tipoVino: 'spumante',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Coda di Volpe spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Coda di Volpe spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Sannio DOC Guardia Sanframondi o Guardiolo Fiano',
    tipoVino: 'fermo',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Fiano passito',
    tipoVino: 'passito',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Fiano spumante',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Fiano spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Fiano spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sannio DOC Guardia Sanframondi o Guardiolo Greco',
    tipoVino: 'fermo',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Greco passito',
    tipoVino: 'passito',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Greco spumante',
    tipoVino: 'spumante',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Greco spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Greco spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Sannio DOC Guardia Sanframondi o Guardiolo Moscato',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Moscato passito',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Moscato spumante',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Moscato spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Moscato spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Sannio DOC Guardia Sanframondi o Guardiolo Piedirosso',
    tipoVino: 'fermo',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Piedirosso passito',
    tipoVino: 'passito',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Piedirosso spumante',
    tipoVino: 'spumante',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Piedirosso spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Piedirosso spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Guardia Sanframondi o Guardiolo rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Guardia Sanframondi o Guardiolo rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo rosso frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Guardia Sanframondi o Guardiolo Sciascinoso',
    tipoVino: 'fermo',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Sciascinoso passito',
    tipoVino: 'passito',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Sciascinoso spumante',
    tipoVino: 'spumante',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Sciascinoso spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo Sciascinoso spumante di qualità metoso classico',
    tipoVino: 'spumante',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino: 'Sannio DOC Guardia Sanframondi o Guardiolo spumante',
    tipoVino: 'spumante',
    vitigni: ['Aglianico, Falanghina'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo spumante spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Aglianico, Falanghina'],
  },
  {
    denominazioneVino:
      'Sannio DOC Guardia Sanframondi o Guardiolo spumante spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Aglianico, Falanghina'],
  },
  {
    denominazioneVino: 'Sannio DOC Moscato',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Sannio DOC Moscato passito',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Sannio DOC Moscato spumante',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Sannio DOC Moscato spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Sannio DOC Moscato spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Sannio DOC Piedirosso',
    tipoVino: 'fermo',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Piedirosso passito',
    tipoVino: 'passito',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Piedirosso spumante',
    tipoVino: 'spumante',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Piedirosso spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Piedirosso spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC rosso frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Aglianico',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Aglianico novello',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti aglianico passito',
    tipoVino: 'passito',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Aglianico riserva',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Aglianico rosato',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Aglianico spumante',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti Aglianico spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti Aglianico spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti Aglianico spumante di qualità metodo classico rosato o rosé',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti Aglianico spumante di qualità rosato o rosé',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti Aglianico spumante rosato o rosé',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Aglianico-Piedirosso',
    tipoVino: 'fermo',
    vitigni: ['Aglianico, Piedirosso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti Aglianico-Piedirosso rosato',
    tipoVino: 'fermo',
    vitigni: ['Aglianico, Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Barbera',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Barbera passito',
    tipoVino: 'passito',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Barbera spumante',
    tipoVino: 'spumante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti Barbera spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti Barbera spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Trebbiano Toscano, Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Coda di Volpe',
    tipoVino: 'fermo',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Coda di Volpe passito',
    tipoVino: 'passito',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Coda di Volpe spumante',
    tipoVino: 'spumante',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti Coda di Volpe spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti Coda di Volpe spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Fiano',
    tipoVino: 'fermo',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Fiano passito',
    tipoVino: 'passito',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Fiano spumante',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti Fiano spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti Fiano spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Greco',
    tipoVino: 'fermo',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Greco passito',
    tipoVino: 'passito',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Greco spumante',
    tipoVino: 'spumante',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti Greco spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti Greco spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Moscato',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Moscato passito',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Moscato spumante',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti Moscato spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti Moscato spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Piedirosso',
    tipoVino: 'fermo',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Piedirosso passito',
    tipoVino: 'passito',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Piedirosso spumante',
    tipoVino: 'spumante',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti Piedirosso spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti Piedirosso spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti rosso frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Sciascinoso',
    tipoVino: 'fermo',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Sciascinoso passito',
    tipoVino: 'passito',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti Sciascinoso spumante',
    tipoVino: 'spumante',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti Sciascinoso spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti Sciascinoso spumante di qualità metoso classico',
    tipoVino: 'spumante',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino: 'Sannio DOC Sant’Agata dei Goti spumante',
    tipoVino: 'spumante',
    vitigni: ['Aglianico, Falanghina'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti spumante spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Aglianico, Falanghina'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sant’Agata dei Goti spumante spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Aglianico, Falanghina'],
  },
  {
    denominazioneVino: 'Sannio DOC Sciascinoso',
    tipoVino: 'fermo',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino: 'Sannio DOC Sciascinoso passito',
    tipoVino: 'passito',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino: 'Sannio DOC Sciascinoso spumante',
    tipoVino: 'spumante',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino: 'Sannio DOC Sciascinoso spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Sciascinoso spumante di qualità metoso classico',
    tipoVino: 'spumante',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Aglianico',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Aglianico novello',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca aglianico passito',
    tipoVino: 'passito',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Aglianico riserva',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Aglianico rosato',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Aglianico spumante',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Aglianico spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca Aglianico spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca Aglianico spumante di qualità metodo classico rosato o rosé',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca Aglianico spumante di qualità rosato o rosé',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Aglianico spumante rosato o rosé',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Aglianico-Piedirosso',
    tipoVino: 'fermo',
    vitigni: ['Aglianico, Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Aglianico-Piedirosso rosato',
    tipoVino: 'fermo',
    vitigni: ['Aglianico, Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Barbera',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Barbera passito',
    tipoVino: 'passito',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Barbera spumante',
    tipoVino: 'spumante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Barbera spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca Barbera spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Trebbiano Toscano, Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Aglianico',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Aglianico novello',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico aglianico passito',
    tipoVino: 'passito',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Aglianico riserva',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Aglianico rosato',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Aglianico spumante',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca classico Aglianico spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca classico Aglianico spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca classico Aglianico spumante di qualità metodo classico rosato o rosé',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca classico Aglianico spumante di qualità rosato o rosé',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca classico Aglianico spumante rosato o rosé',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Aglianico-Piedirosso',
    tipoVino: 'fermo',
    vitigni: ['Aglianico, Piedirosso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca classico Aglianico-Piedirosso rosato',
    tipoVino: 'fermo',
    vitigni: ['Aglianico, Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Barbera',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Barbera passito',
    tipoVino: 'passito',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Barbera spumante',
    tipoVino: 'spumante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca classico Barbera spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca classico Barbera spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Trebbiano Toscano, Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Coda di Volpe',
    tipoVino: 'fermo',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Coda di Volpe passito',
    tipoVino: 'passito',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Coda di Volpe spumante',
    tipoVino: 'spumante',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca classico Coda di Volpe spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca classico Coda di Volpe spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Fiano',
    tipoVino: 'fermo',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Fiano passito',
    tipoVino: 'passito',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Fiano spumante',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Fiano spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca classico Fiano spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Greco',
    tipoVino: 'fermo',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Greco passito',
    tipoVino: 'passito',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Greco spumante',
    tipoVino: 'spumante',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Greco spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca classico Greco spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Moscato',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Moscato passito',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Moscato spumante',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca classico Moscato spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca classico Moscato spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Piedirosso',
    tipoVino: 'fermo',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Piedirosso passito',
    tipoVino: 'passito',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Piedirosso spumante',
    tipoVino: 'spumante',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca classico Piedirosso spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca classico Piedirosso spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico rosso frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Sciascinoso',
    tipoVino: 'fermo',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Sciascinoso passito',
    tipoVino: 'passito',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico Sciascinoso spumante',
    tipoVino: 'spumante',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca classico Sciascinoso spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca classico Sciascinoso spumante di qualità metoso classico',
    tipoVino: 'spumante',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca classico spumante',
    tipoVino: 'spumante',
    vitigni: ['Aglianico, Falanghina'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca classico spumante spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Aglianico, Falanghina'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca classico spumante spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Aglianico, Falanghina'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Coda di Volpe',
    tipoVino: 'fermo',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Coda di Volpe passito',
    tipoVino: 'passito',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Coda di Volpe spumante',
    tipoVino: 'spumante',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Coda di Volpe spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca Coda di Volpe spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Fiano',
    tipoVino: 'fermo',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Fiano passito',
    tipoVino: 'passito',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Fiano spumante',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Fiano spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca Fiano spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Greco',
    tipoVino: 'fermo',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Greco passito',
    tipoVino: 'passito',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Greco spumante',
    tipoVino: 'spumante',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Greco spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca Greco spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Moscato',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Moscato passito',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Moscato spumante',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Moscato spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca Moscato spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Piedirosso',
    tipoVino: 'fermo',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Piedirosso passito',
    tipoVino: 'passito',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Piedirosso spumante',
    tipoVino: 'spumante',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Piedirosso spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca Piedirosso spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca rosso frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Sciascinoso',
    tipoVino: 'fermo',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Sciascinoso passito',
    tipoVino: 'passito',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Sciascinoso spumante',
    tipoVino: 'spumante',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca Sciascinoso spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca Sciascinoso spumante di qualità metoso classico',
    tipoVino: 'spumante',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca spumante',
    tipoVino: 'spumante',
    vitigni: ['Aglianico, Falanghina'],
  },
  {
    denominazioneVino: 'Sannio DOC Solopaca spumante spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Aglianico, Falanghina'],
  },
  {
    denominazioneVino:
      'Sannio DOC Solopaca spumante spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Aglianico, Falanghina'],
  },
  {
    denominazioneVino: 'Sannio DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Aglianico, Falanghina'],
  },
  {
    denominazioneVino: 'Sannio DOC spumante spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Aglianico, Falanghina'],
  },
  {
    denominazioneVino:
      'Sannio DOC spumante spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Aglianico, Falanghina'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Aglianico',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Aglianico novello',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno aglianico passito',
    tipoVino: 'passito',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Aglianico riserva',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Aglianico rosato',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Aglianico spumante',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Aglianico spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Taburno Aglianico spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Taburno Aglianico spumante di qualità metodo classico rosato o rosé',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino:
      'Sannio DOC Taburno Aglianico spumante di qualità rosato o rosé',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Aglianico spumante rosato o rosé',
    tipoVino: 'spumante',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Aglianico-Piedirosso',
    tipoVino: 'fermo',
    vitigni: ['Aglianico, Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Aglianico-Piedirosso rosato',
    tipoVino: 'fermo',
    vitigni: ['Aglianico, Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Barbera',
    tipoVino: 'fermo',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Barbera passito',
    tipoVino: 'passito',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Barbera spumante',
    tipoVino: 'spumante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Barbera spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino:
      'Sannio DOC Taburno Barbera spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Barbera'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Trebbiano Toscano, Malvasia bianca di Candia'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Coda di Volpe',
    tipoVino: 'fermo',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Coda di Volpe passito',
    tipoVino: 'passito',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Coda di Volpe spumante',
    tipoVino: 'spumante',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Coda di Volpe spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino:
      'Sannio DOC Taburno Coda di Volpe spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Fiano',
    tipoVino: 'fermo',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Fiano passito',
    tipoVino: 'passito',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Fiano spumante',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Fiano spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino:
      'Sannio DOC Taburno Fiano spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Greco',
    tipoVino: 'fermo',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Greco passito',
    tipoVino: 'passito',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Greco spumante',
    tipoVino: 'spumante',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Greco spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino:
      'Sannio DOC Taburno Greco spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Moscato',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Moscato passito',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Moscato spumante',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Moscato spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Sannio DOC Taburno Moscato spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Piedirosso',
    tipoVino: 'fermo',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Piedirosso passito',
    tipoVino: 'passito',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Piedirosso spumante',
    tipoVino: 'spumante',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Piedirosso spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Taburno Piedirosso spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Piedirosso'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno rosso frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Sciascinoso',
    tipoVino: 'fermo',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Sciascinoso passito',
    tipoVino: 'passito',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Sciascinoso spumante',
    tipoVino: 'spumante',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno Sciascinoso spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino:
      'Sannio DOC Taburno Sciascinoso spumante di qualità metoso classico',
    tipoVino: 'spumante',
    vitigni: ['Sciascinoso'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno spumante',
    tipoVino: 'spumante',
    vitigni: ['Aglianico, Falanghina'],
  },
  {
    denominazioneVino: 'Sannio DOC Taburno spumante spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Aglianico, Falanghina'],
  },
  {
    denominazioneVino:
      'Sannio DOC Taburno spumante spumante di qualità metodo classico',
    tipoVino: 'spumante',
    vitigni: ['Aglianico, Falanghina'],
  },
  {
    denominazioneVino: 'Sant’Antimo DOC bianco',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Sant’Antimo DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Sant’Antimo DOC Cahrdonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Sant’Antimo DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Sant’Antimo DOC Pinot grigio',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Sant’Antimo DOC Pinot nero',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Sant’Antimo DOC rosso',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Sant’Antimo DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Sant’Antimo DOC Vin Santo',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Sant’Antimo DOC Vin Santo Occhio di Pernice',
    tipoVino: 'passito',
    vitigni: ['Sangiovese, Malvasia nera'],
  },
  {
    denominazioneVino: 'Sant’Antimo DOC Vin Santo Occhio di Pernice riserva',
    tipoVino: 'passito',
    vitigni: ['Sangiovese, Malvasia nera'],
  },
  {
    denominazioneVino: 'Sant’Antimo DOC Vin Santo riserva',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Santa Margherita di Belice DOC Ansonica',
    tipoVino: 'fermo',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Santa Margherita di Belice DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Ansonica, Catarratto bianco lucido'],
  },
  {
    denominazioneVino: 'Santa Margherita di Belice DOC Catarratto',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco comune, Catarratto bianco lucido'],
  },
  {
    denominazioneVino: 'Santa Margherita di Belice DOC Grecanico',
    tipoVino: 'fermo',
    vitigni: ['Grecanico dorato'],
  },
  {
    denominazioneVino: 'Santa Margherita di Belice DOC Nero d’Avola',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Santa Margherita di Belice DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Sangiovese, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Santa Margherita di Belice DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sardegna Semidano DOC',
    tipoVino: 'fermo',
    vitigni: ['Semidano'],
  },
  {
    denominazioneVino: 'Sardegna Semidano DOC passito',
    tipoVino: 'passito',
    vitigni: ['Semidano'],
  },
  {
    denominazioneVino: 'Sardegna Semidano DOC sottozona Mogoro',
    tipoVino: 'fermo',
    vitigni: ['Semidano'],
  },
  {
    denominazioneVino: 'Sardegna Semidano DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Semidano'],
  },
  {
    denominazioneVino: 'Sardegna Semidano DOC superiore',
    tipoVino: 'fermo',
    vitigni: ['Semidano'],
  },
  {
    denominazioneVino: 'Savuto DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay, Greco Bianco, Malvasia bianca'],
  },
  {
    denominazioneVino: 'Savuto DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo, Aglianico, Greco Nero, Nerello Cappuccio'],
  },
  {
    denominazioneVino: 'Savuto DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo, Aglianico, Greco Nero, Nerello Cappuccio'],
  },
  {
    denominazioneVino: 'Savuto DOC rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo, Aglianico, Greco Nero, Nerello Cappuccio'],
  },
  {
    denominazioneVino: 'Scanzo o Moscato di Scanzo DOCG',
    tipoVino: 'passito',
    vitigni: ['Moscato di Scanzo'],
  },
  {
    denominazioneVino: 'Scavigna DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Gewürztraminer, Chardonnay, Pinot bianco, Riesling Italico'],
  },
  {
    denominazioneVino: 'Scavigna DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Aglianico, Magliocco canino, Marsigliana nera'],
  },
  {
    denominazioneVino: 'Scavigna DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Aglianico, Magliocco canino, Marsigliana nera'],
  },
  {
    denominazioneVino: 'Sciacca DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Ansonica, Chardonnay, Catarratto bianco lucido'],
  },
  {
    denominazioneVino: 'Sciacca DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Sciacca DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Sciacca DOC Grecanico',
    tipoVino: 'fermo',
    vitigni: ['Grecanico dorato'],
  },
  {
    denominazioneVino: 'Sciacca DOC Inzolia',
    tipoVino: 'fermo',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Sciacca DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Sciacca DOC Nero d’Avola',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Sciacca DOC riserva Rayana',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco lucido, Ansonica'],
  },
  {
    denominazioneVino: 'Sciacca DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Cabernet Sauvignon, Nero d’Avola, Sangiovese'],
  },
  {
    denominazioneVino: 'Sciacca DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Cabernet Sauvignon, Nero d’Avola, Sangiovese'],
  },
  {
    denominazioneVino: 'Sciacca DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Cabernet Sauvignon, Nero d’Avola, Sangiovese'],
  },
  {
    denominazioneVino: 'Sciacca DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Serrapetrona DOC',
    tipoVino: 'fermo',
    vitigni: ['Vernaccia nera'],
  },
  {
    denominazioneVino: 'Sforzato di Valtellina o Sfursat di Valtellina DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Sicilia DOC Alicante',
    tipoVino: 'fermo',
    vitigni: ['Alicante'],
  },
  {
    denominazioneVino: 'Sicilia DOC bianco',
    tipoVino: 'fermo',
    vitigni: [
      'Inzolia, Catarratto bianco comune, Catarratto bianco lucido, Grecanico dorato',
    ],
  },
  {
    denominazioneVino: 'Sicilia DOC bianco vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: [
      'Inzolia, Catarratto bianco comune, Catarratto bianco lucido, Grecanico dorato',
    ],
  },
  {
    denominazioneVino: 'Sicilia DOC Cabernet franc',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Sicilia DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Sicilia DOC Carignano',
    tipoVino: 'fermo',
    vitigni: ['Carignano'],
  },
  {
    denominazioneVino: 'Sicilia DOC Carignano – Alicante',
    tipoVino: 'fermo',
    vitigni: ['Carignano, Alicante'],
  },
  {
    denominazioneVino: 'Sicilia DOC Carricante',
    tipoVino: 'fermo',
    vitigni: ['Carricante'],
  },
  {
    denominazioneVino: 'Sicilia DOC Carricante – Catarratto',
    tipoVino: 'fermo',
    vitigni: ['Carricante, Catarratto bianco lucido, Catarratto bianco comune'],
  },
  {
    denominazioneVino: 'Sicilia DOC Carricante – Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Carricante, Chardonnay'],
  },
  {
    denominazioneVino: 'Sicilia DOC Carricante – Grecanico',
    tipoVino: 'fermo',
    vitigni: ['Carricante'],
  },
  {
    denominazioneVino: 'Sicilia DOC Catarratto',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco lucido, Catarratto bianco comune'],
  },
  {
    denominazioneVino: 'Sicilia DOC Catarratto – Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco lucido, Catarratto bianco comune, Chardonnay'],
  },
  {
    denominazioneVino: 'Sicilia DOC Catarratto – Fiano',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco lucido, Catarratto bianco comune, Fiano'],
  },
  {
    denominazioneVino: 'Sicilia DOC Catarratto – Grillo',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco lucido, Catarratto bianco comune'],
  },
  {
    denominazioneVino: 'Sicilia DOC Catarratto – Inzolia',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco lucido, Catarratto bianco comune, Inzolia'],
  },
  {
    denominazioneVino: 'Sicilia DOC Catarratto – Viogner',
    tipoVino: 'fermo',
    vitigni: ['Catarratto bianco lucido, Catarratto bianco comune, Viognier'],
  },
  {
    denominazioneVino: 'Sicilia DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Sicilia DOC Damaschino',
    tipoVino: 'fermo',
    vitigni: ['Damaschino'],
  },
  {
    denominazioneVino: 'Sicilia DOC Fiano',
    tipoVino: 'fermo',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sicilia DOC Frappato',
    tipoVino: 'fermo',
    vitigni: ['Frappato'],
  },
  {
    denominazioneVino: 'Sicilia DOC Frappato – Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Frappato, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Sicilia DOC Frappato – Syrah',
    tipoVino: 'fermo',
    vitigni: ['Frappato, Syrah'],
  },
  {
    denominazioneVino: 'Sicilia DOC Grecanico',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Sicilia DOC Grecanico – Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Sicilia DOC Grecanico – Fiano',
    tipoVino: 'fermo',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Sicilia DOC Grecanico – Inzolia',
    tipoVino: 'fermo',
    vitigni: ['Inzolia'],
  },
  {
    denominazioneVino: 'Sicilia DOC Grecanico – Viogner',
    tipoVino: 'fermo',
    vitigni: ['Viognier'],
  },
  {
    denominazioneVino: 'Sicilia DOC Grillo',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Sicilia DOC Grillo – Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Sicilia DOC Grillo – Grecanico',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Sicilia DOC Grillo – Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Sicilia DOC Grillo – Viognier',
    tipoVino: 'fermo',
    vitigni: ['Viognier'],
  },
  {
    denominazioneVino: 'Sicilia DOC Inzolia',
    tipoVino: 'fermo',
    vitigni: ['Inzolia'],
  },
  {
    denominazioneVino: 'Sicilia DOC Inzolia – Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Inzolia, Chardonnay'],
  },
  {
    denominazioneVino: 'Sicilia DOC Inzolia – Grillo',
    tipoVino: 'fermo',
    vitigni: ['Inzolia'],
  },
  {
    denominazioneVino: 'Sicilia DOC Inzolia – Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Inzolia, Sauvignon'],
  },
  {
    denominazioneVino: 'Sicilia DOC Inzolia – Viognier',
    tipoVino: 'fermo',
    vitigni: ['Inzolia, Viognier'],
  },
  {
    denominazioneVino: 'Sicilia DOC Merlot – Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Sicilia DOC Merlot – Syrah',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Syrah'],
  },
  {
    denominazioneVino: 'Sicilia DOC Mondeuse',
    tipoVino: 'fermo',
    vitigni: ['Mondeuse'],
  },
  {
    denominazioneVino: 'Sicilia DOC Müller-Thurgau',
    tipoVino: 'fermo',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino: 'Sicilia DOC Nerello cappuccio',
    tipoVino: 'fermo',
    vitigni: ['Nerello Cappuccio'],
  },
  {
    denominazioneVino: 'Sicilia DOC Nerello mascalese',
    tipoVino: 'fermo',
    vitigni: ['Nerello Mascalese'],
  },
  {
    denominazioneVino: 'Sicilia DOC Nerello mascalese – Merlot',
    tipoVino: 'fermo',
    vitigni: ['Nerello Mascalese, Merlot'],
  },
  {
    denominazioneVino: 'Sicilia DOC Nerello mascalese – Nerello cappuccio',
    tipoVino: 'fermo',
    vitigni: ['Nerello Mascalese, Nerello Cappuccio'],
  },
  {
    denominazioneVino: 'Sicilia DOC Nero d’Avola',
    tipoVino: 'fermo',
    vitigni: ['Nero d’Avola'],
  },
  {
    denominazioneVino: 'Sicilia DOC Nero d’Avola – Cabernet franc',
    tipoVino: 'fermo',
    vitigni: ['Nero d’Avola, Cabernet Franc'],
  },
  {
    denominazioneVino: 'Sicilia DOC Nero d’Avola – Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Nero d’Avola, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Sicilia DOC Nero d’Avola – Frappato',
    tipoVino: 'fermo',
    vitigni: ['Nero d’Avola, Frappato'],
  },
  {
    denominazioneVino: 'Sicilia DOC Nero d’Avola – Merlot',
    tipoVino: 'fermo',
    vitigni: ['Nero d’Avola, Merlot'],
  },
  {
    denominazioneVino: 'Sicilia DOC Nero d’Avola – Nerello cappuccio',
    tipoVino: 'fermo',
    vitigni: ['Nero d’Avola, Nerello Cappuccio'],
  },
  {
    denominazioneVino: 'Sicilia DOC Nero d’Avola – Nerello mascalese',
    tipoVino: 'fermo',
    vitigni: ['Nero d’Avola, Nerello Mascalese'],
  },
  {
    denominazioneVino: 'Sicilia DOC Nero d’Avola – Perricone',
    tipoVino: 'fermo',
    vitigni: ['Nero d’Avola, Perricone'],
  },
  {
    denominazioneVino: 'Sicilia DOC Nero d’Avola – Pinot nero',
    tipoVino: 'fermo',
    vitigni: ['Nero d’Avola, Pinot nero'],
  },
  {
    denominazioneVino: 'Sicilia DOC Nero d’Avola – Syrah',
    tipoVino: 'fermo',
    vitigni: ['Nero d’Avola, Syrah'],
  },
  {
    denominazioneVino: 'Sicilia DOC Nocera',
    tipoVino: 'fermo',
    vitigni: ['Nocera'],
  },
  {
    denominazioneVino: 'Sicilia DOC Perricone',
    tipoVino: 'fermo',
    vitigni: ['Perricone'],
  },
  {
    denominazioneVino: 'Sicilia DOC Perricone – Nerello mascalese',
    tipoVino: 'fermo',
    vitigni: ['Perricone, Nerello Mascalese'],
  },
  {
    denominazioneVino: 'Sicilia DOC Pinot grigio',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Sicilia DOC Pinot nero',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Sicilia DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Frappato, Nerello Mascalese, Perricone'],
  },
  {
    denominazioneVino: 'Sicilia DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Frappato, Nerello Mascalese, Perricone'],
  },
  {
    denominazioneVino: 'Sicilia DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Frappato, Nerello Mascalese, Perricone'],
  },
  {
    denominazioneVino: 'Sicilia DOC rosso vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Calabrese, Frappato, Nerello Mascalese, Perricone'],
  },
  {
    denominazioneVino: 'Sicilia DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Sicilia DOC spumante bianco',
    tipoVino: 'spumante',
    vitigni: [
      'Inzolia, Catarratto bianco comune, Catarratto bianco lucido, Grecanico dorato, Carricante, Pinot nero, Moscato bianco, Zibibbo',
    ],
  },
  {
    denominazioneVino: 'Sicilia DOC spumante rosato',
    tipoVino: 'spumante',
    vitigni: ['Calabrese, Frappato, Nerello Mascalese, Pinot nero'],
  },
  {
    denominazioneVino: 'Sicilia DOC Syrah',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Sicilia DOC Syrah – Alicante',
    tipoVino: 'fermo',
    vitigni: ['Syrah, Alicante'],
  },
  {
    denominazioneVino: 'Sicilia DOC Syrah – Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Syrah, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Sicilia DOC Syrah – Carignano',
    tipoVino: 'fermo',
    vitigni: ['Syrah, Carignano'],
  },
  {
    denominazioneVino: 'Sicilia DOC Syrah – Merlot',
    tipoVino: 'fermo',
    vitigni: ['Syrah, Merlot'],
  },
  {
    denominazioneVino: 'Sicilia DOC Viognier',
    tipoVino: 'fermo',
    vitigni: ['Viognier'],
  },
  {
    denominazioneVino: 'Siracusa DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Siracusa DOC Moscato',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Siracusa DOC Moscato spumante',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Siracusa DOC Nero d’Avola',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Siracusa DOC passito',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Siracusa DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Siracusa DOC Syrah',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Sizzano DOC',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo, Vespolina, Uva rara'],
  },
  {
    denominazioneVino: 'Sizzano DOC riserva',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo, Vespolina, Uva rara'],
  },
  {
    denominazioneVino: 'Soave classico DOC',
    tipoVino: 'fermo',
    vitigni: ['Garganega, Trebbiano di Soave, Chardonnay'],
  },
  {
    denominazioneVino: 'Soave Colli Scaligeri DOC',
    tipoVino: 'fermo',
    vitigni: ['Garganega, Trebbiano di Soave, Chardonnay'],
  },
  {
    denominazioneVino: 'Soave DOC',
    tipoVino: 'fermo',
    vitigni: ['Garganega, Trebbiano di Soave, Chardonnay'],
  },
  {
    denominazioneVino: 'Soave spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Garganega, Trebbiano di Soave, Chardonnay'],
  },
  {
    denominazioneVino: 'Soave superiore classico DOCG',
    tipoVino: 'fermo',
    vitigni: ['Garganega, Trebbiano di Soave'],
  },
  {
    denominazioneVino: 'Soave superiore classico riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Garganega, Trebbiano di Soave'],
  },
  {
    denominazioneVino: 'Soave superiore DOCG',
    tipoVino: 'fermo',
    vitigni: ['Garganega, Trebbiano di Soave'],
  },
  {
    denominazioneVino: 'Soave superiore riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Garganega, Trebbiano di Soave'],
  },
  {
    denominazioneVino: 'Sovana DOC Aleatico passito',
    tipoVino: 'passito',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Sovana DOC Aleatico riserva',
    tipoVino: 'fermo',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Sovana DOC Aleatico riserva passito',
    tipoVino: 'passito',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Sovana DOC Aleatico superiore',
    tipoVino: 'fermo',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Sovana DOC Cabernet sauvignon riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Sovana DOC Cabernet sauvignon superiore',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Sovana DOC Ciliegiolo riserva',
    tipoVino: 'fermo',
    vitigni: ['Ciliegiolo'],
  },
  {
    denominazioneVino: 'Sovana DOC Ciliegiolo superiore',
    tipoVino: 'fermo',
    vitigni: ['Ciliegiolo'],
  },
  {
    denominazioneVino: 'Sovana DOC Merlot riserva',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Sovana DOC Merlot superiore',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Sovana DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sovana DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sovana DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sovana DOC rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sovana DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Sovana DOC Sangiovese superiore',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Spoleto DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Spoletino'],
  },
  {
    denominazioneVino: 'Spoleto DOC Trebbiano spoletino',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Spoletino'],
  },
  {
    denominazioneVino: 'Spoleto DOC Trebbiano spoletino passito',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Spoletino'],
  },
  {
    denominazioneVino: 'Spoleto DOC Trebbiano spoletino spumante',
    tipoVino: 'spumante',
    vitigni: ['Trebbiano Spoletino'],
  },
  {
    denominazioneVino: 'Spoleto DOC Trebbiano spoletino superiore',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Spoletino'],
  },
  {
    denominazioneVino: 'Squinzano DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Squinzano DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Squinzano DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Squinzano DOC Chardonnay spumante',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Squinzano DOC Fiano',
    tipoVino: 'fermo',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Squinzano DOC Fiano spumante',
    tipoVino: 'spumante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Squinzano DOC Malvasia bianca',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Squinzano DOC Malvasia bianca spumante',
    tipoVino: 'spumante',
    vitigni: ['Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Squinzano DOC Negroamaro',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Squinzano DOC Negroamaro riserva',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Squinzano DOC Negroamaro rosato',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Squinzano DOC Negroamaro rosato spumante',
    tipoVino: 'spumante',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Squinzano DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Squinzano DOC rosato spumante',
    tipoVino: 'spumante',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Squinzano DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Squinzano DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Squinzano DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Squinzano DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Squinzano DOC Sauvignon spumante',
    tipoVino: 'spumante',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Squinzano DOC Susumaniello',
    tipoVino: 'fermo',
    vitigni: ['Susumaniello'],
  },
  {
    denominazioneVino: 'Strevi DOC',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Suvereto Cabernet Sauvignon DOCG',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Suvereto Cabernet Sauvignon riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Suvereto DOCG',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Merlot'],
  },
  {
    denominazioneVino: 'Suvereto Merlot DOCG',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Suvereto Merlot riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Suvereto riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Merlot'],
  },
  {
    denominazioneVino: 'Suvereto Sangiovese DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Suvereto Sangiovese riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Tarquinia DOC bianco',
    tipoVino: 'fermo',
    vitigni: [
      'Trebbiano Toscano, Trebbiano giallo, Malvasia bianca di Candia, Malvasia del Lazio',
    ],
  },
  {
    denominazioneVino: 'Tarquinia DOC bianco amabile',
    tipoVino: 'fermo',
    vitigni: [
      'Trebbiano Toscano, Trebbiano giallo, Malvasia bianca di Candia, Malvasia del Lazio',
    ],
  },
  {
    denominazioneVino: 'Tarquinia DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: [
      'Trebbiano Toscano, Trebbiano giallo, Malvasia bianca di Candia, Malvasia del Lazio',
    ],
  },
  {
    denominazioneVino: 'Tarquinia DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Montepulciano, Cesanese comune'],
  },
  {
    denominazioneVino: 'Tarquinia DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Montepulciano, Cesanese comune'],
  },
  {
    denominazioneVino: 'Tarquinia DOC rosso amabile',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Montepulciano, Cesanese comune'],
  },
  {
    denominazioneVino: 'Tarquinia DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Montepulciano, Cesanese comune'],
  },
  {
    denominazioneVino: 'Taurasi DOCG',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Taurasi riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Tavoliere delle Puglie o Tavoliere DOC Nero di Troia',
    tipoVino: 'fermo',
    vitigni: ['Uva di Troia'],
  },
  {
    denominazioneVino:
      'Tavoliere delle Puglie o Tavoliere DOC Nero di Troia riserva',
    tipoVino: 'fermo',
    vitigni: ['Uva di Troia'],
  },
  {
    denominazioneVino: 'Tavoliere delle Puglie o Tavoliere DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Uva di Troia'],
  },
  {
    denominazioneVino: 'Tavoliere delle Puglie o Tavoliere DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Uva di Troia'],
  },
  {
    denominazioneVino: 'Tavoliere delle Puglie o Tavoliere DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Uva di Troia'],
  },
  {
    denominazioneVino: 'Teroldego Rotaliano DOC rosato o kretzer',
    tipoVino: 'fermo',
    vitigni: ['Teroldego'],
  },
  {
    denominazioneVino: 'Teroldego Rotaliano DOC rosso o rubino',
    tipoVino: 'fermo',
    vitigni: ['Teroldego'],
  },
  {
    denominazioneVino: 'Teroldego Rotaliano DOC superiore e superiore riserva',
    tipoVino: 'fermo',
    vitigni: ['Teroldego'],
  },
  {
    denominazioneVino: 'Terra d’Otranto DOC Aleatico',
    tipoVino: 'fermo',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Terra d’Otranto DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Terra d’Otranto DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Terra d’Otranto DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Terra d’Otranto DOC Chardonnay frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Terra d’Otranto DOC Fiano',
    tipoVino: 'fermo',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Terra d’Otranto DOC Fiano frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Fiano'],
  },
  {
    denominazioneVino: 'Terra d’Otranto DOC Malvasia bianca',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca di Candia, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Terra d’Otranto DOC Malvasia bianca frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Malvasia bianca di Candia, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Terra d’Otranto DOC Malvasia nera',
    tipoVino: 'fermo',
    vitigni: [
      'Malvasia nera di Lecce, Malvasia nera di Brindisi, Malvasia nera di Basilicata',
    ],
  },
  {
    denominazioneVino: 'Terra d’Otranto DOC Primitivo',
    tipoVino: 'fermo',
    vitigni: [
      'Malvasia nera di Lecce, Malvasia nera di Brindisi, Malvasia nera di Basilicata',
    ],
  },
  {
    denominazioneVino: 'Terra d’Otranto DOC rosato',
    tipoVino: 'fermo',
    vitigni: [
      'Negro Amaro, Primitivo, Malvasia nera di Lecce, Malvasia nera di Brindisi, Malvasia nera di Basilicata',
    ],
  },
  {
    denominazioneVino: 'Terra d’Otranto DOC rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Terra d’Otranto DOC rosato spumante',
    tipoVino: 'spumante',
    vitigni: ['Negro Amaro'],
  },
  {
    denominazioneVino: 'Terra d’Otranto DOC rosso',
    tipoVino: 'fermo',
    vitigni: [
      'Negro Amaro, Primitivo, Malvasia nera di Lecce, Malvasia nera di Brindisi, Malvasia nera di Basilicata',
    ],
  },
  {
    denominazioneVino: 'Terra d’Otranto DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: [
      'Negro Amaro, Primitivo, Malvasia nera di Lecce, Malvasia nera di Brindisi, Malvasia nera di Basilicata',
    ],
  },
  {
    denominazioneVino: 'Terra d’Otranto DOC Verdeca',
    tipoVino: 'fermo',
    vitigni: ['Verdeca'],
  },
  {
    denominazioneVino: 'Terra d’Otranto DOC Verdeca frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Verdeca'],
  },
  {
    denominazioneVino: 'Terracina o Moscato di Terracina DOC amabile',
    tipoVino: 'fermo',
    vitigni: ['Moscato di Terracina'],
  },
  {
    denominazioneVino: 'Terracina o Moscato di Terracina DOC passito',
    tipoVino: 'passito',
    vitigni: ['Moscato di Terracina'],
  },
  {
    denominazioneVino: 'Terracina o Moscato di Terracina DOC secco',
    tipoVino: 'fermo',
    vitigni: ['Moscato di Terracina'],
  },
  {
    denominazioneVino: 'Terracina o Moscato di Terracina DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Moscato di Terracina'],
  },
  {
    denominazioneVino: 'Terratico di Bibbona DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Terratico di Bibbona DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Terratico di Bibbona DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Terratico di Bibbona DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Merlot'],
  },
  {
    denominazioneVino: 'Terratico di Bibbona DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Merlot'],
  },
  {
    denominazioneVino: 'Terratico di Bibbona DOC rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Merlot'],
  },
  {
    denominazioneVino: 'Terratico di Bibbona DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Terratico di Bibbona DOC Syrah',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Terratico di Bibbona DOC Trebbiano',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Terratico di Bibbona DOC Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Terre Alfieri DOC Arneis menzione vigna',
    tipoVino: 'fermo',
    vitigni: ['Arneis'],
  },
  {
    denominazioneVino: 'Terre Alfieri DOC Nebbiolo',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Terre Alfieri DOC Nebbiolo menzione vigna',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Terre Alfieri DOCG Arneis',
    tipoVino: 'fermo',
    vitigni: ['Arneis'],
  },
  {
    denominazioneVino: 'Terre Alfieri DOCG Arneis superiore',
    tipoVino: 'fermo',
    vitigni: ['Arneis'],
  },
  {
    denominazioneVino: 'Terre Alfieri DOCG Nebbiolo',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Terre Alfieri DOCG Nebbiolo riserva',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Terre Alfieri DOCG Nebbiolo superiore',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Terre del Colleoni o Colleoni Cabernet DOC',
    tipoVino: 'fermo, frizzante',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Terre del Colleoni o Colleoni Chardonnay DOC',
    tipoVino: 'fermo, frizzante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Terre del Colleoni o Colleoni Franconia DOC',
    tipoVino: 'fermo, frizzante',
    vitigni: ['Franconia'],
  },
  {
    denominazioneVino: 'Terre del Colleoni o Colleoni Incrocio Manzoni DOC',
    tipoVino: 'fermo, frizzante',
    vitigni: ['Manzoni bianco'],
  },
  {
    denominazioneVino: 'Terre del Colleoni o Colleoni Incrocio Terzi DOC',
    tipoVino: 'fermo, frizzante',
    vitigni: ['Incrocio Terzi n.1'],
  },
  {
    denominazioneVino: 'Terre del Colleoni o Colleoni Marzemino DOC',
    tipoVino: 'fermo, frizzante',
    vitigni: ['Marzemino'],
  },
  {
    denominazioneVino: 'Terre del Colleoni o Colleoni Merlot DOC',
    tipoVino: 'fermo, frizzante',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Terre del Colleoni o Colleoni Moscato giallo DOC',
    tipoVino: 'fermo, frizzante',
    vitigni: ['Moscato giallo'],
  },
  {
    denominazioneVino:
      'Terre del Colleoni o Colleoni Moscato giallo passito DOC',
    tipoVino: 'fermo',
    vitigni: ['Moscato giallo'],
  },
  {
    denominazioneVino: 'Terre del Colleoni o Colleoni Novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Franconia, Incrocio Terzi n.1'],
  },
  {
    denominazioneVino: 'Terre del Colleoni o Colleoni Pinot bianco DOC',
    tipoVino: 'fermo, frizzante',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Terre del Colleoni o Colleoni Pinot grigio DOC',
    tipoVino: 'fermo, frizzante',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Terre del Colleoni o Colleoni Schiava DOC',
    tipoVino: 'fermo, frizzante',
    vitigni: ['Schiava'],
  },
  {
    denominazioneVino: 'Terre del Colleoni o Colleoni Spumante DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio, Chardonnay, Manzoni bianco'],
  },
  {
    denominazioneVino: 'Terre dell’Alta Val d’Agri DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Malvasia nera di Basilicata'],
  },
  {
    denominazioneVino: 'Terre dell’Alta Val d’Agri DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Terre dell’Alta Val d’Agri DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Terre di Casole DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Terre di Casole DOC bianco riserva',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Terre di Casole DOC passito',
    tipoVino: 'passito',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Terre di Casole DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Terre di Casole DOC rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Terre di Casole DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Terre di Casole DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Aglianico',
    tipoVino: 'fermo',
    vitigni: ['Aglianico'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Greco Bianco, Guarnaccia, Pecorello, Montonico bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC bianco passito',
    tipoVino: 'passito',
    vitigni: ['Greco Bianco, Guarnaccia, Pecorello, Montonico bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Greco Bianco, Guarnaccia, Pecorello, Montonico bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC bianco vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Greco Bianco, Guarnaccia, Pecorello, Montonico bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Cabernet',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Calabrese',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Chardonnay passito',
    tipoVino: 'passito',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Chardonnay spumante',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Colline dei Crati bianco',
    tipoVino: 'fermo',
    vitigni: ['Greco Bianco, Guarnaccia, Pecorello, Montonico bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Colline dei Crati bianco passito',
    tipoVino: 'passito',
    vitigni: ['Greco Bianco, Guarnaccia, Pecorello, Montonico bianco'],
  },
  {
    denominazioneVino:
      'Terre di Cosenza DOC Colline dei Crati bianco vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Greco Bianco, Guarnaccia, Pecorello, Montonico bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Colline dei Crati Magliocco',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino:
      'Terre di Cosenza DOC Colline dei Crati Magliocco riserva',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Colline dei Crati rosato',
    tipoVino: 'fermo',
    vitigni: ['Greco Nero, Magliocco canino, Gaglioppo, Aglianico, Calabrese'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Colline dei Crati rosso',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Colline dei Crati rosso passito',
    tipoVino: 'passito',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Colline dei Crati rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino:
      'Terre di Cosenza DOC Colline dei Crati rosso vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Condoleo bianco',
    tipoVino: 'fermo',
    vitigni: ['Greco Bianco, Guarnaccia, Pecorello, Montonico bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Condoleo bianco passito',
    tipoVino: 'passito',
    vitigni: ['Greco Bianco, Guarnaccia, Pecorello, Montonico bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Condoleo bianco vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Greco Bianco, Guarnaccia, Pecorello, Montonico bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Condoleo Greco nero',
    tipoVino: 'fermo',
    vitigni: ['Greco Nero'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Condoleo Greco nero riserva',
    tipoVino: 'fermo',
    vitigni: ['Greco Nero'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Condoleo rosato',
    tipoVino: 'fermo',
    vitigni: ['Greco Nero, Magliocco canino, Gaglioppo, Aglianico, Calabrese'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Condoleo rosso',
    tipoVino: 'fermo',
    vitigni: ['Greco Nero'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Condoleo rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Greco Nero'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Condoleo rosso passito',
    tipoVino: 'passito',
    vitigni: ['Greco Nero'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Condoleo rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Greco Nero'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Condoleo rosso vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Greco Nero'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Donnici bianco',
    tipoVino: 'fermo',
    vitigni: ['Greco Bianco, Guarnaccia, Pecorello, Montonico bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Donnici bianco passito',
    tipoVino: 'passito',
    vitigni: ['Greco Bianco, Guarnaccia, Pecorello, Montonico bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Donnici bianco vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Greco Bianco, Guarnaccia, Pecorello, Montonico bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Donnici Magliocco',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Donnici Magliocco riserva',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Donnici rosato',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino, Greco Nero'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Donnici rosso',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino, Greco Nero'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Donnici rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino, Greco Nero'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Donnici rosso passito',
    tipoVino: 'passito',
    vitigni: ['Magliocco canino, Greco Nero'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Donnici rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino, Greco Nero'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Donnici rosso vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Magliocco canino, Greco Nero'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Esaro bianco',
    tipoVino: 'fermo',
    vitigni: ['Greco Bianco, Guarnaccia, Pecorello, Montonico bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Esaro bianco passito',
    tipoVino: 'passito',
    vitigni: ['Greco Bianco, Guarnaccia, Pecorello, Montonico bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Esaro bianco vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Greco Bianco, Guarnaccia, Pecorello, Montonico bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Esaro Magliocco',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Esaro Magliocco riserva',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Esaro rosato',
    tipoVino: 'fermo',
    vitigni: ['Greco Nero, Magliocco canino, Gaglioppo, Aglianico, Calabrese'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Esaro rosso',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Esaro rosso passito',
    tipoVino: 'passito',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Esaro rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Esaro rosso vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Gaglioppo',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Greco bianco',
    tipoVino: 'fermo',
    vitigni: ['Greco Bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Greco bianco passito',
    tipoVino: 'passito',
    vitigni: ['Greco Bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Greco bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Greco Bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Greco nero',
    tipoVino: 'fermo',
    vitigni: ['Greco Nero'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Guarnaccia bianca',
    tipoVino: 'fermo',
    vitigni: ['Guarnaccia'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Guarnaccia bianca passito',
    tipoVino: 'passito',
    vitigni: ['Guarnaccia'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Guarnaccia bianca spumante',
    tipoVino: 'spumante',
    vitigni: ['Guarnaccia'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Magliocco',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Magliocco passito',
    tipoVino: 'passito',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Magliocco spumante rosè',
    tipoVino: 'spumante',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Malvasia bianca',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Malvasia bianca passito',
    tipoVino: 'passito',
    vitigni: ['Malvasia bianca'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Malvasia bianca spumante',
    tipoVino: 'spumante',
    vitigni: ['Malvasia bianca'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Montonico bianco',
    tipoVino: 'fermo',
    vitigni: ['Montonico bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Montonico bianco passito',
    tipoVino: 'passito',
    vitigni: ['Montonico bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Montonico bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Montonico bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Pecorello',
    tipoVino: 'fermo',
    vitigni: ['Pecorello'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Pecorello passito',
    tipoVino: 'passito',
    vitigni: ['Pecorello'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Pecorello spumante',
    tipoVino: 'spumante',
    vitigni: ['Pecorello'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Pollino bianco',
    tipoVino: 'fermo',
    vitigni: ['Greco Bianco, Guarnaccia, Pecorello, Montonico bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Pollino bianco passito',
    tipoVino: 'passito',
    vitigni: ['Greco Bianco, Guarnaccia, Pecorello, Montonico bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Pollino bianco vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Greco Bianco, Guarnaccia, Pecorello, Montonico bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Pollino Magliocco',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Pollino Magliocco riserva',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Pollino Moscato passito',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Pollino rosato',
    tipoVino: 'fermo',
    vitigni: ['Greco Nero, Magliocco canino, Gaglioppo, Aglianico, Calabrese'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Pollino rosso',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Pollino rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Pollino rosso passito',
    tipoVino: 'passito',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Pollino rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Pollino rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Pollino rosso superiore riserva',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Pollino rosso vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Greco Nero, Magliocco canino, Gaglioppo, Aglianico, Calabrese'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC rosato spumante',
    tipoVino: 'spumante',
    vitigni: ['Greco Nero, Magliocco canino, Gaglioppo, Aglianico, Calabrese'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC rosso passito',
    tipoVino: 'passito',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC rosso vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC San Vito di Luzzi bianco',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca, Greco Bianco, Guarnaccia'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC San Vito di Luzzi bianco passito',
    tipoVino: 'passito',
    vitigni: ['Malvasia bianca, Greco Bianco, Guarnaccia'],
  },
  {
    denominazioneVino:
      'Terre di Cosenza DOC San Vito di Luzzi bianco vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Malvasia bianca, Greco Bianco, Guarnaccia'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC San Vito di Luzzi Magliocco',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino:
      'Terre di Cosenza DOC San Vito di Luzzi Magliocco riserva',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC San Vito di Luzzi rosato',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo, Magliocco canino, Malvasia bianca'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC San Vito di Luzzi rosso',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo, Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC San Vito di Luzzi rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo, Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC San Vito di Luzzi rosso passito',
    tipoVino: 'passito',
    vitigni: ['Gaglioppo, Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC San Vito di Luzzi rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Gaglioppo, Magliocco canino'],
  },
  {
    denominazioneVino:
      'Terre di Cosenza DOC San Vito di Luzzi rosso vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Gaglioppo, Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Verbicaro bianco',
    tipoVino: 'fermo',
    vitigni: ['Greco Bianco, Malvasia bianca, Guarnaccia'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Verbicaro bianco passito',
    tipoVino: 'passito',
    vitigni: ['Greco Bianco, Malvasia bianca, Guarnaccia'],
  },
  {
    denominazioneVino:
      'Terre di Cosenza DOC Verbicaro bianco vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Greco Bianco, Malvasia bianca, Guarnaccia'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Verbicaro Magliocco',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Verbicaro Magliocco riserva',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Verbicaro Moscato passito',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Verbicaro rosato',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino, Malvasia bianca, Guarnaccia, Greco Bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Verbicaro rosso',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino, Malvasia bianca, Guarnaccia, Greco Bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Verbicaro rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino, Malvasia bianca, Guarnaccia, Greco Bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Verbicaro rosso passito',
    tipoVino: 'passito',
    vitigni: ['Magliocco canino, Malvasia bianca, Guarnaccia, Greco Bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Verbicaro rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Magliocco canino, Malvasia bianca, Guarnaccia, Greco Bianco'],
  },
  {
    denominazioneVino: 'Terre di Cosenza DOC Verbicaro rosso vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Magliocco canino, Malvasia bianca, Guarnaccia, Greco Bianco'],
  },
  {
    denominazioneVino: 'Terre di Offida DOC passito',
    tipoVino: 'passito',
    vitigni: ['Passerina'],
  },
  {
    denominazioneVino: 'Terre di Offida DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Passerina'],
  },
  {
    denominazioneVino: 'Terre di Offida DOC Vino santo',
    tipoVino: 'passito',
    vitigni: ['Passerina'],
  },
  {
    denominazioneVino: 'Terre di Pisa DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Cabernet Sauvignon, Merlot, Syrah'],
  },
  {
    denominazioneVino: 'Terre di Pisa DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Terre Tollesi o Tullum DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Abruzzese, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Terre Tollesi o Tullum DOC bianco superiore',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Abruzzese, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Terre Tollesi o Tullum DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Terre Tollesi o Tullum DOC Falanghina',
    tipoVino: 'fermo',
    vitigni: ['Falanghina'],
  },
  {
    denominazioneVino: 'Terre Tollesi o Tullum DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Terre Tollesi o Tullum DOC novello',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Terre Tollesi o Tullum DOC Passerina',
    tipoVino: 'fermo',
    vitigni: ['Passerina'],
  },
  {
    denominazioneVino: 'Terre Tollesi o Tullum DOC passito bianco',
    tipoVino: 'passito',
    vitigni: ['Malvasia bianca lunga, Moscato bianco'],
  },
  {
    denominazioneVino: 'Terre Tollesi o Tullum DOC passito rosso',
    tipoVino: 'passito',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Terre Tollesi o Tullum DOC Pecorino',
    tipoVino: 'fermo',
    vitigni: ['Pecorino'],
  },
  {
    denominazioneVino: 'Terre Tollesi o Tullum DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Terre Tollesi o Tullum DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Terre Tollesi o Tullum DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Terre Tollesi o Tullum DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Terre Tollesi o Tullum DOCG Passerina',
    tipoVino: 'fermo',
    vitigni: ['Passerina'],
  },
  {
    denominazioneVino: 'Terre Tollesi o Tullum DOCG Pecorino',
    tipoVino: 'fermo',
    vitigni: ['Pecorino'],
  },
  {
    denominazioneVino: 'Terre Tollesi o Tullum DOCG rosso',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Terre Tollesi o Tullum DOCG rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Terre Tollesi o Tullum DOCG spumante',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Tintilia del Molise DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Tintilia'],
  },
  {
    denominazioneVino: 'Tintilia del Molise DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Tintilia'],
  },
  {
    denominazioneVino: 'Tintilia del Molise DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Tintilia'],
  },
  {
    denominazioneVino: 'Todi DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Grechetto'],
  },
  {
    denominazioneVino: 'Todi DOC Grechetto',
    tipoVino: 'fermo',
    vitigni: ['Grechetto'],
  },
  {
    denominazioneVino: 'Todi DOC Grechetto passito',
    tipoVino: 'passito',
    vitigni: ['Grechetto'],
  },
  {
    denominazioneVino: 'Todi DOC Grechetto superiore',
    tipoVino: 'fermo',
    vitigni: ['Grechetto'],
  },
  {
    denominazioneVino: 'Todi DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Todi DOC Merlot superiore',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Todi DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Todi DOC rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Todi DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Todi DOC Sangiovese superiore',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Torgiano rosso riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Torgiano spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot nero'],
  },
  {
    denominazioneVino: 'Torgiano vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Torgiano Vin Santo DOC',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Trebbiano d’Abruzzo DOC',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Abruzzese, Trebbiano Toscano, Bombino bianco'],
  },
  {
    denominazioneVino: 'Trebbiano d’Abruzzo riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Abruzzese, Trebbiano Toscano, Bombino bianco'],
  },
  {
    denominazioneVino: 'Trebbiano d’Abruzzo superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Abruzzese, Trebbiano Toscano, Bombino bianco'],
  },
  {
    denominazioneVino: 'Trentino bianco da due varietà di vite DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Trentino bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay, Pinot bianco'],
  },
  {
    denominazioneVino: 'Trentino bianco riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay, Pinot bianco'],
  },
  {
    denominazioneVino: 'Trentino bianco superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay, Pinot bianco'],
  },
  {
    denominazioneVino: 'Trentino bianco vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Chardonnay, Pinot bianco'],
  },
  {
    denominazioneVino: 'Trentino Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon, Carmènere'],
  },
  {
    denominazioneVino: 'Trentino Cabernet franc DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Trentino Cabernet franc riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Trentino Cabernet franc superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Trentino Cabernet riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon, Carmènere'],
  },
  {
    denominazioneVino: 'Trentino Cabernet sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Trentino Cabernet sauvignon riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Trentino Cabernet sauvignon superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Trentino Cabernet superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon, Carmènere'],
  },
  {
    denominazioneVino: 'Trentino Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Trentino Chardonnay riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Trentino Chardonnay superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Trentino Chardonnay Vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Trentino kretzer o rosato DOC',
    tipoVino: 'fermo',
    vitigni: ['Schiava, Teroldego, Lagrein'],
  },
  {
    denominazioneVino: 'Trentino Lagrein DOC',
    tipoVino: 'fermo',
    vitigni: ['Lagrein'],
  },
  {
    denominazioneVino: 'Trentino Lagrein riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Lagrein'],
  },
  {
    denominazioneVino: 'Trentino Lagrein riserva rosato o kretzer DOC',
    tipoVino: 'fermo',
    vitigni: ['Lagrein'],
  },
  {
    denominazioneVino: 'Trentino Lagrein riserva rubino o dunkel DOC',
    tipoVino: 'fermo',
    vitigni: ['Lagrein'],
  },
  {
    denominazioneVino: 'Trentino Lagrein rosato o kretzer DOC',
    tipoVino: 'fermo',
    vitigni: ['Lagrein'],
  },
  {
    denominazioneVino: 'Trentino Lagrein rubino o dunkel DOC',
    tipoVino: 'fermo',
    vitigni: ['Lagrein'],
  },
  {
    denominazioneVino: 'Trentino Lagrein superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Lagrein'],
  },
  {
    denominazioneVino: 'Trentino Marzemino DOC',
    tipoVino: 'fermo',
    vitigni: ['Marzemino'],
  },
  {
    denominazioneVino: 'Trentino Marzemino riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Marzemino'],
  },
  {
    denominazioneVino: 'Trentino Marzemino superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Marzemino'],
  },
  {
    denominazioneVino: 'Trentino Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Trentino Merlot riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Trentino Merlot superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Trentino Moscato giallo DOC',
    tipoVino: 'fermo',
    vitigni: ['Moscato giallo'],
  },
  {
    denominazioneVino: 'Trentino Moscato giallo liquoroso DOC',
    tipoVino: 'fermo',
    vitigni: ['Moscato giallo'],
  },
  {
    denominazioneVino: 'Trentino Moscato giallo superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Moscato giallo'],
  },
  {
    denominazioneVino: 'Trentino Moscato giallo Vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Moscato giallo'],
  },
  {
    denominazioneVino: 'Trentino Moscato rosa o delle rose DOC',
    tipoVino: 'fermo',
    vitigni: ['Moscato rosa'],
  },
  {
    denominazioneVino: 'Trentino Moscato rosa o delle rose liquoroso DOC',
    tipoVino: 'fermo',
    vitigni: ['Moscato rosa'],
  },
  {
    denominazioneVino: 'Trentino Moscato rosa o delle rose superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Moscato rosa'],
  },
  {
    denominazioneVino:
      'Trentino Moscato rosa o delle rose Vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Moscato rosa'],
  },
  {
    denominazioneVino: 'Trentino Müller Thurgau DOC',
    tipoVino: 'fermo',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino: 'Trentino Müller Thurgau superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino: 'Trentino Müller Thurgau Vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino: 'Trentino Nosiola DOC',
    tipoVino: 'fermo',
    vitigni: ['Nosiola'],
  },
  {
    denominazioneVino: 'Trentino Nosiola superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Nosiola'],
  },
  {
    denominazioneVino: 'Trentino Nosiola Vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Nosiola'],
  },
  {
    denominazioneVino: 'Trentino Pinot bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Trentino Pinot bianco riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Trentino Pinot bianco superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Trentino Pinot bianco Vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Trentino Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Trentino Pinot grigio riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Trentino Pinot grigio superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Trentino Pinot grigio Vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Trentino Pinot nero DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Trentino Pinot nero riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Trentino Pinot nero superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Trentino Rebo DOC',
    tipoVino: 'fermo',
    vitigni: ['Rebo'],
  },
  {
    denominazioneVino: 'Trentino Rebo superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Rebo'],
  },
  {
    denominazioneVino: 'Trentino Riesling italico DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling Italico'],
  },
  {
    denominazioneVino: 'Trentino Riesling renano DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino: 'Trentino Riesling renano riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino: 'Trentino Riesling renano superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino: 'Trentino Riesling renano Vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Riesling'],
  },
  {
    denominazioneVino: 'Trentino rosso da due varietà di vite DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Trentino rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon, Carmènere, Merlot'],
  },
  {
    denominazioneVino: 'Trentino rosso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon, Carmènere, Merlot'],
  },
  {
    denominazioneVino: 'Trentino rosso superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon, Carmènere, Merlot'],
  },
  {
    denominazioneVino: 'Trentino rosso Vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon, Carmènere, Merlot'],
  },
  {
    denominazioneVino: 'Trentino Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Trentino Sauvignon riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Trentino Sauvignon superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Trentino Sauvignon Vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Trentino Sorni bianco DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Nosiola, Müller-Thurgau, Sylvaner verde, Pinot bianco, Pinot grigio, Chardonnay',
    ],
  },
  {
    denominazioneVino: 'Trentino Sorni rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Teroldego, Schiava, Lagrein'],
  },
  {
    denominazioneVino: 'Trentino superiore bianco DOC Vendemmina tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Chardonnay, Pinot bianco'],
  },
  {
    denominazioneVino: 'Trentino superiore Castel Beseno DOC',
    tipoVino: 'fermo',
    vitigni: ['Moscato giallo'],
  },
  {
    denominazioneVino: 'Trentino superiore Castel Beseno passito DOC',
    tipoVino: 'passito',
    vitigni: ['Moscato giallo'],
  },
  {
    denominazioneVino: 'Trentino superiore Castel Beseno Vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Moscato giallo'],
  },
  {
    denominazioneVino: 'Trentino superiore Marzemino d’Isera DOC',
    tipoVino: 'fermo',
    vitigni: ['Marzemino'],
  },
  {
    denominazioneVino: 'Trentino superiore Marzemino Ziresi DOC',
    tipoVino: 'fermo',
    vitigni: ['Marzemino'],
  },
  {
    denominazioneVino: 'Trentino Traminer aromatico DOC',
    tipoVino: 'fermo',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino: 'Trentino Traminer aromatico superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino: 'Trentino Traminer aromatico Vendemmia tardiva DOC',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino: 'Trentino Vino santo DOC',
    tipoVino: 'passito',
    vitigni: ['Nosiola'],
  },
  {
    denominazioneVino: 'Trentino Vino santo superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Nosiola'],
  },
  {
    denominazioneVino: 'Trento DOC (tipo bianco)',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot bianco, Pinot nero, Pinot Meunier'],
  },
  {
    denominazioneVino: 'Trento DOC (tipo rosato o rosé)',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot bianco, Pinot nero, Pinot Meunier'],
  },
  {
    denominazioneVino: 'Trento riserva DOC',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot bianco, Pinot nero, Pinot Meunier'],
  },
  {
    denominazioneVino: 'Val d’Arbia DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Val d’Arbia DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Val d’Arbia DOC Grechetto',
    tipoVino: 'fermo',
    vitigni: ['Grechetto'],
  },
  {
    denominazioneVino: 'Val d’Arbia DOC Pinot bianco',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Val d’Arbia DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Val d’Arbia DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Val d’Arbia DOC Trebbiano',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Val d’Arbia DOC Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Val d’Arbia DOC Vin Santo',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Val d’Arbia DOC Vin Santo riserva',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay, Malvasia bianca lunga, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC bianco spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Malvasia bianca lunga, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Cabernet franc',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Cabernet sauvignon riserva',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Merlot riserva',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Passito',
    tipoVino: 'passito',
    vitigni: ['Malvasia bianca lunga, Chardonnay'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Pietraviva bianco',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon, Chardonnay'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Pietraviva Canaiolo nero',
    tipoVino: 'fermo',
    vitigni: ['Canaiolo nero'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Pietraviva Ciliegiolo',
    tipoVino: 'fermo',
    vitigni: ['Ciliegiolo'],
  },
  {
    denominazioneVino:
      'Val d’Arno di sopra DOC Pietraviva Malvasia bianca lunga',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Pietraviva Malvasia nera',
    tipoVino: 'fermo',
    vitigni: ['Malvasia nera'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Pietraviva Pugnitello',
    tipoVino: 'fermo',
    vitigni: ['Pugnitello'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Pietraviva rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Cabernet Sauvignon, Merlot'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Pietraviva rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Cabernet Sauvignon, Merlot'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Pietraviva Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Pietraviva vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Malvasia bianca lunga, Chardonnay'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Pratomagno bianco',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon, Chardonnay'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Pratomagno Canaiolo nero',
    tipoVino: 'fermo',
    vitigni: ['Canaiolo nero'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Pratomagno Ciliegiolo',
    tipoVino: 'fermo',
    vitigni: ['Ciliegiolo'],
  },
  {
    denominazioneVino:
      'Val d’Arno di sopra DOC Pratomagno Malvasia bianca lunga',
    tipoVino: 'fermo',
    vitigni: ['Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Pratomagno Malvasia nera',
    tipoVino: 'fermo',
    vitigni: ['Malvasia nera'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Pratomagno Pugnitello',
    tipoVino: 'fermo',
    vitigni: ['Pugnitello'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Pratomagno rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Cabernet Sauvignon, Merlot'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Pratomagno rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Cabernet Sauvignon, Merlot'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Pratomagno Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Pratomagno vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Malvasia bianca lunga, Chardonnay'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Cabernet Sauvignon, Syrah'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC rosato spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Merlot, Cabernet Sauvignon, Syrah'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Cabernet Sauvignon, Syrah'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Cabernet Sauvignon, Syrah'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Sangiovese riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Val d’Arno di sopra DOC Syrah',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Val di Cornia DOC Aleatico passito',
    tipoVino: 'passito',
    vitigni: ['Aleatico'],
  },
  {
    denominazioneVino: 'Val di Cornia DOC Ansonica',
    tipoVino: 'fermo',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Val di Cornia DOC Ansonica passito',
    tipoVino: 'passito',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Val di Cornia DOC bianco',
    tipoVino: 'fermo',
    vitigni: [
      'Vermentino, Trebbiano Toscano, Ansonica, Viognier, Malvasia bianca lunga',
    ],
  },
  {
    denominazioneVino: 'Val di Cornia DOC Cabernet sauvignon',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Val di Cornia DOC Ciliegiolo',
    tipoVino: 'fermo',
    vitigni: ['Ciliegiolo'],
  },
  {
    denominazioneVino: 'Val di Cornia DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Val di Cornia DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Merlot, Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Val di Cornia DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Val di Cornia DOC Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Val Polcevera DOC Bianchetta Genovese',
    tipoVino: 'fermo',
    vitigni: ['Bianchetta Genovese'],
  },
  {
    denominazioneVino: 'Val Polcevera DOC Bianchetta Genovese frizzante',
    tipoVino: 'fermo',
    vitigni: ['Bianchetta Genovese'],
  },
  {
    denominazioneVino: 'Val Polcevera DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Vermentino, Bianchetta Genovese, Albarola'],
  },
  {
    denominazioneVino: 'Val Polcevera DOC bianco frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Vermentino, Bianchetta Genovese, Albarola'],
  },
  {
    denominazioneVino: 'Val Polcevera DOC Coronata',
    tipoVino: 'fermo',
    vitigni: ['Vermentino, Bianchetta Genovese, Albarola'],
  },
  {
    denominazioneVino: 'Val Polcevera DOC passito',
    tipoVino: 'passito',
    vitigni: ['Vermentino, Bianchetta Genovese, Albarola'],
  },
  {
    denominazioneVino: 'Val Polcevera DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto, Sangiovese, Ciliegiolo'],
  },
  {
    denominazioneVino: 'Val Polcevera DOC rosato frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Dolcetto, Sangiovese, Ciliegiolo'],
  },
  {
    denominazioneVino: 'Val Polcevera DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto, Sangiovese, Ciliegiolo'],
  },
  {
    denominazioneVino: 'Val Polcevera DOC rosso frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Dolcetto, Sangiovese, Ciliegiolo'],
  },
  {
    denominazioneVino: 'Val Polcevera DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Dolcetto, Sangiovese, Ciliegiolo'],
  },
  {
    denominazioneVino: 'Val Polcevera DOC spumante di qualità',
    tipoVino: 'spumante',
    vitigni: ['Vermentino, Bianchetta Genovese, Albarola'],
  },
  {
    denominazioneVino: 'Val Polcevera DOC Vermentino',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Val Polcevera DOC Vermentino frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Valcalepio bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco, Chardonnay, Pinot grigio'],
  },
  {
    denominazioneVino: 'Valcalepio Moscato passito DOC',
    tipoVino: 'passito',
    vitigni: ['Moscato di Scanzo, Moscato bianco'],
  },
  {
    denominazioneVino: 'Valcalepio rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Merlot'],
  },
  {
    denominazioneVino: 'Valcalepio rosso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon, Merlot'],
  },
  {
    denominazioneVino: 'Valdadige bianco DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Pinot bianco, Pinot grigio, Riesling Italico, Müller-Thurgau, Chardonnay',
    ],
  },
  {
    denominazioneVino: 'Valdadige Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Valdadige Chardonnay frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Valdadige Pinot bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Valdadige Pinot bianco frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Valdadige Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Valdadige rosato DOC',
    tipoVino: 'fermo',
    vitigni: ['Lagrein, Teroldego'],
  },
  {
    denominazioneVino: 'Valdadige rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Lagrein, Teroldego'],
  },
  {
    denominazioneVino: 'Valdadige Schiava DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Valdadige Terra dei Forti Casetta DOC',
    tipoVino: 'fermo',
    vitigni: ['Casetta'],
  },
  {
    denominazioneVino: 'Valdadige Terra dei Forti Casetta riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Casetta'],
  },
  {
    denominazioneVino: 'Valdadige Terra dei Forti Enantio DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Valdadige Terra dei Forti Enantio riserva DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Valdadige Terra dei Forti Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Valdadige Terra dei Forti Pinot grigio superiore DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Valdichiana Toscana DOC bianco',
    tipoVino: 'fermo',
    vitigni: [
      'Trebbiano Toscano, Chardonnay, Pinot bianco, Grechetto, Pinot grigio',
    ],
  },
  {
    denominazioneVino: 'Valdichiana Toscana DOC bianco vergine',
    tipoVino: 'fermo',
    vitigni: [
      'Trebbiano Toscano, Chardonnay, Pinot bianco, Grechetto, Pinot grigio',
    ],
  },
  {
    denominazioneVino: 'Valdichiana Toscana DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Valdichiana Toscana DOC frizzante',
    tipoVino: 'frizzante',
    vitigni: [
      'Trebbiano Toscano, Chardonnay, Pinot bianco, Grechetto, Pinot grigio',
    ],
  },
  {
    denominazioneVino: 'Valdichiana Toscana DOC Grechetto',
    tipoVino: 'fermo',
    vitigni: ['Grechetto'],
  },
  {
    denominazioneVino: 'Valdichiana Toscana DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Cabernet Sauvignon, Cabernet Franc, Merlot, Syrah'],
  },
  {
    denominazioneVino: 'Valdichiana Toscana DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Cabernet Sauvignon, Cabernet Franc, Merlot, Syrah'],
  },
  {
    denominazioneVino: 'Valdichiana Toscana DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Valdichiana Toscana DOC spumante',
    tipoVino: 'spumante',
    vitigni: [
      'Trebbiano Toscano, Chardonnay, Pinot bianco, Grechetto, Pinot grigio',
    ],
  },
  {
    denominazioneVino: 'Valdichiana Toscana DOC Vin Santo',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Valdichiana Toscana DOC Vin Santo riserva',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Valdinievole DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Valdinievole DOC bianco superiore',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Valdinievole DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Canaiolo nero'],
  },
  {
    denominazioneVino: 'Valdinievole DOC rosso superiore',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Canaiolo nero'],
  },
  {
    denominazioneVino: 'Valdinievole DOC Sangiovese',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Valdinievole DOC Vin Santo',
    tipoVino: 'fermo',
    vitigni: ['Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Arnad-Montjovet',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC bianco o blanc',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino:
      'Valle d’Aosta o Vallée d’Aoste DOC Blanc de Morgex et de La Salle',
    tipoVino: 'fermo',
    vitigni: ['Prié blanc'],
  },
  {
    denominazioneVino:
      'Valle d’Aosta o Vallée d’Aoste DOC Blanc de Morgex et de La Salle spumante o mousseux',
    tipoVino: 'spumante',
    vitigni: ['Prié blanc'],
  },
  {
    denominazioneVino:
      'Valle d’Aosta o Vallée d’Aoste DOC Blanc de Morgex et de La Salle vendemmia tardiva o vendange tardive',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Prié blanc'],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Chambave',
    tipoVino: 'fermo',
    vitigni: ['Petit Rouge'],
  },
  {
    denominazioneVino:
      'Valle d’Aosta o Vallée d’Aoste DOC Chambave Moscato o Muscat',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Valle d’Aosta o Vallée d’Aoste DOC Chambave Moscato passito o Muscat flétri',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Chardonnay',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino:
      'Valle d’Aosta o Vallée d’Aoste DOC Chardonnay vendemmia tardiva o vendange tardive',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Cornalin',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Donnas',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Enfer d’Arvier',
    tipoVino: 'fermo',
    vitigni: ['Petit Rouge'],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Fumin',
    tipoVino: 'fermo',
    vitigni: ['Fumin'],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Gamaret',
    tipoVino: 'fermo',
    vitigni: ['Gamaret'],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Gamay',
    tipoVino: 'fermo',
    vitigni: ['Gamay'],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Mayolet',
    tipoVino: 'fermo',
    vitigni: ['Mayolet'],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Merlot',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino:
      'Valle d’Aosta o Vallée d’Aoste DOC Moscato bianco o Muscat petit grain',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Valle d’Aosta o Vallée d’Aoste DOC Moscato bianco o Muscat petit grain vendemmia tardiva o vendange tardive',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino:
      'Valle d’Aosta o Vallée d’Aoste DOC Moscato bianco passito o Muscat petit grain flétri',
    tipoVino: 'passito',
    vitigni: ['Moscato bianco'],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Müller-Thurgau',
    tipoVino: 'fermo',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino:
      'Valle d’Aosta o Vallée d’Aoste DOC Müller-Thurgau vendemmia tardiva o vendange tardive',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Müller-Thurgau'],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Nebbiolo',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Novello o Nouveau',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Nus',
    tipoVino: 'fermo',
    vitigni: ['Vien de Nus, Petit Rouge'],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Nus Malvoisie',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino:
      'Valle d’Aosta o Vallée d’Aoste DOC Nus Malvoisie passito o flétri',
    tipoVino: 'passito',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Passito o Flétri',
    tipoVino: 'passito',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Petit rouge',
    tipoVino: 'fermo',
    vitigni: ['Petit Rouge'],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Petite Arvine',
    tipoVino: 'fermo',
    vitigni: ['Petite Arvine'],
  },
  {
    denominazioneVino:
      'Valle d’Aosta o Vallée d’Aoste DOC Petite Arvine vendemmia tardiva o vendange tardive',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Petite Arvine'],
  },
  {
    denominazioneVino:
      'Valle d’Aosta o Vallée d’Aoste DOC Pinot bianco o Pinot blanc',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino:
      'Valle d’Aosta o Vallée d’Aoste DOC Pinot bianco o Pinot blanc vendemmia tardiva o vendange tardive',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino:
      'Valle d’Aosta o Vallée d’Aoste DOC Pinot grigio o Pinot gris',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino:
      'Valle d’Aosta o Vallée d’Aoste DOC Pinot grigio o Pinot gris vendemmia tardiva o vendange tardive',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino:
      'Valle d’Aosta o Vallée d’Aoste DOC Pinot nero o Pinot noir (vinificazione in rosso)',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino:
      'Valle d’Aosta o Vallée d’Aoste DOC Pinot noir (vinificazione in bianco)',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Prëmetta',
    tipoVino: 'fermo',
    vitigni: ['Prié blanc'],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC rosato o rosé',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC rosso o rouge',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Syrah',
    tipoVino: 'fermo',
    vitigni: ['Syrah'],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Torrette',
    tipoVino: 'fermo',
    vitigni: ['Petit Rouge'],
  },
  {
    denominazioneVino:
      'Valle d’Aosta o Vallée d’Aoste DOC Traminer aromatico o Gewürztraminer',
    tipoVino: 'fermo',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino:
      'Valle d’Aosta o Vallée d’Aoste DOC Traminer aromatico o Gewürztraminer vendemmia tardiva o vendange tardive',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino:
      'Valle d’Aosta o Vallée d’Aoste DOC Traminer aromatico passito o Gewüztraminer flétri',
    tipoVino: 'passito',
    vitigni: ['Gewürztraminer'],
  },
  {
    denominazioneVino: 'Valle d’Aosta o Vallée d’Aoste DOC Vuillermin',
    tipoVino: 'fermo',
    vitigni: ['Vuillermin'],
  },
  {
    denominazioneVino: 'Valli Ossolane DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Valli Ossolane DOC Nebbiolo',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Valli Ossolane DOC Nebbiolo superiore',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Valli Ossolane DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo, Croatina, Merlot'],
  },
  {
    denominazioneVino: 'Valpolicella DOC',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Valpolicella DOC Classico',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Valpolicella DOC Classico superiore',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Valpolicella DOC superiore',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Valpolicella DOC Valpantena',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Valpolicella DOC Valpantena superiore',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Valpolicella Ripasso DOC',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Valpolicella Ripasso DOC Classico',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Valpolicella Ripasso DOC Classico superiore',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Valpolicella Ripasso DOC superiore',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Valpolicella Ripasso DOC Valpantena',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Valpolicella Ripasso DOC Valpantena superiore',
    tipoVino: 'fermo',
    vitigni: ['Corvina, Corvinone, Rondinella'],
  },
  {
    denominazioneVino: 'Valsusa DOC',
    tipoVino: 'fermo',
    vitigni: ['Avanà, Barbera, Dolcetto, Neretta Cuneese'],
  },
  {
    denominazioneVino: 'Valtellina rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Valtellina superiore DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Valtellina superiore Grumello DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Valtellina superiore Inferno DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Valtellina superiore Maroggia DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Valtellina superiore riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Valtellina superiore Sassella DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Valtellina superiore Valgella DOCG',
    tipoVino: 'fermo',
    vitigni: ['Nebbiolo'],
  },
  {
    denominazioneVino: 'Valtenesi Chiaretto DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Valtenesi DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Velletri DOC bianco',
    tipoVino: 'fermo',
    vitigni: [
      'Malvasia bianca di Candia, Malvasia del Lazio, Trebbiano Toscano, Trebbiano giallo',
    ],
  },
  {
    denominazioneVino: 'Velletri DOC riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Montepulciano, Cesanese comune, Cesanese di Affile'],
  },
  {
    denominazioneVino: 'Velletri DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Montepulciano, Cesanese comune, Cesanese di Affile'],
  },
  {
    denominazioneVino: 'Velletri DOC spumante',
    tipoVino: 'spumante',
    vitigni: [
      'Malvasia bianca di Candia, Malvasia del Lazio, Trebbiano Toscano, Trebbiano giallo',
    ],
  },
  {
    denominazioneVino: 'Velletri DOC superiore',
    tipoVino: 'fermo',
    vitigni: [
      'Malvasia bianca di Candia, Malvasia del Lazio, Trebbiano Toscano, Trebbiano giallo',
    ],
  },
  {
    denominazioneVino: 'Venezia Bianco frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Verduzzo Friulano, Verduzzo Trevigiano, Glera'],
  },
  {
    denominazioneVino: 'Venezia Bianco spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Verduzzo Friulano, Verduzzo Trevigiano, Glera'],
  },
  {
    denominazioneVino: 'Venezia Cabernet franc DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc'],
  },
  {
    denominazioneVino: 'Venezia Cabernet sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Venezia Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Venezia Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Venezia Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Venezia Rosato o Rosè DOC',
    tipoVino: 'fermo',
    vitigni: ['Raboso Piave, Raboso Veronese'],
  },
  {
    denominazioneVino: 'Venezia Rosato o rosè frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Raboso Piave, Raboso Veronese'],
  },
  {
    denominazioneVino: 'Venezia Rosato o rosè spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Raboso Piave, Raboso Veronese'],
  },
  {
    denominazioneVino: 'Venezia Rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Verdicchio dei Castelli di Jesi DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Verdicchio dei Castelli di Jesi DOC Classico',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Verdicchio dei Castelli di Jesi DOC Classico superiore',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Verdicchio dei Castelli di Jesi DOC passito',
    tipoVino: 'passito',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Verdicchio dei Castelli di Jesi DOC spumante',
    tipoVino: 'spumante',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Verdicchio di Matelica DOC',
    tipoVino: 'fermo',
    vitigni: [''],
  },
  {
    denominazioneVino: 'Verdicchio di Matelica DOC passito',
    tipoVino: 'passito',
    vitigni: ['Verdicchio'],
  },
  {
    denominazioneVino: 'Verdicchio di Matelica DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Verdicchio'],
  },
  {
    denominazioneVino: 'Verdicchio di Matelica riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Verdicchio'],
  },
  {
    denominazioneVino: 'Verduno Pelaverga o Verduno DOC',
    tipoVino: 'fermo',
    vitigni: ['Pelaverga piccolo'],
  },
  {
    denominazioneVino: 'Vermentino di Gallura DOCG',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Vermentino di Gallura frizzante DOCG',
    tipoVino: 'frizzante',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Vermentino di Gallura passito DOCG',
    tipoVino: 'passito',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Vermentino di Gallura spumante DOCG',
    tipoVino: 'spumante',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Vermentino di Gallura superiore DOCG',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Vermentino di Gallura vendemmia tardiva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Vermentino di Sardegna DOC',
    tipoVino: 'fermo',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Vermentino di Sardegna DOC frizzante',
    tipoVino: 'frizzante',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Vermentino di Sardegna DOC spumante',
    tipoVino: 'spumante',
    vitigni: ['Vermentino'],
  },
  {
    denominazioneVino: 'Vernaccia di Oristano DOC',
    tipoVino: 'fermo',
    vitigni: ['Vernaccia di Oristano'],
  },
  {
    denominazioneVino: 'Vernaccia di Oristano DOC liquoroso',
    tipoVino: 'liquoroso',
    vitigni: ['Vernaccia di Oristano'],
  },
  {
    denominazioneVino: 'Vernaccia di Oristano DOC riserva',
    tipoVino: 'fermo',
    vitigni: ['Vernaccia di Oristano'],
  },
  {
    denominazioneVino: 'Vernaccia di Oristano DOC superiore',
    tipoVino: 'fermo',
    vitigni: ['Vernaccia di Oristano'],
  },
  {
    denominazioneVino: 'Vernaccia di San Gimignano DOCG',
    tipoVino: 'fermo',
    vitigni: ['Vernaccia di San Gimignano'],
  },
  {
    denominazioneVino: 'Vernaccia di San Gimignano riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Vernaccia di San Gimignano'],
  },
  {
    denominazioneVino: 'Vernaccia di Serrapetrona DOCG',
    tipoVino: 'spumante',
    vitigni: ['Vernaccia nera'],
  },
  {
    denominazioneVino: 'Vesuvio DOC bianco',
    tipoVino: 'fermo',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Vesuvio DOC Lacryma Christi bianco',
    tipoVino: 'fermo',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Vesuvio DOC Lacryma Christi bianco liquoroso',
    tipoVino: 'liquoroso',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Vesuvio DOC Lacryma Christi bianco spumante',
    tipoVino: 'spumante',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Vesuvio DOC Lacryma Christi rosato',
    tipoVino: 'fermo',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Vesuvio DOC Lacryma Christi rosso',
    tipoVino: 'fermo',
    vitigni: ['Coda di Volpe'],
  },
  {
    denominazioneVino: 'Vesuvio DOC rosato',
    tipoVino: 'fermo',
    vitigni: ['Piedirosso, Sciascinoso'],
  },
  {
    denominazioneVino: 'Vesuvio DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Piedirosso, Sciascinoso'],
  },
  {
    denominazioneVino: 'Vicenza Bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Vicenza Bianco frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Vicenza Bianco spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Vicenza Cabernet DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon, Carmènere'],
  },
  {
    denominazioneVino: 'Vicenza Cabernet riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Franc, Cabernet Sauvignon, Carmènere'],
  },
  {
    denominazioneVino: 'Vicenza Cabernet sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Vicenza Cabernet sauvignon riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Cabernet Sauvignon'],
  },
  {
    denominazioneVino: 'Vicenza Chardonnay DOC',
    tipoVino: 'fermo',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Vicenza Chardonnay Spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay'],
  },
  {
    denominazioneVino: 'Vicenza Garganego DOC',
    tipoVino: 'fermo',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Vicenza Garganego spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Vicenza Manzoni bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Manzoni bianco'],
  },
  {
    denominazioneVino: 'Vicenza Merlot DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Vicenza Merlot riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Vicenza Moscato DOC',
    tipoVino: 'fermo',
    vitigni: ['Moscato bianco, Moscato giallo'],
  },
  {
    denominazioneVino: 'Vicenza Moscato spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Moscato bianco, Moscato giallo'],
  },
  {
    denominazioneVino: 'Vicenza Novello DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Vicenza Passito DOC',
    tipoVino: 'passito',
    vitigni: ['Garganega'],
  },
  {
    denominazioneVino: 'Vicenza Pinot bianco DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Vicenza Pinot bianco spumante DOC',
    tipoVino: 'spumante',
    vitigni: ['Pinot bianco'],
  },
  {
    denominazioneVino: 'Vicenza Pinot grigio DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot grigio'],
  },
  {
    denominazioneVino: 'Vicenza Pinot nero DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Vicenza Pinot nero riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Pinot nero'],
  },
  {
    denominazioneVino: 'Vicenza Raboso DOC',
    tipoVino: 'fermo',
    vitigni: ['Raboso Veronese'],
  },
  {
    denominazioneVino: 'Vicenza Raboso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Raboso Veronese'],
  },
  {
    denominazioneVino: 'Vicenza Riesling DOC',
    tipoVino: 'fermo',
    vitigni: ['Riesling, Riesling Italico'],
  },
  {
    denominazioneVino: 'Vicenza Rosato DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Vicenza Rosato frizzante DOC',
    tipoVino: 'frizzante',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Vicenza Rosso DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Vicenza Rosso riserva DOC',
    tipoVino: 'fermo',
    vitigni: ['Merlot'],
  },
  {
    denominazioneVino: 'Vicenza Sauvignon DOC',
    tipoVino: 'fermo',
    vitigni: ['Sauvignon'],
  },
  {
    denominazioneVino: 'Viganello DOC bianco',
    tipoVino: 'fermo',
    vitigni: [
      'Trebbiano Toscano, Trebbiano giallo, Malvasia bianca di Candia, Malvasia bianca lunga',
    ],
  },
  {
    denominazioneVino: 'Viganello DOC bianco superiore',
    tipoVino: 'fermo',
    vitigni: [
      'Trebbiano Toscano, Trebbiano giallo, Malvasia bianca di Candia, Malvasia bianca lunga',
    ],
  },
  {
    denominazioneVino: 'Viganello DOC bianco vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: [
      'Trebbiano Toscano, Trebbiano giallo, Malvasia bianca di Candia, Malvasia bianca lunga',
    ],
  },
  {
    denominazioneVino: 'Viganello DOC Greco',
    tipoVino: 'fermo',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Viganello DOC Greco spumante',
    tipoVino: 'spumante',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Viganello DOC Greco vendemmia tardiva',
    tipoVino: 'vendemmia tardiva',
    vitigni: ['Greco'],
  },
  {
    denominazioneVino: 'Viganello DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Ciliegiolo'],
  },
  {
    denominazioneVino: 'Viganello DOC rosso novello',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Ciliegiolo'],
  },
  {
    denominazioneVino: 'Viganello DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese, Ciliegiolo'],
  },
  {
    denominazioneVino: 'Vigneti della Serenissima o Serenissima DOC',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot bianco, Pinot nero'],
  },
  {
    denominazioneVino:
      'Vigneti della Serenissima o Serenissima Millesimato DOC',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot bianco, Pinot nero'],
  },
  {
    denominazioneVino: 'Vigneti della Serenissima o Serenissima Riserva DOC',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot bianco, Pinot nero'],
  },
  {
    denominazioneVino: 'Vigneti della Serenissima o Serenissima rosè DOC',
    tipoVino: 'spumante',
    vitigni: ['Chardonnay, Pinot bianco, Pinot nero'],
  },
  {
    denominazioneVino: 'Villamagna DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Villamagna DOC rosso riserva',
    tipoVino: 'fermo',
    vitigni: ['Montepulciano'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti classico DOC',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti classico DOC Occhio di Pernice',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti DOC',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti DOC Colli Aretini',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti DOC Colli Aretini riserva',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti DOC Colli Fiorentini',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti DOC Colli Fiorentini riserva',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti DOC Colli Senesi',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti DOC Colli Senesi riserva',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti DOC Colline Pisane',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti DOC Colline Pisane riserva',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti DOC Montalbano',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti DOC Montalbano riserva',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti DOC Montespertoli',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti DOC Montespertoli riserva',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti DOC Occhio di Pernice',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Vin Santo del Chianti DOC Occhio di Pernice Colli Aretini',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Vin Santo del Chianti DOC Occhio di Pernice Colli Aretini riserva',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Vin Santo del Chianti DOC Occhio di Pernice Colli Fiorentini',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Vin Santo del Chianti DOC Occhio di Pernice Colli Fiorentini riserva',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Vin Santo del Chianti DOC Occhio di Pernice Colli Senesi',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Vin Santo del Chianti DOC Occhio di Pernice Colli Senesi riserva',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Vin Santo del Chianti DOC Occhio di Pernice Colline Pisane',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Vin Santo del Chianti DOC Occhio di Pernice Colline Pisane riserva',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti DOC Occhio di Pernice Montalbano',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Vin Santo del Chianti DOC Occhio di Pernice Montalbano riserva',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Vin Santo del Chianti DOC Occhio di Pernice Montespertoli',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Vin Santo del Chianti DOC Occhio di Pernice Montespertoli riserva',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti DOC Occhio di Pernice riserva',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti DOC Occhio di Pernice Rufina',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino:
      'Vin Santo del Chianti DOC Occhio di Pernice Rufina riserva',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti DOC Rufina',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti DOC Rufina riserva',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Vin Santo del Chianti riserva DOC',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Vin Santo di Carmignano DOC',
    tipoVino: 'passito',
    vitigni: ['Trebbiano Toscano, Malvasia bianca lunga'],
  },
  {
    denominazioneVino: 'Vin Santo di Carmignano DOC Occhio di Pernice',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Vin Santo di Montepulciano DOC',
    tipoVino: 'passito',
    vitigni: ['Malvasia bianca lunga, Grechetto, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Vin Santo di Montepulciano DOC Occhio di Pernice',
    tipoVino: 'passito',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Vin Santo di Montepulciano DOC riserva',
    tipoVino: 'passito',
    vitigni: ['Malvasia bianca lunga, Grechetto, Trebbiano Toscano'],
  },
  {
    denominazioneVino: 'Vino nobile di Montepulciano DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Vino nobile di Montepulciano riserva DOCG',
    tipoVino: 'fermo',
    vitigni: ['Sangiovese'],
  },
  {
    denominazioneVino: 'Vittoria DOC Ansonica o Inzolia o Insolia',
    tipoVino: 'fermo',
    vitigni: ['Ansonica'],
  },
  {
    denominazioneVino: 'Vittoria DOC Calabrese o Nero d’Avola',
    tipoVino: 'fermo',
    vitigni: ['Calabrese'],
  },
  {
    denominazioneVino: 'Vittoria DOC Frappato',
    tipoVino: 'fermo',
    vitigni: ['Frappato'],
  },
  {
    denominazioneVino: 'Vittoria DOC Novello',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Frappato'],
  },
  {
    denominazioneVino: 'Vittoria DOC rosso',
    tipoVino: 'fermo',
    vitigni: ['Calabrese, Frappato'],
  },
  {
    denominazioneVino: 'Zagarolo DOC',
    tipoVino: 'fermo',
    vitigni: [
      'Malvasia bianca di Candia, Malvasia del Lazio, Trebbiano Toscano, Trebbiano giallo',
    ],
  },
  {
    denominazioneVino: 'Zagarolo DOC superiore',
    tipoVino: 'fermo',
    vitigni: [
      'Malvasia bianca di Candia, Malvasia del Lazio, Trebbiano Toscano, Trebbiano giallo',
    ],
  },
];
