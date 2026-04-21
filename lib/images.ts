import type { Photo, BridePhoto } from '@/types';

/**
 * Wedding gallery images.
 * Sourced from Unsplash (free-to-use) — swap for real couple photos
 * by replacing the `src` URLs (or dropping files into /public and
 * referencing them as "/your-photo.JPG").
 */
export const galleryPhotos: Photo[] = [
  {
    id: 'g1',
    src: '/gallery/02.JPG',
    alt: 'ሙሽራና ሙሽሪት አንድ ጸጥ ያለ ጊዜ ሲካፈሉ',
    caption: 'የመጀመሪያ እይታ',
    span: 'tall',
  },
  {
    id: 'g2',
    src: '/gallery/03.JPG',
    alt: 'በነጭ አበቦች የተሸፈነ የሠርግ ቅስት',
    caption: 'በቅስቱ ሥር ቃል ኪዳን',
    span: 'square',
  },
  {
    id: 'g3',
    src: '/gallery/04.JPG',
    alt: 'ሙሽሪት የአበባ እቅፍ ይዛ',
    caption: 'የእሷ አበባዎች',
    span: 'wide',
  },
  {
    id: 'g4',
    src: '/gallery/05.JPG',
    alt: 'በላስቲክ ላይ ያሉ ቀለበቶች',
    caption: 'ሁለት ቀለበቶች ፣ አንድ ቃል',
    span: 'square',
  },
  {
    id: 'g5',
    src: '/gallery/06.JPG',
    alt: 'በበዓል ላይ ልቅ ሳቅ',
    caption: 'በደስታ ሳቅ',
    span: 'tall',
  },
  {
    id: 'g6',
    src: '/gallery/07.JPG',
    alt: 'በሻማዎች ያጌጠ የበዓል ጠረጴዛ',
    caption: 'ረጅሙ ጠረጴዛ',
    span: 'square',
  },
  {
    id: 'g7',
    src: '/gallery/08.JPG',
    alt: 'በመብራት ሥር የመጀመሪያ ዳንስ',
    caption: 'የመጀመሪያ ዳንስ',
    span: 'wide',
  },
  {
    id: 'g8',
    src: '/gallery/09.JPG',
    alt: 'የሠርግ ኬክ ዝርዝር',
    caption: 'ጣፋጭነት',
    span: 'square',
  },
  {
    id: 'g9',
    src: '/gallery/10.JPG',
    alt: 'እንግዶች ሲከብሩ',
    caption: 'ለደስተኞቹ ጥንዶች',
    span: 'tall',
  },
  {
    id: 'g10',
    src: '/gallery/11.JPG',
    alt: 'ሙሽሮች አብረው ሲሄዱ',
    caption: 'ወደ ዘላለም',
    span: 'square',
  },
  {
    id: 'g11',
    src: '/gallery/12.JPG',
    alt: 'የወርቃማ ሰዓት ምስል',
    caption: 'ወርቃማ ሰዓት',
    span: 'wide',
  },
  {
    id: 'g12',
    src: '/gallery/13.JPG',
    alt: 'በአበባ ቅጠሎች የተሸፈነ መተላለፊያ',
    caption: 'መተላለፊያው',
    span: 'square',
  },
  {
    id: 'g13',
    src: '/gallery/14.JPG',
    alt: 'ቀለበቶችን ሲቀያየሩ የእጆች ቅርብ ምስል',
    caption: '«እስማማለሁ»',
    span: 'tall',
  },
  {
    id: 'g14',
    src: '/gallery/15.JPG',
    alt: 'በእኩለ ሌሊት የበዓል ብልጭታዎች',
    caption: 'በእኩለ ሌሊት ብልጭታ',
    span: 'square',
  },
];

export const bridePhotos: BridePhoto[] = [
  {
    id: 'b1',
    src: '/gallery/16.JPG',
    alt: 'የሙሽሪት ምስል በጋዋን',
    caption: 'የጠዋቱ ዝግጅት',
    description:
      'ከሥነ ሥርዓቱ በፊት ያሉት ጸጥ ያሉ ደቂቃዎች — መጋረጃዋ ብርሃንን ሲይዝ፣ ልቧ በመረጋጋት እና በደስታ መካከል።',
  },
  {
    id: 'b2',
    src: '/gallery/17.JPG',
    alt: 'ሙሽሪት በለስላሳ ብርሃን ውስጥ በአበባ',
    caption: 'በአበባ',
    description:
      'ፒዮኒዎች ፣ የአትክልት ጽጌረዳዎች እና አንዲት ባሕር ዛፍ ቅጠል — ከሚወዷት ጓደኞቿ የተሰበሰቡ።',
  },
  {
    id: 'b3',
    src: 'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?w=1200&q=80&auto=format&fit=crop',
    alt: 'ሙሽሪት ስትሳቅ',
    caption: 'ንጹህ ደስታ',
    description:
      'ከእህቶቿ ጋር በደስታ ስትሳቅ ተይዛለች። ደስታ ፊት ቢኖረው ፣ እንዲህ ይመስላል።',
  },
];
