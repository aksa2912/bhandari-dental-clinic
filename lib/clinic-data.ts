export const CLINIC = {
  name: 'Bhandari Dental Clinic',
  motto: "Your Family's Smile Destination",
  address: 'Defence Bandh Road, 4 no. Chungi, opp. Kapoor Nursing Home, Sirhind, Punjab, India',
  phoneDisplay: '+91 98783 17017',
  phoneRaw: '+919878317017',
  whatsappRaw: '919878317017',
  email: 'care@bhandaridental.in',
  mapsQuery: 'Bhandari Dental Clinic, Defence Bandh Road, Sirhind, Punjab',
}

export const whatsappLink = `https://wa.me/${CLINIC.whatsappRaw}?text=${encodeURIComponent(
  'Hi Bhandari Dental Clinic, I would like to book a dental appointment.',
)}`

export const telLink = `tel:${CLINIC.phoneRaw}`

export const mapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  CLINIC.mapsQuery,
)}`

export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  CLINIC.mapsQuery,
)}&output=embed`

export const galleryImages = [
  { src: '/clinic/chair-green.jpeg', alt: 'Modern dental operatory with fully equipped dental chair' },
  { src: '/clinic/treatment-female.jpeg', alt: 'Dentist examining a patient with a dental assistant' },
  { src: '/clinic/surgery1.jpeg', alt: 'Dentist performing a dental procedure in surgical attire' },
  { src: '/clinic/surgery2.jpeg', alt: 'Dental treatment being carried out with assistant support' },
  { src: '/clinic/waiting-wide.jpeg', alt: 'Spacious and comfortable clinic waiting area' },
  { src: '/clinic/consultation.jpeg', alt: 'Dentist consulting with patients at the reception desk' },
  { src: '/clinic/waiting-stairs.jpeg', alt: 'Clean reception seating with water station' },
]

export const heroSlides = [
  {
    type: 'image',
    src: '/clinic/waiting-wide.jpeg',
    alt: 'Welcoming and comfortable clinic waiting lounge',
  },
  {
    type: 'image',
    src: '/clinic/treatment-female.jpeg',
    alt: 'Dr. Bhandari treating a patient',
  },
  {
    type: 'image',
    src: '/clinic/surgery1.jpeg',
    alt: 'Advanced dental procedure',
  },
  {
    type: 'video',
    src: '/clinic/vid.mp4',
    alt: 'Clinic video',
  },
]
