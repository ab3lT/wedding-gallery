import type { Photo, BridePhoto } from '@/types';

/**
 * Wedding gallery images.
 * Sourced from Unsplash (free-to-use) — swap for real couple photos
 * by replacing the `src` URLs (or dropping files into /public and
 * referencing them as "/your-photo.jpg.JPG").
 */
export const galleryPhotos: Photo[] = [
  {
    id: 'g1',
    src: '/gallery/02.jpg.JPG',
    alt: 'ሙሽራና ሙሽሪት አንድ ጸጥ ያለ ጊዜ ሲካፈሉ',
    caption: 'የመጀመሪያ እይታ',
    span: 'tall',
  },
  {
    id: 'g2',
    src: '/gallery/03.jpg.JPG',
    alt: 'በነጭ አበቦች የተሸፈነ የሠርግ ቅስት',
    caption: 'በቅስቱ ሥር ቃል ኪዳን',
    span: 'square',
  },
  {
    id: 'g3',
    src: '/gallery/04.jpg.JPG',
    alt: 'ሙሽሪት የአበባ እቅፍ ይዛ',
    caption: 'የእሷ አበባዎች',
    span: 'wide',
  },
  {
    id: 'g4',
    src: '/gallery/05.jpg.JPG',
    alt: 'በላስቲክ ላይ ያሉ ቀለበቶች',
    caption: 'ሁለት ቀለበቶች ፣ አንድ ቃል',
    span: 'square',
  },
  {
    id: 'g5',
    src: '/gallery/06.jpg.JPG',
    alt: 'በበዓል ላይ ልቅ ሳቅ',
    caption: 'በደስታ ሳቅ',
    span: 'tall',
  },
  {
    id: 'g6',
    src: '/gallery/07.jpg.JPG',
    alt: 'በሻማዎች ያጌጠ የበዓል ጠረጴዛ',
    caption: 'ረጅሙ ጠረጴዛ',
    span: 'square',
  },
  {
    id: 'g7',
    src: '/gallery/08.jpg.JPG',
    alt: 'በመብራት ሥር የመጀመሪያ ዳንስ',
    caption: 'የመጀመሪያ ዳንስ',
    span: 'wide',
  },
  {
    id: 'g8',
    src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=80&auto=format&fit=crop',
    alt: 'የሠርግ ኬክ ዝርዝር',
    caption: 'ጣፋጭነት',
    span: 'square',
  },
  {
    id: 'g9',
    src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1200&q=80&auto=format&fit=crop',
    alt: 'እንግዶች ሲከብሩ',
    caption: 'ለደስተኞቹ ጥንዶች',
    span: 'tall',
  },
  {
    id: 'g10',
    src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200&q=80&auto=format&fit=crop',
    alt: 'ሙሽሮች አብረው ሲሄዱ',
    caption: 'ወደ ዘላለም',
    span: 'square',
  },
  {
    id: 'g11',
    src: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=1200&q=80&auto=format&fit=crop',
    alt: 'የወርቃማ ሰዓት ምስል',
    caption: 'ወርቃማ ሰዓት',
    span: 'wide',
  },
  {
    id: 'g12',
    src: 'https://images.unsplash.com/photo-1519657337289-077653f724ed?w=1200&q=80&auto=format&fit=crop',
    alt: 'በአበባ ቅጠሎች የተሸፈነ መተላለፊያ',
    caption: 'መተላለፊያው',
    span: 'square',
  },
  {
    id: 'g13',
    src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&q=80&auto=format&fit=crop',
    alt: 'ቀለበቶችን ሲቀያየሩ የእጆች ቅርብ ምስል',
    caption: '«እስማማለሁ»',
    span: 'tall',
  },
  {
    id: 'g14',
    src: 'https://images.unsplash.com/photo-1460364157752-926555421a7e?w=1200&q=80&auto=format&fit=crop',
    alt: 'በእኩለ ሌሊት የበዓል ብልጭታዎች',
    caption: 'በእኩለ ሌሊት ብልጭታ',
    span: 'square',
  },
];

export const bridePhotos: BridePhoto[] = [
  {
    id: 'b1',
    src: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=1200&q=80&auto=format&fit=crop',
    alt: 'የሙሽሪት ምስል በጋዋን',
    caption: 'የጠዋቱ ዝግጅት',
    description:
      'ከሥነ ሥርዓቱ በፊት ያሉት ጸጥ ያሉ ደቂቃዎች — መጋረጃዋ ብርሃንን ሲይዝ፣ ልቧ በመረጋጋት እና በደስታ መካከል።',
  },
  {
    id: 'b2',
    src: 'https://images.unsplash.com/photo-1584535051101-44cd9b7ae40c?w=1200&q=80&auto=format&fit=crop',
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
