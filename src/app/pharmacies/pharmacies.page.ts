import { PharmodalPage } from './../modals/pharmodal/pharmodal.page';
// import { Component, OnInit } from '@angular/core';
import {OnInit, Component, Pipe, NgModule, VERSION} from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.page.html',
  styleUrls: ['./pharmacies.page.scss'],
})
export class PharmaciesPage implements OnInit {
  filterTerm: string;
  category: any = 's1';
  constructor(private navCtrl: NavController, private modalCtrl: ModalController) { }

  pharmRecords = [
    {
      name: 'בית מרקחת פנופארם',
      address: 'מתחם חצי חינם',
      city: ' המרכבה 31',
      phone: 'חולון'
    },
    {
      name: 'טלפארמה עד הבית',
      address: 'טוליפמן 7',
      city: 'ראשון לציון',
      phone: '03-9480444'
    },
    {
      name: 'ס.ל.א מקבוצת טבע',
      address: 'התאנה 1',
      city: ' אזור התעשייה',
      phone: 'חבל מודיעין'
    },
    {
      name: 'לומינרה פארם (פנאקסיה משלוחים)',
      address: 'בת שבע 1',
      city: 'לוד',
      phone: '072-274-4141'
    },
    {
      name: 'אי. אפ. ג\'י. פארם',
      address: 'לוחמי הגטו 6',
      city: 'פתח תקווה',
      phone: '03-9227416'
    },
    {
      name: 'בית מרקחת ברון (מדיקסטור)',
      address: 'טשרניחובסקי 24',
      city: 'כפר סבא',
      phone: '09-7486030'
    },
    {
      name: 'בית מרקחת בריאות (2013)',
      address: 'קראוזה 46',
      city: 'חולון',
      phone: '03-5041911'
    },
    {
      name: 'בית מרקחת גבעול תל אביב',
      address: 'הירקון 288',
      city: 'תל אביב',
      phone: '03-7482000'
    },
    {
      name: 'בית מרקחת גבעת זאב',
      address: 'המכבים 50',
      city: 'גבעת זאב',
      phone: '02-5360444'
    },
    {
      name: 'בית מרקחת גבעת שמואל בע',
      address: 'בן גוריון 11',
      city: 'גבעת שמואל',
      phone: '03-5327063'
    },
    {
      name: 'בית מרקחת דורון',
      address: 'גאולה 6',
      city: 'רעננה',
      phone: '050-8004175'
    },
    {
      name: 'בית מרקחת הנגב בע',
      address: 'קרן קיימת לישראל 94',
      city: 'באר שבע',
      phone: '08-6277016'
    },
    {
      name: 'בית מרקחת טללים בע',
      address: 'שדרות הרצל 102',
      city: 'רמלה',
      phone: '08-9229301'
    },
    {
      name: 'בית מרקחת ישראל',
      address: 'אשכנזי 19',
      city: 'יהוד',
      phone: '03-6326611'
    },
    {
      name: 'בית מרקחת פרמה-שיא',
      address: 'בקעת רמון 10',
      city: 'כפר סבא',
      phone: '077-4107286'
    },
    {
      name: 'בית מרקחת קרייזר מדיקל',
      address: 'בקעת בית נטופה 25',
      city: 'כפר סבא',
      phone: '09-7494071'
    },
    {
      name: 'בית מרקחת פרס נובל',
      address: 'שמעון פרס 33',
      city: 'ראשון לציון',
      phone: '03-9414451'
    },
    {
      name: 'בית מרקחת האני שבתאי לוי',
      address: 'שבתאי לוי 18',
      city: 'חיפה',
      phone: '04-8534143'
    },
    {
      name: 'בית מרקחת תל חי',
      address: 'תל חי 63',
      city: 'אשדוד',
      phone: '08-8678795'
    },
    {
      name: 'שור טבצ\'ניק סניף סגולה',
      address: 'ברגמן צבי 10',
      city: 'פתח תקווה',
      phone: '03-3731999'
    },
    {
      name: 'דרייפינגר סילביה קלרה',
      address: 'וייצמן 169',
      city: 'כפר סבא',
      phone: '09-7659642'
    },
    {
      name: 'הלן פארם בע',
      address: 'אגוז 1',
      city: 'יבנה',
      phone: '08-9436747'
    },
    {
      name: 'העלייה השנייה בית מרקחת בע',
      address: 'העלייה השנייה 44',
      city: 'חיפה',
      phone: '04-8522062'
    },
    {
      name: 'אורנים פארם',
      address: 'שדרות ש',
      city: 'ירושלים',
      phone: '02-6792632'
    },
    {
      name: 'מדי פלוס בר אילן',
      address: 'בר אילן 2',
      city: 'ירושלים',
      phone: '02-5822237'
    },
    {
      name: 'פארם ירוק',
      address: 'הגביש 4',
      city: 'נתניה',
      phone: '09-8305000'
    },
    {
      name: 'מדי פלוס כנפי נשרים',
      address: 'כנפי נשרים 10',
      city: 'ירושלים',
      phone: '02-651-1155'
    },
    {
      name: 'מדיקר עד הבית בע',
      address: 'המעיין 55',
      city: 'מודיעין - מכבים - רעות',
      phone: 'משלוחים לבית המטופל'
    },
    {
      name: 'ביו מקס פארם',
      address: 'הנביאים 1',
      city: 'חולון',
      phone: '073-7424050'
    },
    {
      name: 'נ.נ. פינצ\'י בע',
      address: 'חיבת ציון 43',
      city: 'רמת גן',
      phone: '03-6182821'
    },
    {
      name: 'סופר פארם איכילוב',
      address: 'ויצמן 14',
      city: 'תל אביב',
      phone: '077-8881070'
    },
    {
      name: 'סופר פארם אליהו קורן',
      address: 'אסתר רזיאל נאור 6',
      city: 'ירושלים',
      phone: '077-8882400'
    },
    {
      name: 'סופר פארם ארלוזורוב',
      address: 'דיזנגוף 208',
      city: 'תל אביב',
      phone: '077-8882200'
    },
    {
      name: '077-8881510',
      address: 'שדרות רבין 9',
      city: ' מרכז ביג',
      phone: 'יקנעם'
    },
    {
      name: 'סופר פארם ביג פולג',
      address: 'גיבורי ישראל 5',
      city: 'נתניה',
      phone: '077-8882200'
    },
    {
      name: 'סופר פארם ביג פוריה',
      address: 'המברג 1',
      city: 'טבריה',
      phone: '077-8881580'
    },
    {
      name: 'סופר פארם בית הכרם',
      address: 'אביזהר 1',
      city: 'ירושלים',
      phone: '077-8881210'
    },
    {
      name: 'סופר פארם גבעתיים',
      address: 'דרך יצחק רבין 53',
      city: 'גבעתיים',
      phone: '077-8881200'
    },
    {
      name: 'סופר פארם גדרה',
      address: 'שד\' בן גוריון 105',
      city: 'גדרה',
      phone: '077-8881460'
    },
    {
      name: 'סופר פארם גן יבנה',
      address: 'המגינים 56',
      city: 'גן יבנה',
      phone: '077-8882280'
    },
    {
      name: 'סופר פארם ביג אילת',
      address: 'הסתת 14',
      city: 'אילת',
      phone: '077-8881440'
    },
    {
      name: 'בית מרקחת אבן חן',
      address: 'הלוחמים 9',
      city: 'אבן יהודה',
      phone: '09-8998788'
    },
    {
      name: 'סופר פארם כפר יאסיף',
      address: 'כפר יאסיף',
      city: 'כפר יאסיף',
      phone: '077-8881340'
    },
    {
      name: 'סופר פארם מעלות',
      address: 'שלמה שרירא 3',
      city: 'מעלות תרשיחא',
      phone: '077-8882000'
    },
    {
      name: 'סופר פארם סטאר סנטר אשדוד',
      address: 'ז\'בוטינסקי 41',
      city: 'אשדוד',
      phone: '077-8881170'
    },
    {
      name: 'סופר פארם קניון בית שמש',
      address: 'דרך יצחק רבין 2',
      city: 'בית שמש',
      phone: '077-8881980'
    },
    {
      name: 'סופר פארם קניון טבריה',
      address: 'יהודה הלוי 1',
      city: 'טבריה',
      phone: '077-8882080'
    },
    {
      name: 'סופר פארם גראנד קניון באר שבע',
      address: 'טוביהו דוד 125',
      city: 'באר שבע',
      phone: '077-8882040'
    },
    {
      name: 'סופר פארם גראנד קניון חיפה',
      address: 'גולן שמחה 54',
      city: 'חיפה',
      phone: '077-8882040'
    },
    {
      name: '077-8881400',
      address: 'האר\'\'י',
      city: ' פינת לנטוס',
      phone: 'נתניה'
    },
    {
      name: 'סופר פארם חדרה',
      address: 'רוטשילד 40',
      city: 'חדרה',
      phone: '077-8880850'
    },
    {
      name: 'סופר פארם חורב',
      address: 'חורב 15',
      city: 'חיפה',
      phone: '077-8880130'
    },
    {
      name: 'סופר פארם כרמיאל',
      address: 'מעלה כמון',
      city: 'כרמיאל',
      phone: '​0778880670'
    },
    {
      name: 'סופר פארם אשקלון (דוד אפרידר)',
      address: 'הנשיא 3',
      city: 'אשקלון',
      phone: '077-8881000'
    },
    {
      name: 'סופר פארם עפולה קניון העמקים',
      address: 'יהושע חנקין 14',
      city: 'עפולה',
      phone: '077-8880430'
    },
    {
      name: 'סופר פארם קניון איילון',
      address: 'אבא הלל 301',
      city: 'רמת גן',
      phone: '077-8880100'
    },
    {
      name: 'סופר פארם קניון הזהב',
      address: 'סחרוב דוד 21',
      city: 'ראשון לציון',
      phone: '077-8880320'
    },
    {
      name: 'סופר פארם קניון חולון',
      address: 'גולדה מאיר 7',
      city: 'חולון',
      phone: '077-8880660'
    },
    {
      name: 'סופר פארם קניון מודיעין',
      address: 'לב העיר 2',
      city: 'מודיעין',
      phone: '077-888-1530'
    },
    {
      name: 'סופר פארם קניון מרגליות הוד השרון',
      address: 'ז\'בוטינסקי 3',
      city: 'הוד השרון',
      phone: '077-8880540'
    },
    {
      name: 'סופר פארם קניון עיר ימים',
      address: 'בני ברמן 2',
      city: 'נתניה',
      phone: '077-8881910'
    },
    {
      name: 'סופר פארם קניון רננים',
      address: 'המלאכה 2',
      city: 'רעננה',
      phone: '077-8880680'
    },
    {
      name: 'סופר פארם קריית ביאליק',
      address: 'פלמ\'\'ח 44',
      city: 'קריית ביאליק',
      phone: '077-8880150'
    },
    {
      name: 'סופר פארם קריית חיים',
      address: 'אחי אילת 34',
      city: 'קריית חיים',
      phone: '077-8882350'
    },
    {
      name: 'סופר פארם קריית מוצקין',
      address: 'ירושלים 1',
      city: 'קריית מוצקין',
      phone: '077-8882160'
    },
    {
      name: '077-8880420',
      address: 'הנשיא 4',
      city: ' קניון בני נח',
      phone: 'קריית שמונה'
    },
    {
      name: 'סופר פארם רוטשילד ראשון לציון',
      address: 'רוטשילד 45',
      city: 'ראשון לציון',
      phone: '077-8880460'
    },
    {
      name: 'סופר פארם רמב',
      address: 'העלייה השנייה 8',
      city: 'חיפה',
      phone: '077-8882320'
    },
    {
      name: 'סופר פארם תל מונד',
      address: 'הדקל 47',
      city: 'תל מונד',
      phone: '077-8881960'
    },
    {
      name: 'סופר פארם תלפיות ירושלים',
      address: 'גנרל פייר קניג 24',
      city: 'ירושלים',
      phone: '077-8880950'
    },
    {
      name: 'סופר פארם תמרים אילת',
      address: 'שדרות התמרים 9',
      city: 'אילת',
      phone: '077-8881440'
    },
    {
      name: 'סנא פארם',
      address: 'היוצרים 15',
      city: 'כרמיאל',
      phone: '04-9111785'
    },
    {
      name: 'בית מרקחת המרקחה (לשעבר רצפט בע',
      address: 'שדרות ניצה 8',
      city: 'נתניה',
      phone: '09-7724034'
    },
    {
      name: 'שלאין',
      address: 'אלנבי 138',
      city: 'תל אביב',
      phone: '03-5605371'
    },
    {
      name: 'בורוכוביץ יחזקאל (בית מרקחת הנשיא)',
      address: 'הנשיא ויצמן 42',
      city: 'חדרה',
      phone: '04-6324231'
    },
    {
      name: 'דויטשער פארם בע',
      address: 'מאה שערים 83',
      city: 'ירושלים',
      phone: '02-5827963'
    },
    {
      name: 'בית מרקחת מיני פארם',
      address: 'יוסף שפרינצק 20',
      city: 'פתח תקווה',
      phone: '03-9321067'
    },
    {
      name: 'בית מרקחת אקו פארם',
      address: 'האלוף עוזי נרקיס 9',
      city: 'מעלות תרשיחא',
      phone: '07-95555502'
    },
    {
      name: 'בית מרקחת כנרת',
      address: 'ויצמן 119',
      city: 'כפר סבא',
      phone: '09-7673228'
    },
    {
      name: 'קלאב פארם שלי',
      address: 'השריג 2',
      city: 'בנימינה',
      phone: '04-671-6617'
    },
    {
      name: 'בית מרקחת השרון',
      address: 'רמתיים 55',
      city: 'הוד השרון',
      phone: '09-7450495'
    },
    {
      name: 'סופר פארם רמת ישי',
      address: 'האקליפטוס 3',
      city: 'רמת ישי',
      phone: '077-8882070'
    },
    {
      name: 'סופר פארם תל השומר',
      address: 'עמק האלה מרכז גימיון בי',
      city: 'רמת גן',
      phone: '077-8880240'
    },
    {
      name: '051-5566025',
      address: 'קניון M הדרך',
      city: ' צומת ינאי',
      phone: 'בית חרות'
    },
    {
      name: 'בית מרקחת דרור',
      address: 'דרור 3',
      city: 'ראשון לציון',
      phone: '03-9641025'
    },
    {
      name: 'ורונה פארם',
      address: 'טארק עבד אל-חי 1',
      city: 'טירה',
      phone: '09-7434226'
    },
    {
      name: 'שור טבצ\'ניק סניף תל אביב',
      address: 'המלך ג\'ורג\' 54',
      city: 'תל אביב',
      phone: '03-5288818'
    },
    {
      name: 'בית מרקחת מעיין חיים',
      address: 'טרומפלדור 20',
      city: 'בית דגן',
      phone: '03-9601993'
    },
    {
      name: 'פארמה סיטי מעלות',
      address: 'הרב קוק 18',
      city: 'מעלות תרשיחא',
      phone: '04-9971983'
    },
    {
      name: 'שופרסל Be דיזנגוף סנטר',
      address: 'דיזנגוף 50',
      city: 'תל אביב',
      phone: '03-5332627'
    },
    {
      name: 'סופר פארם גבעת סביון',
      address: 'הגליל 78',
      city: 'גבעת סביון',
      phone: '077-8880120'
    },
    {
      name: 'סופר פארם מגדל ורד גבעתיים',
      address: 'דרך השלום 53',
      city: 'גבעתיים',
      phone: '077-8880970'
    },
    {
      name: 'בית מרקחת גבעול חיפה (אוסקר פארם)',
      address: 'אוסקר שינדלר 7',
      city: 'חיפה',
      phone: '04-6777015'
    },
    {
      name: 'בית מרקחת תפרחת',
      address: 'שדרות ירושלים 29',
      city: 'קרית ים',
      phone: '072-3717444'
    },
    {
      name: 'בית מרקחת רמת אליהו',
      address: 'צייטלין 10',
      city: 'ראשון לציון',
      phone: '03-9610495'
    },
    {
      name: 'סופר פארם ביל',
      address: 'קרית עקרון',
      city: 'רחובות',
      phone: '077-8880520'
    },
    {
      name: 'גרין זון פארמה',
      address: 'הכרמל 2',
      city: 'יקנעם עילית',
      phone: '04-9019515'
    },
    {
      name: 'בית מרקחת מוריה ירושלים',
      address: 'דרך בית לחם 82',
      city: 'ירושלים',
      phone: '02-6734531'
    },
    {
      name: 'בית מרקחת ארמון',
      address: 'משה גוט לוין 48',
      city: 'חיפה',
      phone: '04-8321577'
    },
    {
      name: 'סופר פארם אוסישקין רמת השרון',
      address: 'אוסישקין 62',
      city: 'רמת השרון',
      phone: '077-8881270'
    },
    {
      name: 'בית מרקחת עוזיאל',
      address: 'הרב עוזיאל 20',
      city: 'ירושלים',
      phone: '02-6423805'
    },
    {
      name: 'סופר פארם רמלוד',
      address: 'צופית 40',
      city: 'רמלה',
      phone: '077-8881740'
    },
    {
      name: 'סופר פארם בית אמריקה',
      address: 'רוטשילד 72',
      city: 'פתח תקווה',
      phone: '077-8880050'
    },
    {
      name: 'סופר פארם כופר הישוב',
      address: 'ביאליק 10',
      city: 'רמת גן',
      phone: '077-8880290'
    },
    {
      name: 'סופר פארם היכל פתח תקווה',
      address: 'ההסתדרות 26',
      city: 'פתח תקווה',
      phone: '077-8880590'
    },
    {
      name: 'סופר פארם הדסה עין כרם',
      address: 'הדסה עין כרם 1',
      city: 'ירושלים',
      phone: '077-8881380'
    },
    {
      name: 'סופר פארם אורון',
      address: 'רוטשילד 182',
      city: 'פתח תקווה',
      phone: '077-8880060'
    },
    {
      name: 'סופר פארם פסגת זאב',
      address: 'שדרות משה דיין 106',
      city: 'ירושלים',
      phone: '077-8881160'
    },
    {
      name: 'סופר פארם קניון מבשרת',
      address: 'שדרות החוצבים 10',
      city: 'מבשרת ציון',
      phone: '077-8882480'
    },
    {
      name: ''
    },
    {
      name: '03-5562235',
      address: 'מתחם חצי חינם',
      city: ' המרכבה 31',
      phone: 'חולון'
    },
    {
      name: 'טלפארמה עד הבית',
      address: 'טוליפמן 7',
      city: 'ראשון לציון',
      phone: '03-9480444'
    },
    {
      name: '03-6864340',
      address: 'התאנה 1',
      city: ' אזור התעשייה',
      phone: 'חבל מודיעין'
    },
    {
      name: 'לומינרה פארם (פנאקסיה משלוחים)',
      address: 'בת שבע 1',
      city: 'לוד',
      phone: '072-274-4141'
    },
    {
      name: 'אי. אפ. ג\'י. פארם',
      address: 'לוחמי הגטו 6',
      city: 'פתח תקווה',
      phone: '03-9227416'
    },
    {
      name: 'בית מרקחת ברון (מדיקסטור)',
      address: 'טשרניחובסקי 24',
      city: 'כפר סבא',
      phone: '09-7486030'
    },
    {
      name: 'בית מרקחת בריאות (2013)',
      address: 'קראוזה 46',
      city: 'חולון',
      phone: '03-5041911'
    },
    {
      name: 'בית מרקחת גבעול תל אביב',
      address: 'הירקון 288',
      city: 'תל אביב',
      phone: '03-7482000'
    },
    {
      name: 'בית מרקחת גבעת זאב',
      address: 'המכבים 50',
      city: 'גבעת זאב',
      phone: '02-5360444'
    },
    {
      name: 'בית מרקחת גבעת שמואל בע',
      address: 'בן גוריון 11',
      city: 'גבעת שמואל',
      phone: '03-5327063'
    },
    {
      name: 'בית מרקחת דורון',
      address: 'גאולה 6',
      city: 'רעננה',
      phone: '050-8004175'
    },
    {
      name: 'בית מרקחת הנגב בע',
      address: 'קרן קיימת לישראל 94',
      city: 'באר שבע',
      phone: '08-6277016'
    },
    {
      name: 'בית מרקחת טללים בע',
      address: 'שדרות הרצל 102',
      city: 'רמלה',
      phone: '08-9229301'
    },
    {
      name: 'בית מרקחת ישראל',
      address: 'אשכנזי 19',
      city: 'יהוד',
      phone: '03-6326611'
    },
    {
      name: 'בית מרקחת פרמה-שיא',
      address: 'בקעת רמון 10',
      city: 'כפר סבא',
      phone: '077-4107286'
    },
    {
      name: 'בית מרקחת קרייזר מדיקל',
      address: 'בקעת בית נטופה 25',
      city: 'כפר סבא',
      phone: '09-7494071'
    },
    {
      name: 'בית מרקחת פרס נובל',
      address: 'שמעון פרס 33',
      city: 'ראשון לציון',
      phone: '03-9414451'
    },
    {
      name: 'בית מרקחת האני שבתאי לוי',
      address: 'שבתאי לוי 18',
      city: 'חיפה',
      phone: '04-8534143'
    },
    {
      name: 'בית מרקחת תל חי',
      address: 'תל חי 63',
      city: 'אשדוד',
      phone: '08-8678795'
    },
    {
      name: 'שור טבצ\'ניק סניף סגולה',
      address: 'ברגמן צבי 10',
      city: 'פתח תקווה',
      phone: '03-3731999'
    },
    {
      name: 'דרייפינגר סילביה קלרה',
      address: 'וייצמן 169',
      city: 'כפר סבא',
      phone: '09-7659642'
    },
    {
      name: 'הלן פארם בע',
      address: 'אגוז 1',
      city: 'יבנה',
      phone: '08-9436747'
    },
    {
      name: 'העלייה השנייה בית מרקחת בע',
      address: 'העלייה השנייה 44',
      city: 'חיפה',
      phone: '04-8522062'
    },
    {
      name: 'אורנים פארם',
      address: 'שדרות ש',
      city: 'ירושלים',
      phone: '02-6792632'
    },
    {
      name: 'מדי פלוס בר אילן',
      address: 'בר אילן 2',
      city: 'ירושלים',
      phone: '02-5822237'
    },
    {
      name: 'פארם ירוק',
      address: 'הגביש 4',
      city: 'נתניה',
      phone: '09-8305000'
    },
    {
      name: 'מדי פלוס כנפי נשרים',
      address: 'כנפי נשרים 10',
      city: 'ירושלים',
      phone: '02-651-1155'
    },
    {
      name: 'מדיקר עד הבית בע',
      address: 'המעיין 55',
      city: 'מודיעין - מכבים - רעות',
      phone: 'משלוחים לבית המטופל'
    },
    {
      name: 'ביו מקס פארם',
      address: 'הנביאים 1',
      city: 'חולון',
      phone: '073-7424050'
    },
    {
      name: 'נ.נ. פינצ\'י בע',
      address: 'חיבת ציון 43',
      city: 'רמת גן',
      phone: '03-6182821'
    },
    {
      name: 'סופר פארם איכילוב',
      address: 'ויצמן 14',
      city: 'תל אביב',
      phone: '077-8881070'
    },
    {
      name: 'סופר פארם אליהו קורן',
      address: 'אסתר רזיאל נאור 6',
      city: 'ירושלים',
      phone: '077-8882400'
    },
    {
      name: 'סופר פארם ארלוזורוב',
      address: 'דיזנגוף 208',
      city: 'תל אביב',
      phone: '077-8882200'
    },
    {
      name: '077-8881510',
      address: 'שדרות רבין 9',
      city: ' מרכז ביג',
      phone: 'יקנעם'
    },
    {
      name: 'סופר פארם ביג פולג',
      address: 'גיבורי ישראל 5',
      city: 'נתניה',
      phone: '077-8882200'
    },
    {
      name: 'סופר פארם ביג פוריה',
      address: 'המברג 1',
      city: 'טבריה',
      phone: '077-8881580'
    },
    {
      name: 'סופר פארם בית הכרם',
      address: 'אביזהר 1',
      city: 'ירושלים',
      phone: '077-8881210'
    },
    {
      name: 'סופר פארם גבעתיים',
      address: 'דרך יצחק רבין 53',
      city: 'גבעתיים',
      phone: '077-8881200'
    },
    {
      name: 'סופר פארם גדרה',
      address: 'שד\' בן גוריון 105',
      city: 'גדרה',
      phone: '077-8881460'
    },
    {
      name: 'סופר פארם גן יבנה',
      address: 'המגינים 56',
      city: 'גן יבנה',
      phone: '077-8882280'
    },
    {
      name: 'סופר פארם ביג אילת',
      address: 'הסתת 14',
      city: 'אילת',
      phone: '077-8881440'
    },
    {
      name: 'בית מרקחת אבן חן',
      address: 'הלוחמים 9',
      city: 'אבן יהודה',
      phone: '09-8998788'
    },
    {
      name: 'סופר פארם כפר יאסיף',
      address: 'כפר יאסיף',
      city: 'כפר יאסיף',
      phone: '077-8881340'
    },
    {
      name: 'סופר פארם מעלות',
      address: 'שלמה שרירא 3',
      city: 'מעלות תרשיחא',
      phone: '077-8882000'
    },
    {
      name: 'סופר פארם סטאר סנטר אשדוד',
      address: 'ז\'בוטינסקי 41',
      city: 'אשדוד',
      phone: '077-8881170'
    },
    {
      name: 'סופר פארם קניון בית שמש',
      address: 'דרך יצחק רבין 2',
      city: 'בית שמש',
      phone: '077-8881980'
    },
    {
      name: 'סופר פארם קניון טבריה',
      address: 'יהודה הלוי 1',
      city: 'טבריה',
      phone: '077-8882080'
    },
    {
      name: 'סופר פארם גראנד קניון באר שבע',
      address: 'טוביהו דוד 125',
      city: 'באר שבע',
      phone: '077-8882040'
    },
    {
      name: 'סופר פארם גראנד קניון חיפה',
      address: 'גולן שמחה 54',
      city: 'חיפה',
      phone: '077-8882040'
    },
    {
      name: '077-8881400',
      address: 'האר\'\'י',
      city: ' פינת לנטוס',
      phone: 'נתניה'
    },
    {
      name: 'סופר פארם חדרה',
      address: 'רוטשילד 40',
      city: 'חדרה',
      phone: '077-8880850'
    },
    {
      name: 'סופר פארם חורב',
      address: 'חורב 15',
      city: 'חיפה',
      phone: '077-8880130'
    },
    {
      name: 'סופר פארם כרמיאל',
      address: 'מעלה כמון',
      city: 'כרמיאל',
      phone: '​0778880670'
    },
    {
      name: 'סופר פארם אשקלון (דוד אפרידר)',
      address: 'הנשיא 3',
      city: 'אשקלון',
      phone: '077-8881000'
    },
    {
      name: 'סופר פארם עפולה קניון העמקים',
      address: 'יהושע חנקין 14',
      city: 'עפולה',
      phone: '077-8880430'
    },
    {
      name: 'סופר פארם קניון איילון',
      address: 'אבא הלל 301',
      city: 'רמת גן',
      phone: '077-8880100'
    },
    {
      name: 'סופר פארם קניון הזהב',
      address: 'סחרוב דוד 21',
      city: 'ראשון לציון',
      phone: '077-8880320'
    },
    {
      name: 'סופר פארם קניון חולון',
      address: 'גולדה מאיר 7',
      city: 'חולון',
      phone: '077-8880660'
    },
    {
      name: 'סופר פארם קניון מודיעין',
      address: 'לב העיר 2',
      city: 'מודיעין',
      phone: '077-888-1530'
    },
    {
      name: 'סופר פארם קניון מרגליות הוד השרון',
      address: 'ז\'בוטינסקי 3',
      city: 'הוד השרון',
      phone: '077-8880540'
    },
    {
      name: 'סופר פארם קניון עיר ימים',
      address: 'בני ברמן 2',
      city: 'נתניה',
      phone: '077-8881910'
    },
    {
      name: 'סופר פארם קניון רננים',
      address: 'המלאכה 2',
      city: 'רעננה',
      phone: '077-8880680'
    },
    {
      name: 'סופר פארם קריית ביאליק',
      address: 'פלמ\'\'ח 44',
      city: 'קריית ביאליק',
      phone: '077-8880150'
    },
    {
      name: 'סופר פארם קריית חיים',
      address: 'אחי אילת 34',
      city: 'קריית חיים',
      phone: '077-8882350'
    },
    {
      name: 'סופר פארם קריית מוצקין',
      address: 'ירושלים 1',
      city: 'קריית מוצקין',
      phone: '077-8882160'
    },
    {
      name: '077-8880420',
      address: 'הנשיא 4',
      city: ' קניון בני נח',
      phone: 'קריית שמונה'
    },
    {
      name: 'סופר פארם רוטשילד ראשון לציון',
      address: 'רוטשילד 45',
      city: 'ראשון לציון',
      phone: '077-8880460'
    },
    {
      name: 'סופר פארם רמב',
      address: 'העלייה השנייה 8',
      city: 'חיפה',
      phone: '077-8882320'
    },
    {
      name: 'סופר פארם תל מונד',
      address: 'הדקל 47',
      city: 'תל מונד',
      phone: '077-8881960'
    },
    {
      name: 'סופר פארם תלפיות ירושלים',
      address: 'גנרל פייר קניג 24',
      city: 'ירושלים',
      phone: '077-8880950'
    },
    {
      name: 'סופר פארם תמרים אילת',
      address: 'שדרות התמרים 9',
      city: 'אילת',
      phone: '077-8881440'
    },
    {
      name: 'סנא פארם',
      address: 'היוצרים 15',
      city: 'כרמיאל',
      phone: '04-9111785'
    },
    {
      name: 'בית מרקחת המרקחה (לשעבר רצפט בע',
      address: 'שדרות ניצה 8',
      city: 'נתניה',
      phone: '09-7724034'
    },
    {
      name: 'שלאין',
      address: 'אלנבי 138',
      city: 'תל אביב',
      phone: '03-5605371'
    },
    {
      name: 'בורוכוביץ יחזקאל (בית מרקחת הנשיא)',
      address: 'הנשיא ויצמן 42',
      city: 'חדרה',
      phone: '04-6324231'
    },
    {
      name: 'דויטשער פארם בע',
      address: 'מאה שערים 83',
      city: 'ירושלים',
      phone: '02-5827963'
    },
    {
      name: 'בית מרקחת מיני פארם',
      address: 'יוסף שפרינצק 20',
      city: 'פתח תקווה',
      phone: '03-9321067'
    },
    {
      name: 'בית מרקחת אקו פארם',
      address: 'האלוף עוזי נרקיס 9',
      city: 'מעלות תרשיחא',
      phone: '07-95555502'
    },
    {
      name: 'בית מרקחת כנרת',
      address: 'ויצמן 119',
      city: 'כפר סבא',
      phone: '09-7673228'
    },
    {
      name: 'קלאב פארם שלי',
      address: 'השריג 2',
      city: 'בנימינה',
      phone: '04-671-6617'
    },
    {
      name: 'בית מרקחת השרון',
      address: 'רמתיים 55',
      city: 'הוד השרון',
      phone: '09-7450495'
    },
    {
      name: 'סופר פארם רמת ישי',
      address: 'האקליפטוס 3',
      city: 'רמת ישי',
      phone: '077-8882070'
    },
    {
      name: 'סופר פארם תל השומר',
      address: 'עמק האלה מרכז גימיון בי',
      city: 'רמת גן',
      phone: '077-8880240'
    },
    {
      name: '051-5566025',
      address: 'קניון M הדרך',
      city: ' צומת ינאי',
      phone: 'בית חרות'
    },
    {
      name: 'בית מרקחת דרור',
      address: 'דרור 3',
      city: 'ראשון לציון',
      phone: '03-9641025'
    },
    {
      name: 'ורונה פארם',
      address: 'טארק עבד אל-חי 1',
      city: 'טירה',
      phone: '09-7434226'
    },
    {
      name: 'שור טבצ\'ניק סניף תל אביב',
      address: 'המלך ג\'ורג\' 54',
      city: 'תל אביב',
      phone: '03-5288818'
    },
    {
      name: 'בית מרקחת מעיין חיים',
      address: 'טרומפלדור 20',
      city: 'בית דגן',
      phone: '03-9601993'
    },
    {
      name: 'פארמה סיטי מעלות',
      address: 'הרב קוק 18',
      city: 'מעלות תרשיחא',
      phone: '04-9971983'
    },
    {
      name: 'שופרסל Be דיזנגוף סנטר',
      address: 'דיזנגוף 50',
      city: 'תל אביב',
      phone: '03-5332627'
    },
    {
      name: 'סופר פארם גבעת סביון',
      address: 'הגליל 78',
      city: 'גבעת סביון',
      phone: '077-8880120'
    },
    {
      name: 'סופר פארם מגדל ורד גבעתיים',
      address: 'דרך השלום 53',
      city: 'גבעתיים',
      phone: '077-8880970'
    },
    {
      name: 'בית מרקחת גבעול חיפה (אוסקר פארם)',
      address: 'אוסקר שינדלר 7',
      city: 'חיפה',
      phone: '04-6777015'
    },
    {
      name: 'בית מרקחת תפרחת',
      address: 'שדרות ירושלים 29',
      city: 'קרית ים',
      phone: '072-3717444'
    },
    {
      name: 'בית מרקחת רמת אליהו',
      address: 'צייטלין 10',
      city: 'ראשון לציון',
      phone: '03-9610495'
    },
    {
      name: 'סופר פארם ביל',
      address: 'קרית עקרון',
      city: 'רחובות',
      phone: '077-8880520'
    },
    {
      name: 'גרין זון פארמה',
      address: 'הכרמל 2',
      city: 'יקנעם עילית',
      phone: '04-9019515'
    },
    {
      name: 'בית מרקחת מוריה ירושלים',
      address: 'דרך בית לחם 82',
      city: 'ירושלים',
      phone: '02-6734531'
    },
    {
      name: 'בית מרקחת ארמון',
      address: 'משה גוט לוין 48',
      city: 'חיפה',
      phone: '04-8321577'
    },
    {
      name: 'סופר פארם אוסישקין רמת השרון',
      address: 'אוסישקין 62',
      city: 'רמת השרון',
      phone: '077-8881270'
    },
    {
      name: 'בית מרקחת עוזיאל',
      address: 'הרב עוזיאל 20',
      city: 'ירושלים',
      phone: '02-6423805'
    },
    {
      name: 'סופר פארם רמלוד',
      address: 'צופית 40',
      city: 'רמלה',
      phone: '077-8881740'
    },
    {
      name: 'סופר פארם בית אמריקה',
      address: 'רוטשילד 72',
      city: 'פתח תקווה',
      phone: '077-8880050'
    },
    {
      name: 'סופר פארם כופר הישוב',
      address: 'ביאליק 10',
      city: 'רמת גן',
      phone: '077-8880290'
    },
    {
      name: 'סופר פארם היכל פתח תקווה',
      address: 'ההסתדרות 26',
      city: 'פתח תקווה',
      phone: '077-8880590'
    },
    {
      name: 'סופר פארם הדסה עין כרם',
      address: 'הדסה עין כרם 1',
      city: 'ירושלים',
      phone: '077-8881380'
    },
    {
      name: 'סופר פארם אורון',
      address: 'רוטשילד 182',
      city: 'פתח תקווה',
      phone: '077-8880060'
    },
    {
      name: 'סופר פארם פסגת זאב',
      address: 'שדרות משה דיין 106',
      city: 'ירושלים',
      phone: '077-8881160'
    },
    {
      name: 'סופר פארם קניון מבשרת',
      address: 'שדרות החוצבים 10',
      city: 'מבשרת ציון',
      phone: '077-8882480'
    }
  ];

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    this.category = ev.detail.value;
    console.log(this.category);
  }

  async showModal(name: string, phone: any, city: any, address: any, img: any) {
    const modal = await this.modalCtrl.create({
      component: PharmodalPage,
      backdropDismiss: true,
      componentProps: {
        name,
        phone,
        address,
        city,
        img
      }
    });

    return await modal.present();
  }

  goHome()
  {
    this.navCtrl.navigateBack('home');
  }
}



