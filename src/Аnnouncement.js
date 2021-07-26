// Here is the data file for creating announcements of lost animals
const annos = [
    {
        id:1,
        source_url: "https://www.animalcity.by/propala-koshka-52",
        img_url:"https://www.animalcity.by/sites/default/files/styles/animal/public/4c562458-8866-4848-9843-18bd63dec930.jpeg?itok=Ji7pSFIZ",
        title:"Пропала кошка",
        type:"Бенгальская кошка",
        description:"21.07.21 в СТ «Новые Ясевичи» Минский район рядом с деревнями Дубенцы,Богушово, Городище пропала бенгальская кошка,кличка Тейя,2 года, стерилизована.Очень пугливая, на руки к чужим не идёт, может шипеть.Пропала с закрытого участка, к уличной жизни не приспособлена. Кошка лучший друг ребёнка, ребёнок очень переживает.",
        date:"22.07.2021",
        center: [53.818722, 27.239776],
        cords:[
            [53.823711608631186,27.233200734766594],
            [53.81845530006131,27.23161286702979],
            [53.813249124172245,27.2400242745005],
            [53.81528087987446,27.24950856557715],
            [53.82018208318866,27.24783486715184],
            [53.82449872824452,27.24096841207373],
            [53.824092474815394,27.237063115748043]
        ]
    },
    {
        id:2,
        source_url: "https://www.animalcity.by/poteryan-kot-0",
        img_url:"https://www.animalcity.by/sites/default/files/styles/animal/public/img_20210106_092714.jpg?itok=IbGbpOV1",
        title:"Потерян кот",
        type:"Без породы",
        description:"Очень дружелюбный , доверчивый кот. Возраст 1,5 года. Легко идёт на контакт с посторонними. Выпрыгнул из окна в Минске по ул. Нёманская 83. Кастрирован. Привит. Отзывается на кличку Яша.",
        date:"26.07.2021",
        center: [53.926769, 27.428746],
        cords:[
            [53.92372321812348,27.419904939086837],
            [53.932638514192156,27.427415124328526],
            [53.92871298036295,27.443937531860286],
            [53.920911463762934,27.438015214355403]
        ]
    },
    {
        id:3,
        source_url: "https://www.animalcity.by/poteryalas-koshechka-britanka",
        img_url:"https://www.animalcity.by/sites/default/files/styles/animal/public/viber_image_2021-07-19_11-26-41-230.jpg?itok=gLeFxqhH",
        title:"Потерялась кошечка британка",
        type:"Британская кошка",
        description:"Пропала британская кошка 17.07.21 г. Смолевичский р-н, аг. Заболотье. р-н улиц Куприянова, Купрейчеика, Высокая. Пугливая, темносерая, желтые глаза. Может отозваться на кличку Пуся.ВОзвраст 8 лет, стерилизована. Если ее ктото видел или приютил , свяжитесь с нами, пожалуйста",
        date:"19.07.2021",
        center: [54.003802, 28.031194],
        cords:[
            [54.0071931474835,28.02181750784303],
            [53.9987742679469,28.031087222198497],
            [54.00327466262403,28.03821116934203],
            [54.008128472943696,28.024349513153066],
        ]
    },
    {
        id:4,
        source_url: "https://www.animalcity.by/poteryalsya-belyy-kot-1",
        img_url:"https://www.animalcity.by/sites/default/files/styles/animal/public/20210708_200811.jpg?itok=uzwFGjLf",
        title:"Потерялся белый кот",
        type:"Без породы",
        description:"Белый пушистый кот с голубыми глазами и рыжими метинами на носу и ушах выпал с балкона 4 этажа. Ул.Марата дом 2",
        date:"18.07.2021",
        center: [53.859913, 27.566116],
        cords:[
            [53.86146690203843,27.56107344705198],
            [53.858209652145035,27.560510853547925],
            [53.858970750761294,27.572291115541322],
            [53.86209110967915,27.571583012361405]
        ]
    },
    {
        id:5,
        source_url: "https://www.animalcity.by/propala-nemeckaya-ovcharka-1",
        img_url:"https://www.animalcity.by/sites/default/files/styles/animal/public/foto_irmy_2.jpg?itok=OFTkKPVr",
        title:"ПРОПАЛА НЕМЕЦКАЯ ОВЧАРКА",
        type:"Немецкая овчарка",
        description:"13 июля 2021г. пропала немецкая овчарка, чепрачная, девочка 5 лет, убежала перед грозой со двора недалеко от ж.д ст. Бережа, недалеко от г.Фаниполь. Собака ласковая и доверчивая. С прививками, чипирована, стерилизована. На правой передней лапе деформирован средний палец. Очень ждем и волнуемся. Звоните в любое время.",
        date:"16.07.2021",
        center: [53.729279, 27.320914],
        cords:[
            [53.72171340258717,27.291229534057578],
            [53.716622441257456,27.32659177770993],
            [53.73123183892708,27.332857417968704],
            [53.737593222898205,27.320926952270465]
        ]
    },
    {
        id:6,
        source_url: "https://www.animalcity.by/poteryalsya-belyy-kot-0",
        img_url:"https://www.animalcity.by/sites/default/files/styles/animal/public/img_20210627_232147.jpg?itok=eDLP57_O",
        title:"Потерялся белый кот!",
        type:"Без породы",
        description:"Белый кот, глаза карие, откликается на кличку Милки, потерялся в районе ул. Червякова 2 к 3",
        date:"14.07.2021",
        center: [53.920391, 27.554339],
        cords:[
            [53.922638751017665,27.548287936462405],
            [53.917901598144695,27.553030082000742],
            [53.917597591286466,27.556613513244642],
            [53.92282873251667,27.559553214324964],
            [53.92327201930306,27.553673812164316]
        ]
    },
    {
        id:7,
        source_url: "https://www.animalcity.by/propala-koshka-klichka-laki",
        img_url:"https://www.animalcity.by/sites/default/files/styles/animal/public/2021_0612_11350200.jpg?itok=LSbyXZbh",
        title:"Пропала кошка. Кличка Лаки",
        type:"Без породы",
        description:"Пропала черная зеленоглазая кошка в районе журфака БГУ. Отзывается на Лаки и булочка. Последний раз видели 25.06 в районе 11 вечера",
        date:"26.06.2021",
        center: [53.905502, 27.532735],
        cords:[
            [53.908727916273726,27.529673206329296],
            [53.90307684516018,27.52872906875604],
            [53.905230931461944,27.540917026519725]
        ]
    },
    {
        id:8,
        source_url: "https://www.animalcity.by/propal-kot-vecherom-200621-posle-20-chasov-vypal-iz-balkona-3-go-etazha",
        img_url:"https://www.animalcity.by/sites/default/files/styles/animal/public/screenshot_2021-06-21-19-55-47.png?itok=SSQKHzjk",
        title:"Пропал Кот, вечером 20.06.21 после 20 часов, выпал из балкона 3-го этажа.",
        type:"Без породы",
        description:"Кличка: Мартин. Чуть более 2-х лет.С гладкой шерсткой серого цвета. Жёлтые глаза, сам не очень крупный. МОЖНО РАСПОЗНАТЬ ПО ОШЕЙНИКУ, БЛЕДНО-ГОЛУБОГО/СЕРОГО ЦВЕТА. 20.06.21 В день пропажи между 3-м и 4-м подъездом был замечен возле кустов и деревьев прямо под балконами нашего двора 97-го дома по улице Рафиева возле подвальных помещений вокруг дома.",
        date:"21.06.2021",
        center: [53.857996, 27.435788],
        cords:[
            [53.86462353834149,27.427291261840793],
            [53.85658264948439,27.43167816037898],
            [53.85015177345442,27.439463246203417],
            [53.85426233583685,27.44641553197003],
            [53.86245042651625,27.443048165217895],
            [53.86591919381971,27.434788449222687]
        ]
    },
    {
        id:9,
        source_url: "https://www.animalcity.by/propala-koshka-s-kotenkom#",
        img_url:"https://www.animalcity.by/sites/default/files/styles/animal/public/img-bbd86a7e3a3341215d06fe980ee1bf59-v_0.jpg?itok=PBMMsye-",
        title:"Пропала кошка с котенком",
        type:"Без породы, котёнок - шотландский",
        description:"Пропала кошка с котёнком (котенок вислоухий )выпрыгнули с балкона улица Берута дом 17 в районе мухли",
        date:"13.06.2021",
        center: [53.901042, 27.507438],
        cords:[
            [53.903633922923284,27.502931888854864],
            [53.897842756454004,27.506193455016977],
            [53.90046598866643,27.51580649212636],
            [53.90587761649263,27.51262207991653],
        ]
    },
    {
        id:10,
        source_url: "https://www.animalcity.by/propal-pekines",
        img_url:"https://www.animalcity.by/sites/default/files/styles/animal/public/rizulka_1.jpg?itok=z25JWkqd",
        title:"Пропал пекинес",
        type:"Пекинес",
        description:"Потерялся рыжий пекинес около школы №4 г. Новополоцка. Откликается на кличку Моника. Кто о знает о местонахождении Моники, просьба сообщить по телефону: +375 (33) 305-25-71 Вознаграждение гарантировано!",
        date:"01.06.2021",
        center: [55.527688, 28.666424],
        cords:[
            [55.52735748199068,28.65405904223626],
            [55.522634640676806,28.66251336505118],
            [55.529158828142364,28.673070539733818],
            [55.53366183108599,28.660153021118088]
        ]
    },
]
export default annos;
