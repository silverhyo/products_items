let count = document.getElementById('count');
let submitButton = document.getElementById('submit');
// ======================================우리 FAS 담당자들의 정보 입력 (DataBase화)

class FAS {
    id='';
    dataname='';
    koreaname='';
    englishname='';
    position='';
    role='';
    tel='';
    email='';
    constructor(id, dataneme, koreaname, englishname, position, role, tel, email){
        this.id = id
        this.dataname = dataneme
        this.koreaname = koreaname
        this.englishname = englishname
        this.position = position
        this.role = role
        this.tel = tel
        this.email = email
    }
};

let SFDC = {
    address: 'https://www.sartorius.co.kr/help/'
};

let 김서윤 = new FAS(1, 'fas01', '김서윤', 'April.kim', '부장', 'Filed Application Specialist', '010-5877-0776', 'april.kim@sartorius.co.kr');
let 장두재 = new FAS(2, 'fas02', '장두재', 'doojae.jang', '과장', 'Filed Application Specialist', '010-7295-2028', 'doojae.jang@sartorius.co.kr');
let 김현덕 = new FAS(3, 'fas03', '김현덕', 'samantha.kim', '과장', 'Filed Application Specialist', '010-', '.kim@sartorius.co.kr');
let 이윤서 = new FAS(4, 'fas04', '이윤서', 'samantha.lee', '대리', 'Filed Application Specialist', '010-7640-0958', 'samantha.leeg@sartorius.co.kr');
let 신재호 = new FAS(5, 'fas05', '신재호', 'samantha.lee', '사원', 'Filed Application Specialist', '010-8011-1096', 'harvey.shin@sartorius.co.kr');


// =================================================등록된 PRODUCT의 정보 입력
let listProducts = [
    {
        id: 1,
        product_type: 'Media',
        productname: '4Cell SmartCHO Media',
        dataname: 'd_01',
        information: {
            manufacturer: 'Sartorius',
            application: ['mAb'],
            target: ['CHO', 'CHODG44', 'CHOK1', 'CHOS', 'CHOGS'],
            productimage: 'image_smart/Sartorius_4Cell-SmartCHO-Stock+Adaption-Medium-Liquid-1L-B-0002845-White.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/70.CHO-Media-and-Feed-Portfolio-Datasheet.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong><br>
            CHO, CHO-DG44, CHO-K1, CHO-GS, CHO-S에 사용가능한 media 입니다.
            </p><br>` + 
            
            `<p>
            <strong>Features</strong><br>
            ▶ Process : Fed-Batch 적용<br>
            ▶ Chemically Defined<br>
            ▶ Serum-Free / Animal Component-Free<br>
            ▶ For further Manufacturing (생산용)<br>
            ▶ Bottle 또는 Bag 으로 공급 (다양한 size 가능)<br>
            ▶ Production Method : Stable Expression<br>
            ▶ Stock & Adaptation medium + Production medium + Feed A,B<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 장두재.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 2,
        product_type: 'Media',
        productname: '4Cell SmartCHOpe Media',
        dataname: 'd_02',
        information: {
            manufacturer: 'Sartorius',
            application: 'mAb',
            target: ['CHO', 'CHODG44', 'CHOK1', 'CHOS', 'CHOGS'],
            productimage: 'image_smart/Sartorius 4Cell-SmartCHOpe-Production-Medium-Powder-50L-B-0002857-White.jpg',
            productbrand: 'MERCK',
            productmaterial: 'datasheet/71.CHO-Media-and-Feed-Portfolio-Datasheet.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong><br>
            CHO, CHO-DG44, CHO-K1, CHO-GS, CHO-S에 사용가능한 media 입니다.
            </p><br>` + 
            
            `<p>
            <strong>Features</strong><br>
            ▶ Process : Perfusion 적용<br>
            ▶ Chemically Defined<br>
            ▶ Serum-Free / Animal Component-Free<br>
            ▶ For further Manufacturing (생산용)<br>
            ▶ Bottle 또는 Bag 으로 공급 (다양한 size 가능)<br>
            ▶ Production Method : Stable Expression<br>
            ▶ Stock & Adaptation medium + Production medium + Feed A,B<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 장두재.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 3,
        product_type: 'Media',
        productname: 'TCX10D',
        dataname: 'd_03',
        information: {
            manufacturer: 'Xell',
            application: 'mAb',
            target: ['CHOGS', 'CHO'],
            productimage: 'image_smart/TCX10D_Medium.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/72.CHO-Media-and-Feed-Portfolio-Datasheet-en-B.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Chemically Defined<br>
            ▶ Serum-Free / Animal Component-Free / Hydroysate-Free<br>
            ▶ Little or no adaptation required from other serum-free media<br>
            ▶ w/o L-glutamine<br>
            ▶ w/ HT (Hypoxanthine/Thymidine)<br>
            ▶ w/o HEPES<br>
            ▶ w/ NaHCO3<br>
            ▶ For Further Manufacturing (생산용)<br>
            ▶ Bottle 또는 Bag 으로 공급 (다양한 size 가능)<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 장두재.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 4,
        product_type: 'Media',
        productname: 'TCX6D',
        dataname: 'd_04',
        information: {
            manufacturer: 'Xell',
            application: 'mAb',
            target: ['CHO', 'CHODG44', 'CHOK1', 'CHOS'],
            productimage: 'image_smart/TCX6D Medium.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/74.CHO-Media-and-Feed-Portfolio-Datasheet-en-B.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Chemically Defined<br>
            ▶ Serum-Free / Animal Component-Free / Hydroysate-Free<br>
            ▶ Little or no adaptation required from other serum-free media<br>
            ▶ Supports stable growth of suspension cells at high viability in seed train culture<br>
            ▶ with Growth factor LONG®R3IGF-I<br>
            ▶ without L-glutamine<br>
            ▶ with HT(Hypoxanthine/Thymidine)<br>
            ▶ For Further Manufacturing (생산용)<br>
            ▶ Bottle 또는 Bag 으로 공급 (다양한 size 가능)<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 장두재.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 5,
        product_type: 'Media',
        productname: 'TC-42 w/o GF Medium',
        dataname: 'd_05',
        information: {
            manufacturer: 'Xell',
            application: 'mAb',
            target: ['CHO', 'CHODG44', 'CHOK1', 'CHOS'],
            productimage: 'image_smart/TCX7D_Medium.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/75.CHO-Media-and-Feed-Portfolio-Datasheet-en-B.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Chemically Defined<br>
            ▶ Serum-Free / Animal Component-Free / Hydroysate-Free<br>
            ▶ Little or no adaptation required from other serum-free media<br>
            ▶ Supports stable growth of suspension cells at high viability in seed train culture<br>
            ▶ without L-glutamine<br>
            ▶ with HT(Hypoxanthine/Thymidine)<br>
            ▶ For Further Manufacturing (생산용)<br>
            ▶ Bottle 또는 Bag 으로 공급 (다양한 size 가능)<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 장두재.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 6,
        product_type: 'Media',
        productname: 'TCX7D Feed',
        dataname: 'd_06',
        information: {
            manufacturer: 'Xell',
            application: 'mAb',
            target: '',
            productimage: 'image_smart/TCX7D_Medium.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/76.CHO-Media-and-Feed-Portfolio-Datasheet-en-B.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Chemically Defined<br>
            ▶ Serum-Free / Animal Component-Free / Hydroysate-Free<br>
            ▶ Little or no adaptation required from other serum-free media<br>
            ▶ without L-glutamine<br>
            ▶ with HT(Hypoxanthine/Thymidine)<br>
            ▶ Bottle 또는 Bag 으로 공급 (다양한 size 가능)<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 장두재.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 7,
        product_type: 'Media',
        productname: 'CHO TF',
        dataname: 'd_07',
        information: {
            manufacturer: 'Xell',
            application: 'mAb',
            target: ['CHO', 'CHODG44', 'CHOK1', 'CHOS', 'CHOGS'],
            productimage: 'image_smart/CHO_TF.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/77.CHO-Media-and-Feed-Portfolio-Datasheet-en-B.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Chemically Defined<br>
            ▶ Serum-Free / Animal Component-Free / Hydroysate-Free<br>
            ▶ Little or no adaptation required from other serum-free media<br>
            ▶ Compatibility with cationic transfection reagents (e.g. PEI) facilitates simplified transfection.<br>
            ▶ without L-glutamine<br>
            ▶ without growth factor<br>
            ▶ Bottle 또는 Bag 으로 공급 (다양한 size 가능)<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 장두재.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 8,
        product_type: 'Media',
        productname: 'HEK GM',
        dataname: 'd_08',
        information: {
            manufacturer: 'Xell',
            application: ['Vaccine', 'CGT', 'mAb', 'Proteins'],
            target: ['HEK293', 'HEK293T', 'HEK293F3F6'],
            productimage: 'image_smart/HEK_GM.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/78.HEK-Media-and-Feed-Portfolio-Datasheet-en-B-Sartorius.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Chemically Defined<br>
            ▶ Production Method : Infection / Induction<br>
            ▶ Serum-Free / Animal Component-Free / Hydroysate-Free<br>
            ▶ Little or no adaptation required from other serum-free media<br>
            ▶ Supports stable growth of suspension cells at high viability in seed train culture<br>
            ▶ with HT (Hypoxanthine/Thymidine)<br>
            ▶ with Growth Factor<br>
            ▶ with Anti crumping agent<br>
            ▶ without L-glutamine<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 장두재.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 9,
        product_type: 'Media',
        productname: 'HEK TF',
        dataname: 'd_09',
        information: {
            manufacturer: 'Xell',
            application: ['Vaccine', 'CGT', 'mAb', 'Proteins'],
            target: ['HEK293', 'HEK293T', 'HEK293F3F6'],
            productimage: 'image_smart/HEK_TF.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/79.HEK-Media-and-Feed-Portfolio-Datasheet-en-B-Sartorius.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Chemically Defined<br>
            ▶ Medium ~ High Nutrient<br>
            ▶ Serum-Free / Animal Component-Free / Hydroysate-Free<br>
            ▶ Little or no adaptation required from other serum-free media<br>
            ▶ Feasible for microcarrier bead production processes<br>
            ▶ with HT (Hypoxanthine/Thymidine)<br>
            ▶ with Growth Factor<br>
            ▶ without L-glutamine<br>
            ▶ Bottle 또는 Bag 으로 공급 (다양한 size 가능)<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 장두재.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 10,
        product_type: 'Media',
        productname: 'HEK ViP_NB',
        dataname: 'd_10',
        information: {
            manufacturer: 'Xell',
            application: ['Vaccine', 'CGT', 'mAb', 'Proteins'],
            target: ['HEK293', 'HEK293T', 'HEK293F3F6'],
            productimage: 'image_smart/HEK_TF.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/80.HEK-Media-and-Feed-Portfolio-Datasheet-en-B-Sartorius.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Chemically Defined<br>
            ▶ Medium ~ High Nutrient<br>
            ▶ Serum-Free / Animal Component-Free / Hydroysate-Free<br>
            ▶ Little or no adaptation required from other serum-free media<br>
            ▶ Feasible for microcarrier bead production processes<br>
            ▶ Optimized for virus/viral vector production<br>
            ▶ with HT (Hypoxanthine/Thymidine)<br>
            ▶ without L-glutamine / phenol red / Growth Factor<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 장두재.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 11,
        product_type: 'Media',
        productname: 'HEK ViP NX',
        dataname: 'd_11',
        information: {
            manufacturer: 'Xell',
            application: ['Vaccine', 'CGT', 'mAb', 'Proteins'],
            target: ['HEK293', 'HEK293T', 'HEK293F3F6'],
            productimage: 'image_smart/HEK-ViP-NX-Medium.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/81.HEK-Media-and-Feed-Portfolio-Datasheet-en-B-Sartorius'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Chemically Defined<br>
            ▶ Production Method : Transfection / Infection / Induction<br>
            ▶ Highest Nutrient
            ▶ Serum-Free / Animal Component-Free / Hydroysate-Free<br>
            ▶ Little or no adaptation required from other serum-free media<br>
            ▶ Feasible for microcarrier bead production processes<br>
            ▶ Optimized for virus/viral vector production<br>
            ▶ with HT (Hypoxanthine/Thymidine)<br>
            ▶ without L-glutamine / Growth Factor<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 장두재.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 12,
        product_type: 'Media',
        productname: 'HEK FS_2 Feed',
        dataname: 'd_12',
        information: {
            manufacturer: 'Xell',
            application: ['Vaccine', 'CGT', 'mAb', 'Proteins'],
            target: ['HEK293', 'HEK293T', 'HEK293F3F6'],
            productimage: 'image_smart/HEK-ViP-NX-Medium.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/82.HEK-Media-and-Feed-Portfolio-Datasheet-en-B.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Chemically Defined<br>
            ▶ Serum-Free / Animal Component-Free / Hydroysate-Free<br>
            ▶ Little or no adaptation required from other serum-free media<br>
            ▶ without L-glutamine<br>
            ▶ Bottle 또는 Bag 으로 공급 (다양한 size 가능)<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 장두재.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 13,
        product_type: 'Media',
        productname: 'MDXK',
        dataname: 'd_13',
        information: {
            manufacturer: 'Xell',
            application: ['Vaccine', 'CGT', 'mAb', 'Proteins'],
            target: ['MDCK', 'MDBK'],
            productimage: 'image_smart/Xell MDXK Liquid.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/82.HEK-Media-and-Feed-Portfolio-Datasheet-en-B.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Chemically Defined<br>
            ▶ Animal Component-Free / Protein-Free<br>
            ▶ For Further Manufacturing (생산용)<br>
            ▶ Bottle 또는 Bag 으로 공급 (다양한 size 가능)<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 장두재.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 14,
        product_type: 'Media',
        productname: 'BHK',
        dataname: 'd_14',
        information: {
            manufacturer: 'Xell',
            application: ['Vaccine', 'CGT', 'mAb', 'Proteins'],
            target: ['BHK-21_Cell'],
            productimage: 'image_smart/4Cell-BHK-21-1L-Bottle-en-B-0000130-White-Sartorius.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/84.4Cell-BHK-21-CD-Medium-Datasheet-en-B-2570068-Sartorius.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Chemically Defined<br>
            ▶ Animal Component-Free / Protein-Free<br>
            ▶ For Further Manufacturing (생산용)<br>
            ▶ Bottle 또는 Bag 으로 공급 (다양한 size 가능)<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 장두재.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 15,
        product_type: 'Media',
        productname: '4CellNutriVero',
        dataname: 'd_15',
        information: {
            manufacturer: 'Xell',
            application: ['Vaccine', 'CGT', 'mAb', 'Proteins'],
            target: ['VERO'],
            productimage: 'image_smart/4Cell-NutriVero-1L-Bottle-en-B-0000326-White-Sartorius.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/85.4Cell-NutriVero-Flex-10-Medium-Datasheet-en-B'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Chemically Defined<br>
            ▶ Serum-Free / Animal Component-Free<br>
            ▶ Recombinant Protein (Very low conc. 5mg/L)<br>
            ▶ For Further Manufacturing (생산용)<br>
            ▶ Bottle 또는 Bag 으로 공급 (다양한 size 가능)<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 장두재.tel,
            mail: SFDC.address,
        }
    },
    //===========================================================Cellgenix
    {
        id: 16,
        product_type: 'Media',
        productname: 'Cellgenix GMP SCGM Medium',
        dataname: 'd_16',
        information: {
            manufacturer: 'Cellgenix',
            application: ['CellTherapy'],
            target: ['HSC', 'NKCell'],
            productimage: 'image_cellgenix/CellGenix_SCGM_Bottle_Bag_PhenolRed.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/01.Data-Sheet_GMP-SCGM_ME-DS-2002f.pdf'
        }, 
        feature: {
            point01:  `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Serum-Free, Xeno-Free<br>
            ▶ GMP grade<br>
            ▶ DMF: US, Japan'<br>
            ▶ HSC, NK 세포 배양 배지<br>
            ▶ [20802-0500] Cellgenix GMP SCGM Medium<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 이윤서.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 17,
        product_type: 'Media',
        productname: 'Cellgenix GMP DC Medium',
        dataname: 'd_17',
        information: {
            manufacturer: 'Cellgenix',
            application: ['CellTherapy'],
            target: ['HSC', 'NKCell'],
            productimage: 'image_cellgenix/CellGenix_DC_Bottle_Bag_wo_PhenolRed.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/02.Data Sheet_GMP DC_ME-DS-2001j.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Serum-Free / Xeno-Free<br>
            ▶ GMP grade<br>
            ▶ For Research and Further Manufacturing<br>
            ▶ US FDA DMF<br>
            ▶ Dendritic cell (DC) 세포 배양 배지<br>
            ▶ [20801-0500] CellGenix® GMP DC Medium, Phenol Red<br>
            ▶ [20805-0500] CellGenix® GMP DC Medium, Phenol Red Free<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 이윤서.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 18,
        product_type: 'Media',
        productname: 'Cellgenix GMP TCM Medium',
        dataname: 'd_18',
        information: {
            manufacturer: 'Cellgenix',
            application: ['CellTherapy'],
            target: ['TCell'],
            productimage: 'image_cellgenix/CellGenix-TCM-GMP-Bottle-500ML-en-B.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/03.Data Sheet_GMP TCM_ME-DS-2014d.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Serum-Free / Xeno-Free<br>
            ▶ GMP grade<br>
            ▶ For Research and Further Manufacturing<Br>
            ▶ T, CAR-T 세포 배양 배지<br>
            ▶ [20814-0500] Cellgenix GMP TCM Medium<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 이윤서.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 19,
        product_type: 'Media',
        productname: 'Cellgenix Recombinant Cytokines & Growth Factors_Preclinical',
        dataname: 'd_19',
        information: {
            manufacturer: 'Cellgenix',
            application: ['CGT'],
            target: ['MSC', 'hPSC(iP5)', 'HSC', 'T', 'CAR-T', 'NK', 'CAR-NK', 'Dendritic_Cell'],
            productimage: 'image_cellgenix/CellGenix-Recombinant-Cytokines&Growth-Factors-Pre.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/04.CellGenix-Preclinical-GMP-Cytokine-Portfolio-Datasheet-en-B.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ E.coli-derived recombinant protein<br>
            ▶ Lyophilized powder<br>
            ▶ Intended for preclinical ex vivo use<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 이윤서.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 20,
        product_type: 'Media',
        productname: 'Cellgenix Recombinant Cytokines & Growth Factors_GMP',
        dataname: 'd_20',
        information: {
            manufacturer: 'Cellgenix',
            application: ['CGT'],
            target: ['hPSC(iP5)'],
            productimage: 'image_cellgenix/CellGenix-Recombinant-Cytokines&Growth-Factors-GMP.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/05.CellGenix-Preclinical-GMP-Cytokine-Portfolio-Datasheet-en-B.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ E.coli-derived recombinant protein<br>
            ▶ Lyophilized powder<br>
            ▶ GMP grade<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 이윤서.tel,
            mail: SFDC.address,
        }
    },
    //================================================ROOSTER BIO
    {
        id: 21,
        product_type: 'Media',
        productname: 'RoosterVial',
        dataname: 'd_21',
        information: {
            manufacturer: 'RoosterBio',
            application: ['CGT'],
            target: ['MSC'],
            productimage: 'image_roosterbio/RoosterVial.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/06.RBI_Product_Tech_Sheet_RoosterVial.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ MSC WCB (P2 or P3) vial<br>
            ▶ Research grade/Clinical grade<br>
            ▶ US FDA DMF<br>
            ▶ 21 CFR Part 1271<br>
            ▶ MCB human derived virus test 완료<br>
            ▶ Bone Marrow, Umbilical Cord(WJC), Adipose 유래 세포<br>
            ▶ Sterility, Endotoxin, Mycoplasma 등 FDA guideline 에 명시된 quality test 완료<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 이윤서.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 22,
        product_type: 'Media',
        productname: 'RoosterVial Exosomes',
        dataname: 'd_22',
        information: {
            manufacturer: 'RoosterBio',
            application: ['Exosome'],
            target: ['MSC', 'Exosome'],
            productimage: 'image_roosterbio/RoosterVial Exosomes.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: ''
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ MSC 유래 엑소좀<br>
            ▶ Research grade<br>
            ▶ Bone Marrow, Umbilical Cord 유래 MSC로부터 추출한 엑소좀<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 이윤서.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 23,
        product_type: 'Media',
        productname: 'RoosterNourish-MSC',
        dataname: 'd_23',
        information: {
            manufacturer: 'RoosterBio',
            application: ['CGT'],
            target: ['MSC'],
            productimage: 'image_roosterbio/RoosterNourish-MSC.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/08. RBI_Product_Tech_Sheet_RoosterNourish_v3.2.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Serum free / Xeno free medium<br>
            ▶ Research grade/Clinical grade<br>
            ▶ US FDA DMF<br>
            ▶ 다수의 임상 Reference 보유<br>
            ▶ Protocol대로 이행 시, Media exchange 불필요<br>
            ▶ CellBIND flask (Corning) 와 함께 사용 권장<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 이윤서.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 24,
        product_type: 'Media',
        productname: 'RoosterCollect-EV',
        dataname: 'd_24',
        information: {
            manufacturer: 'RoosterBio',
            application: ['Exosome'],
            target: ['Exosome'],
            productimage: 'image_roosterbio/RoosterCollect-EV.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/09.RBI_Product-Tech-Sheet-RoosterCollect-EV-v7.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Chemically defined<br>
            ▶ Protein free / Xeno free<br>
            ▶ 세포가 방출하는 Extracellular Vesicle 추출에 최적화 된 배지<br>
            ▶ US FDA DMF<br>
            ▶ Research grade/Clinical grade<br>
            ▶ [M02004] RoosterCollect-EV-CC<br>
            ▶ 세포 배양 완료 후 워싱하여 배양배지를 제거한 후, RoosterCollect 로 배지교환하여 EV 추출<br>
            ▶ Low particulate medium: 엑소좀 유사 파티클을 제거하여 target exosome 만 획득하여 이후 정제 과정 수월<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 이윤서.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 25,
        product_type: 'Media',
        productname: 'RoosterGEM',
        dataname: 'd_25',
        information: {
            manufacturer: 'RoosterBio',
            application: ['CGT'],
            target: ['MSC', 'T', 'CAR-T'],
            productimage: 'image_roosterbio/RoosterGEM.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/10.RBI_Product-Tech-Sheet-RoosterGEM_v2.1.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Chemically defined<br>
            ▶ Xeno free<br>
            ▶ Viral/non-viral cell engineering에 모두 적용 가능<br>
            ▶ MSC, T cell, NK cell에서 테스트 완료<br>
            ▶ Research grade/Clinical grade<br>
            ▶ [M40200] RoosterGEM<br>
            ▶ [M03001] RoosterGEM-CC<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 이윤서.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 26,
        product_type: 'Media',
        productname: 'Rooster Replenish',
        dataname: 'd_26',
        information: {
            manufacturer: 'RoosterBio',
            application: ['CGT'],
            target: ['MSC'],
            productimage: 'image_roosterbio/RoosterReplenish.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/11.RBI_Product-Tech-Sheet-RoosterReplenish-v2.1.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Xeno-Free<br>
            ▶ Protocol대로 이행 시, Media exchange 불필요<br>
            ▶ Research grade/Clinical grade<br>
            ▶ [S43001] prcRoosterReplenish-MSC-CCF<br>
            ▶ [SU-023] RoosterReplenish-MSC-XF<br>
            ▶ Bioreactor에서 RoosterNourish를 사용하여 세포 배양 시, feed medium으로 사용<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 이윤서.tel,
            mail: SFDC.address,
        }
    },
    //===============================================================BI MEDIA
    {
        id: 27,
        product_type: 'Media',
        productname: 'MSC Nutristem XF Medium',
        dataname: 'd_27',
        information: {
            manufacturer: 'BI',
            application: ['CGT'],
            target: ['MSC'],
            productimage: 'image_bi/MSC-Nutristem-XF-PRF-Basal-Medium-500mL-Bottle-en-B.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/12.MSC-NutriStem-Datasheet-en-B-Sartorius.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Serum-Free, Xeno-Free<br>
            ▶ GMP grade<br>
            ▶ For Research and Further Manufacturing<br>
            ▶ US FDA DMF<br>
            ▶ PLTGold®와 함께 사용 권장<br>
            ▶ 임상시료 생산 Reference 보유<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 이윤서.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 28,
        product_type: 'Media',
        productname: 'Nutristem hPSC XF Medium',
        dataname: 'd_28',
        information: {
            manufacturer: 'BI',
            application: ['CGT'],
            target: ['hPSC(iPS)'],
            productimage: 'image_bi/NutriStem-hPSC-XF-Medium-500mL-Bottle-en-B.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/13.NutriStem-hPSC-XF-Medium-Datasheet-en-B-Sartorius.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Serum-Free, Xeno-Free<br>
            ▶ GMP grade<br>
            ▶ For Research and Further Manufacturing<br>
            ▶ US FDA DMF<br>
            ▶ Suitable for reprogramming and expansion of hPSCs<br>
            ▶ For feeder-dependent or feeder-free condition<br>
            ▶ 임상시료 생산 Reference 보유<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 이윤서.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 29,
        product_type: 'Media',
        productname: '4Cell Nutri-T GMP Medium',
        dataname: 'd_29',
        information: {
            manufacturer: 'BI',
            application: ['CGT'],
            target: ['T', 'CAR-T', 'NK', 'CAR-NK', 'Dendritic_Cell'],
            productimage: 'image_bi/4Cell-Nutri-T-GMP-Medium-1L-Bottle-B-0002050-White-Sartorius.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datashhe/14.4Cell-Nutri-T-Media_datasheet.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Serum-Free, Xeno-Free<br>
            ▶ GMP grade<br>
            ▶ For Research and Further Manufacturing<br>
            ▶ US FDA DMF<br>
            ▶ 건강한 기증자와 암환자 유래 세포 결과데이터 보유<br>
            ▶ 임상시료 생산 Reference 보유<br>
            ▶ Lymphocyte 기반 모든 면역세포 치료제 적용 가능 (PBMC, TIL, T, NK, CAR-T, CAR-NK 등)<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 이윤서.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 30,
        product_type: 'CellCultureReagent',
        productname: 'NutriFreez Cryopreservation Solution',
        dataname: 'd_30',
        information: {
            manufacturer: 'BI',
            application: ['CGT'],
            target: ['MSC', 'hPSC(iP5)', 'HSC', 'T', 'CAR-T', 'NK', 'CAR-NK', 'Dendritic_Cell'],
            productimage: 'image_bi/NutriFreez-D10-Cryopreservation-Medium-without-Phenol-Red-500mL-Bottle-en-B.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/15.NutriFreez D10_Datasheet.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Chemically defined<br>
            ▶ Serum-Free, Protein-Free<br>
            ▶ Animal component free<br>
            ▶ GMP grade<br>
            ▶ For Research and Further Manufacturing<br>
            ▶ US FDA DMF: D10 등록 완료, D5 등록 중<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 이윤서.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 31,
        product_type: 'CellCultureReagent',
        productname: 'NutriStor Cold Storage Solution',
        dataname: 'd_31',
        information: {
            manufacturer: 'BI',
            application: ['CGT'],
            target: ['MSC', 'hPSC(iP5)', 'HSC', 'T', 'CAR-T', 'NK', 'CAR-NK', 'Dendritic_Cell'],
            productimage: 'image_bi/NutriStor-Cold-Storage-Solution-500mL-Bottle-en-B.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/16. NutriStor-Cold-Storage-Solution-Datasheet-en-B.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Chemically defined, Serum-Free, Protein-Free<br>
            ▶ PBMC, MSC, T cell, CAR-T 등 다양한 세포에 적용 가능<br>
            ▶ Animal component free<br>
            ▶ GMP grade<br>
            ▶ For Research and Further Manufacturing<br>
            ▶ 세포의 단기 보존/이송 시 냉장(2~8 °C) 안정성 부여 > 높은 Cell viability, cell recovery 유지<br>
            ▶ Post storage necrosis, apoptosis 방지<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 이윤서.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 32,
        product_type: 'CellCultureReagent',
        productname: 'Recombinant Trypsin (EDTA) Solution',
        dataname: 'd_32',
        information: {
            manufacturer: 'BI',
            application: ['CGT'],
            target: ['MSC', 'hPSC(iP5)', 'Dendritic_Cell'],
            productimage: 'image_bi/Recombinant-Trypsin-EDTA-Solution-500mL-Bottle-en-B.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/17.Recombinant-Trypsin-Flyer-en-B-Sartorius_FG_210602.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Defined, Animal component free<br>
            ▶ Fungi derived recombinant trypsin<br>
            ▶ GMP grade<br>
            ▶ For Research and Further Manufacturing<br>
            ▶ Easy to handle (상온 보관)<br>
            ▶ Chymotrypsin free, Carboxypeptidase A free, Other protease contaminants free<br>
            ▶ Serum containing, Serum free 배양 환경에 모두 사용 가능<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 이윤서.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 33,
        product_type: 'CellCultureReagent',
        productname: 'Human Serum Albumin (HSA) Solution(10%, 20%)',
        dataname: 'd_33',
        information: {
            manufacturer: 'BI',
            application: ['CGT'],
            target: ['MSC', 'hPSC(iP5)', 'HSC', 'T', 'CAR-T', 'NK', 'CAR-NK', 'Dendritic_Cell'],
            productimage: 'image_bi/Human Serum Albumin (HSA) Solution.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/18.Human Serum Albumin 10%, 20%_Manual.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Xeno-Free<br>
            ▶ GMP grade<br>
            ▶ For Research and Further Manufacturing<br>
            ▶ Compliant to EU licensed medicinal product<br>
            ▶ Maintaining cell growth, expansion and cell membrane stability<br>
            ▶ Human Serum Albumin 10% Sol.<br>
            ▶ Human Serum Albumin 20% Sol.<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 이윤서.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 34,
        product_type: 'Media',
        productname: 'EndoGo XF Medium',
        dataname: 'd_34',
        information: {
            manufacturer: 'BI',
            application: ['CGT'],
            target: ['EndothelialCell'],
            productimage: 'image_bi/EndoGo-XF-Medium-500mL-Bottle-en-B.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/19.EndoGo-XF-Culture-Media-Datasheet-en-B-Sartorius.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Serum-Free, Xeno-Free<br>
            ▶ GMP grade<br>
            ▶ For Research and Further Manufacturing<br>
            ▶ Long-term expansion of endothelial cells<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 이윤서.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 35,
        product_type: 'CellCultureReagent',
        productname: 'PLTGold Human Platelet Lysate',
        dataname: 'd_35',
        information: {
            manufacturer: 'BI',
            application: ['CGT'],
            target: ['MSC', 'HSC', 'NK', 'CAR-NK'],
            productimage: 'image_bi/PLTGoldGMP-GI.Family.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/20.PLTGOLD_MillCreekProductSpecSheets_2022.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Cell therapy (FBS 대체제)<br>
            ▶ Xeno-Free<br>
            ▶ Research grade / GMP grade / GMP-GI (Gamma Irradiated)<br>
            ▶ For Research and Further Manufacturing<br>
            ▶ US FDA DMF (GMP grade 품목에 한함)<br>
            ▶ FBS 대체제, 사람 혈소판 용해물<br>
            ▶ Donor pool에서 추출하여 Lot-to-lot consistency 확보<br>
            ▶ 소량 첨가(2~5%)에도 탁월한 세포 증식 효과<br>
            ▶ 임상시료 생산 Reference 보유<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 이윤서.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 36,
        product_type: 'CellCultureReagent',
        productname: 'Sartorius Albumedix',
        dataname: 'd_36',
        information: {
            manufacturer: 'Albumedix',
            application: ['CGT', 'Exosome'],
            target: ['MSC', 'hPSC(iP5)', 'HSC', 'T', 'CAR-T', 'NK', 'CAR-NK', 'Dendritic_Cell', 'Exosome'],
            productimage: 'image_albumedix/Albumedix-Recombumin-B-0003194.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/21.recombumin-datasheet-en-b-sartorius-pdf-data'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Defined, Animal component free<br>
            ▶ Yeast (Saccharomyces cerevisiae) derived recombinant human albumin<br>
            ▶ GMP grade (ICH Q7), USP-NF compliant<br>
            ▶ For Research and Further Manufacturing<br>
            ▶ DMF: US, Japan, (Canada, Australia, New Zealand and China : 괄호 안 국가는 Prime만 해당)<br>
            ▶ Purity: 99.0%<br>
            ▶ 용액 상태, 냉장 보관<br>
            ▶ 유효기간: 5년<br>
            ▶ 허가의약품의 Final formulation에 사용된 reference 보유 (4건)<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 이윤서.tel,
            mail: SFDC.address,
        }
    },

    {
        id: 37,
        product_type: 'Media',
        productname: 'CHOlean',
        dataname: 'd_37',
        information: {
            manufacturer: 'Sartorius',
            application: ['mAb'],
            target: ['CHO', 'CHODG44', 'CHOK1', 'CHOS', 'CHOGS'],
            productimage: 'image_smart/CHOlean Medium.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'datasheet/73.CHO-Media-and-Feed-Portfolio-Datasheet-en-B.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>information</strong>
            </p><br>` +

            `<p>
            <strong>Features</strong><br>
            ▶ Chemically defined<br>
            ▶ Serum-Free / Animal Component-Free / Hydrolysate-Free<br>
            ▶ without growth factor<br>
            ▶ without HT (hypoxanthine/thymidine)<br>
            ▶ without HEPES<br>
            ▶ with NaHCO3<br>
            ▶ For Further Manufacturing(생산용)<br>
            ▶ Little or no adaptation required from other serum-free media∙w/o L-glutamine<br><br>
            ※ Sample 제공 가능!!<br>
            </p>`,
        },
        incharge: {
            tel: 장두재.tel,
            mail: SFDC.address,
        }
    },
    //============================================================FILTER
    //============================================================FILTER
    //============================================================FILTER
    //============================================================FILTER
    //============================================================FILTER
    //============================================================FILTER
    //============================================================FILTER
    //============================================================FILTER
    //============================================================FILTER
    //============================================================FILTER
    //============================================================FILTER
    //============================================================FILTER
    //============================================================FILTER
    //============================================================FILTER
    //============================================================FILTER
    //============================================================FILTER
    //============================================================FILTER
    //============================================================FILTER
    
    {
        id: 38,
        product_type: 'Filter',
        productname: 'Sartopore 2 150',
        dataname: 'd_38',
        information: {
            manufacturer: 'Sartorius',
            application: ['BufferFiltration', 'MediaFiltration', 'PreFiltration', 'SterileFiltration'],
            target: ['BufferFiltration', 'MediaFiltration', 'PreFiltration', 'SterileFiltration'],
            productimage: 'image_data_filter/Filter_Sarto_150.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'image_data_filter/Sartopore_2_Datasheet_en_B_SPK2167_Sartorius.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>Information</strong><br>
            Filtration Area : 150㎠<br>
            Pore Size : 0.45㎛ + 0.2㎛ Double Layer 구성<br>
            Membrane Material : Polyethersulfone<br><br>
            </p>`+
            
            `<p>
            <strong>Features</strong><br>
            Chemical Compatibility가 뛰어나며, pH 1 ~ pH 14 range
            에서 사용이 가능합니다. Asymmetric 구조로 Flow Rate가 빠른
            장점이 있습니다. 친수성 성격이 강하여, IT 진행 시 적은 양의 
            Volume으로 Wetting을 쉽게 진행할 수 있습니다. 다양한 application에서
            무난하게 사용되는 filter 입니다.<br><br>Buffer, Media Filtration / 
            Pre, Sterile Filtration 목적으로 사용됩니다.<br><br>
            더 넓은 filtration area를 찾고 계신다면 Sartopore 2 Midicap, 
            Sartopore 2 Maxicap을 찾아주세요!
            </p>`,
        },
        incharge: {
            tel: 신재호.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 39,
        product_type: 'Filter',
        productname: 'Sartopore 2 300',
        dataname: 'd_39',
        information: {
            manufacturer: 'Sartorius',
            application: ['BufferFiltration', 'MediaFiltration', 'PreFiltration', 'SterileFiltration'],
            target: ['BufferFiltration', 'MediaFiltration', 'PreFiltration', 'SterileFiltration'],
            productimage: 'image_data_filter/Filter_Sarto_300.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'image_data_filter/Sartopore_2_Datasheet_en_B_SPK2167_Sartorius.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>Information</strong><br>
            Filtration Area : 300㎠<br>
            Pore Size : 0.45㎛ + 0.2㎛ Double Layer 구성<br>
            Membrane Material : Polyethersulfone<br><br>
            </p>`+
            
            `<p>
            <strong>Features</strong><br>
            Chemical Compatibility가 뛰어나며, pH 1 ~ pH 14 range
            에서 사용이 가능합니다. Asymmetric 구조로 Flow Rate가 빠른
            장점이 있습니다. 친수성 성격이 강하여, IT 진행 시 적은 양의 
            Volume으로 Wetting을 쉽게 진행할 수 있습니다. 다양한 application에서
            무난하게 사용되는 filter 입니다.<br><br>Buffer, Media Filtration / 
            Pre, Sterile Filtration 목적으로 사용됩니다.<br><br>
            더 넓은 filtration area를 찾고 계신다면 Sartopore 2 Midicap, 
            Sartopore 2 Maxicap을 찾아주세요!
            </p>`,
        },
        incharge: {
            tel: 신재호.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 40,
        product_type: 'Filter',
        productname: 'Sartopore 2 Midicap',
        dataname: 'd_40',
        information: {
            manufacturer: 'Sartorius',
            application: ['BufferFiltration', 'MediaFiltration', 'PreFiltration', 'SterileFiltration'],
            target: ['BufferFiltration', 'MediaFiltration', 'PreFiltration', 'SterileFiltration'],
            productimage: 'image_data_filter/Filter_Sarto_Midicaps.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'image_data_filter/Sartopore_2_Datasheet_en_B_SPK2167_Sartorius.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>Information</strong><br>
            Filtration Area : 500㎠, 1000㎠, 2000㎠, 4500㎠<br>
            Pore Size : 0.45㎛ + 0.2㎛ Double Layer 구성<br>
            Membrane Material : Polyethersulfone<br><br>
            </p>`+
            
            `<p>
            <strong>Features</strong><br>
            Chemical Compatibility가 뛰어나며, pH 1 ~ pH 14 range
            에서 사용이 가능합니다. Asymmetric 구조로 Flow Rate가 빠른
            장점이 있습니다. 친수성 성격이 강하여, IT 진행 시 적은 양의 
            Volume으로 Wetting을 쉽게 진행할 수 있습니다. 다양한 application에서
            무난하게 사용되는 filter 입니다.<br><br>Buffer, Media Filtration / 
            Pre, Sterile Filtration 목적으로 사용됩니다.<br><br>
            더 넓은 filtration area를 찾고 계신다면 Sartopore 2 Maxicap을 찾아주세요!
            </p>`,
        },
        incharge: {
            tel: 신재호.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 41,
        product_type: 'Filter',
        productname: 'Sartopore 2 Maxicap',
        dataname: 'd_41',
        information: {
            manufacturer: 'Sartorius',
            application: ['BufferFiltration', 'MediaFiltration', 'PreFiltration', 'SterileFiltration'],
            target: ['BufferFiltration', 'MediaFiltration', 'PreFiltration', 'SterileFiltration'],
            productimage: 'image_data_filter/Filter_Sarto_Maxicaps.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'image_data_filter/Sartopore_2_Datasheet_en_B_SPK2167_Sartorius.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>Information</strong><br>
            Filtration Area : 6000㎠, 1200㎠, 1800㎠<br>
            Pore Size : 0.45㎛ + 0.2㎛ Double Layer 구성<br>
            Membrane Material : Polyethersulfone<br><br>
            </p>`+
            
            `<p>
            <strong>Features</strong><br>
            Chemical Compatibility가 뛰어나며, pH 1 ~ pH 14 range
            에서 사용이 가능합니다. Asymmetric 구조로 Flow Rate가 빠른
            장점이 있습니다. 친수성 성격이 강하여, IT 진행 시 적은 양의 
            Volume으로 Wetting을 쉽게 진행할 수 있습니다. 다양한 application에서
            무난하게 사용되는 filter 입니다.<br><br>Buffer, Media Filtration / 
            Pre, Sterile Filtration 목적으로 사용됩니다.<br><br>
            작은 filtration area를 찾고 계신다면 Sartopore 2 Midicap, Sartopore 2 150 / 300을 찾아주세요!
            </p>`,
        },
        incharge: {
            tel: 신재호.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 42,
        product_type: 'Filter',
        productname: 'Sartopore 2 Cartridge Filter',
        dataname: 'd_42',
        information: {
            manufacturer: 'Sartorius',
            application: ['BufferFiltration', 'MediaFiltration', 'PreFiltration', 'SterileFiltration'],
            target: ['BufferFiltration', 'MediaFiltration', 'PreFiltration', 'SterileFiltration'],
            productimage: 'image_data_filter/Filter_Sarto_Cartridge.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'image_data_filter/Sartopore_2_Datasheet_en_B_SPK2167_Sartorius.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>Information</strong><br>
            Filtration Area : 6000㎠, 1200㎠, 1800㎠<br>
            Pore Size : 0.45㎛ + 0.2㎛ Double Layer 구성<br>
            Membrane Material : Polyethersulfone<br><br>
            </p>`+
            
            `<p>
            <strong>Features</strong><br>
            Chemical Compatibility가 뛰어나며, pH 1 ~ pH 14 range
            에서 사용이 가능합니다. Asymmetric 구조로 Flow Rate가 빠른
            장점이 있습니다. 친수성 성격이 강하여, IT 진행 시 적은 양의 
            Volume으로 Wetting을 쉽게 진행할 수 있습니다. 다양한 application에서
            무난하게 사용되는 filter 입니다.<br><br>Buffer, Media Filtration / 
            Pre, Sterile Filtration 목적으로 사용됩니다.<br><br>
            작은 filtration area를 찾고 계신다면 Sartopore 2 Midicap, Sartopore 2 150 / 300을 찾아주세요!
            </p>`,
        },
        incharge: {
            tel: 신재호.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 43,
        product_type: 'Filter',
        productname: 'Sartopore 2 Mini Cartridge Filter',
        dataname: 'd_43',
        information: {
            manufacturer: 'Sartorius',
            application: ['BufferFiltration', 'MediaFiltration', 'PreFiltration', 'SterileFiltration'],
            target: ['BufferFiltration', 'MediaFiltration', 'PreFiltration', 'SterileFiltration'],
            productimage: 'image_data_filter/Filter_Sarto_Minicartridge.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'image_data_filter/Sartopore_2_Datasheet_en_B_SPK2167_Sartorius.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>Information</strong><br>
            Filtration Area : 500㎠, 1000㎠, 2000㎠<br>
            Pore Size : 0.45㎛ + 0.2㎛ Double Layer 구성<br>
            Membrane Material : Polyethersulfone<br><br>
            </p>`+
            
            `<p>
            <strong>Features</strong><br>
            Chemical Compatibility가 뛰어나며, pH 1 ~ pH 14 range
            에서 사용이 가능합니다. Asymmetric 구조로 Flow Rate가 빠른
            장점이 있습니다. 친수성 성격이 강하여, IT 진행 시 적은 양의 
            Volume으로 Wetting을 쉽게 진행할 수 있습니다. 다양한 application에서
            무난하게 사용되는 filter 입니다.<br><br>Buffer, Media Filtration / 
            Pre, Sterile Filtration 목적으로 사용됩니다.<br><br>
            작은 filtration area를 찾고 계신다면 Sartopore 2 Midicap, Sartopore 2 150 / 300을 찾아주세요!
            </p>`,
        },
        incharge: {
            tel: 신재호.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 44,
        product_type: 'Filter',
        productname: 'Filter Sarto Sartoscale Filter',
        dataname: 'd_44',
        information: {
            manufacturer: 'Sartorius',
            application: ['BufferFiltration', 'MediaFiltration', 'PreFiltration', 'SterileFiltration'],
            target: ['BufferFiltration', 'MediaFiltration', 'PreFiltration', 'SterileFiltration'],
            productimage: 'image_data_filter/Filter_Sarto_Sartoscale.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'image_data_filter/Sartopore_2_Datasheet_en_B_SPK2167_Sartorius.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>Information</strong><br>
            Filtration Area : 4.5㎠, 17.3㎠<br>
            Pore Size : 0.45㎛ + 0.2㎛ Double Layer 구성<br>
            Membrane Material : Polyethersulfone<br><br>
            </p>`+
            
            `<p>
            <strong>Features</strong><br>
            Chemical Compatibility가 뛰어나며, pH 1 ~ pH 14 range
            에서 사용이 가능합니다. Asymmetric 구조로 Flow Rate가 빠른
            장점이 있습니다. 친수성 성격이 강하여, IT 진행 시 적은 양의 
            Volume으로 Wetting을 쉽게 진행할 수 있습니다. 다양한 application에서
            무난하게 사용되는 filter 입니다.<br><br>Buffer, Media Filtration / 
            Pre, Sterile Filtration 목적으로 사용됩니다.<br><br>
            면적이 작아 sizing test 또는 feasibility test 목적으로 사용됩니다.
            </p>`,
        },
        incharge: {
            tel: 신재호.tel,
            mail: SFDC.address,
        }
    },



    //===============================================================FILTER_Sartobran P
    //===============================================================FILTER_Sartobran P
    //===============================================================FILTER_Sartobran P
    //===============================================================FILTER_Sartobran P
    //===============================================================FILTER_Sartobran P
    //===============================================================FILTER_Sartobran P
    //===============================================================FILTER_Sartobran P
    //===============================================================FILTER_Sartobran P
    {
        id: 45,
        product_type: 'Filter',
        productname: 'Sartobran P 150',
        dataname: 'd_45',
        information: {
            manufacturer: 'Sartorius',
            application: ['PreFiltration', 'SterileFiltration'],
            target: ['BufferFiltration', 'MediaFiltration', 'PreFiltration', 'SterileFiltration'],
            productimage: 'image_data_filter/Filter_Sarto_150.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'image_data_filter/Sartopore_2_Datasheet_en_B_SPK2167_Sartorius.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>Information</strong><br>
            Filtration Area : 150㎠<br>
            Pore Size : 0.45㎛ + 0.2㎛ Double Layer 구성<br>
            Membrane Material : Cellulose Acetate<br><br>
            </p>`+
            
            `<p>
            <strong>Features</strong><br>
            단백질 흡착율이 가장 낮은 장점을 가진 필터 입니다.
            pH 4 ~ pH 8 range 에서 사용이 가능합니다. Colloid 입자 제거 능력이 
            좋기 때문에, Plasma공정에서 주로 사용되는 filter 입니다.<br><Br>
            
            Vaccine 공정과 위에서 언급한 Plasma 공정에 pre-filtration, Sterile-filtration
            목적으로 많이 사용됩니다.<br><br> 
            
            더 넓은 filtration area를 찾고 계신다면 Sartobran P 2 Midicap, 
            Sartobran 2 Maxicap을 찾아주세요!
            </p>`,
        },
        incharge: {
            tel: 신재호.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 46,
        product_type: 'Filter',
        productname: 'Sartobran P 300',
        dataname: 'd_46',
        information: {
            manufacturer: 'Sartorius',
            application: ['PreFiltration', 'SterileFiltration'],
            target: ['BufferFiltration', 'MediaFiltration', 'PreFiltration', 'SterileFiltration'],
            productimage: 'image_data_filter/Filter_Sarto_300.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'image_data_filter/Sartopore_2_Datasheet_en_B_SPK2167_Sartorius.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>Information</strong><br>
            Filtration Area : 300㎠<br>
            Pore Size : 0.45㎛ + 0.2㎛ Double Layer 구성<br>
            Membrane Material : Cellulose Acetate<br><br>
            <p>`+
            
            `<p>
            <strong>Features</strong><br>
            단백질 흡착율이 가장 낮은 장점을 가진 필터 입니다.
            pH 4 ~ pH 8 range 에서 사용이 가능합니다. Colloid 입자 제거 능력이 
            좋기 때문에, Plasma공정에서 주로 사용되는 filter 입니다.<br><Br>
            
            Vaccine 공정과 위에서 언급한 Plasma 공정에 pre-filtration, Sterile-filtration
            목적으로 많이 사용됩니다.<br><br> 
            
            더 넓은 filtration area를 찾고 계신다면 Sartobran P 2 Midicap, 
            Sartobran 2 Maxicap을 찾아주세요!
            </p>`,
        },
        incharge: {
            tel: 신재호.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 47,
        product_type: 'Filter',
        productname: 'Sartobran P Midicap',
        dataname: 'd_47',
        information: {
            manufacturer: 'Sartorius',
            application: ['PreFiltration', 'SterileFiltration'],
            target: ['PreFiltration', 'SterileFiltration'],
            productimage: 'image_data_filter/Filter_Sarto_Midicaps.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'image_data_filter/Sartopore_2_Datasheet_en_B_SPK2167_Sartorius.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>Information</strong><br>
            Filtration Area : 500㎠, 1000㎠, 2000㎠, 4500㎠<br>
            Pore Size : 0.45㎛ + 0.2㎛ Double Layer 구성<br>
            Membrane Material : Cellulose Acetate<br><br>
            </p>`+
            
            `<p>
            <strong>Features</strong><br>
            단백질 흡착율이 가장 낮은 장점을 가진 필터 입니다.
            pH 4 ~ pH 8 range 에서 사용이 가능합니다. Colloid 입자 제거 능력이 
            좋기 때문에, Plasma공정에서 주로 사용되는 filter 입니다.<br><Br>
            
            Vaccine 공정과 위에서 언급한 Plasma 공정에 pre-filtration, Sterile-filtration
            목적으로 많이 사용됩니다.<br><br> 
            
            더 넓은 filtration area를 찾고 계신다면 Sartobran P 2 Midicap, 
            Sartobran 2 Maxicap을 찾아주세요!
            </p>`,
        },
        incharge: {
            tel: 신재호.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 48,
        product_type: 'Filter',
        productname: 'Sartobran P Maxicap',
        dataname: 'd_48',
        information: {
            manufacturer: 'Sartorius',
            application: ['PreFiltration', 'SterileFiltration'],
            target: ['BufferFiltration', 'MediaFiltration', 'PreFiltration', 'SterileFiltration'],
            productimage: 'image_data_filter/Filter_Sarto_Maxicaps.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'image_data_filter/Sartopore_2_Datasheet_en_B_SPK2167_Sartorius.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>Information</strong><br>
            Filtration Area : 6000㎠, 1200㎠, 1800㎠<br>
            Pore Size : 0.45㎛ + 0.2㎛ Double Layer 구성<br>
            Membrane Material : Cellulose Acetate<br><br>
            </p>`+
            
            `<p>
            <strong>Features</strong><br>
            단백질 흡착율이 가장 낮은 장점을 가진 필터 입니다.
            pH 4 ~ pH 8 range 에서 사용이 가능합니다. Colloid 입자 제거 능력이 
            좋기 때문에, Plasma공정에서 주로 사용되는 filter 입니다.<br><Br>
            
            Vaccine 공정과 위에서 언급한 Plasma 공정에 pre-filtration, Sterile-filtration
            목적으로 많이 사용됩니다.<br>            
            더 넓은 filtration area를 찾고 계신다면 Sartobran P 2 Midicap, 
            Sartobran 2 Maxicap을 찾아주세요!<br><br>
            작은 filtration area를 찾고 계신다면 Sartobran 2 Midicap, Sartobran 2 150 / 300을 찾아주세요!
            </p>`,
        },
        incharge: {
            tel: 신재호.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 49,
        product_type: 'Filter',
        productname: 'Sartobran P Cartridge Filter',
        dataname: 'd_49',
        information: {
            manufacturer: 'Sartorius',
            application: ['PreFiltration', 'SterileFiltration'],
            target: ['BufferFiltration', 'MediaFiltration', 'PreFiltration', 'SterileFiltration'],
            productimage: 'image_data_filter/Filter_Sarto_Cartridge.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'image_data_filter/Sartopore_2_Datasheet_en_B_SPK2167_Sartorius.pdf'
        }, 
        feature: {
            point01: `>p>
            <strong>Information</strong><br>
            Filtration Area : 6000㎠, 1200㎠, 1800㎠<br>
            Pore Size : 0.45㎛ + 0.2㎛ Double Layer 구성<br>
            Membrane Material : Cellulose Acetate<br><br>
            </p>`+
            
            `<p>
            <strong>Features</strong><br>
            단백질 흡착율이 가장 낮은 장점을 가진 필터 입니다.
            pH 4 ~ pH 8 range 에서 사용이 가능합니다. Colloid 입자 제거 능력이 
            좋기 때문에, Plasma공정에서 주로 사용되는 filter 입니다.<br><Br>
            
            Vaccine 공정과 위에서 언급한 Plasma 공정에 pre-filtration, Sterile-filtration
            목적으로 많이 사용됩니다.<br>            
            더 넓은 filtration area를 찾고 계신다면 Sartobran P 2 Midicap, 
            Sartobran 2 Maxicap을 찾아주세요!<br><br>
            작은 filtration area를 찾고 계신다면 Sartobran 2 Midicap, Sartobran 2 150 / 300을 찾아주세요!
            </p>`,
        },
        incharge: {
            tel: 신재호.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 50,
        product_type: 'Filter',
        productname: 'Sartobran P Mini Cartridge Filter',
        dataname: 'd_50',
        information: {
            manufacturer: 'Sartorius',
            application: ['PreFiltration', 'SterileFiltration'],
            target: ['BufferFiltration', 'MediaFiltration', 'PreFiltration', 'SterileFiltration'],
            productimage: 'image_data_filter/Filter_Sarto_Minicartridge.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'image_data_filter/Sartopore_2_Datasheet_en_B_SPK2167_Sartorius.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>Information</strong><br>
            Filtration Area : 500㎠, 1000㎠, 2000㎠<br>
            Pore Size : 0.45㎛ + 0.2㎛ Double Layer 구성<br>
            Membrane Material : Cellulose Acetate<br><br>
            </p>`+
            
            `<p>
            <strong>Features</strong><br>
            단백질 흡착율이 가장 낮은 장점을 가진 필터 입니다.
            pH 4 ~ pH 8 range 에서 사용이 가능합니다. Colloid 입자 제거 능력이 
            좋기 때문에, Plasma공정에서 주로 사용되는 filter 입니다.<br><Br>
            
            Vaccine 공정과 위에서 언급한 Plasma 공정에 pre-filtration, Sterile-filtration
            목적으로 많이 사용됩니다.<br>            
            Mini Cartridge Housing에 장착하여 사용할 수 있습니다.<br>
            </p>`,
        },
        incharge: {
            tel: 신재호.tel,
            mail: SFDC.address,
        }
    },
    {
        id: 51,
        product_type: 'Filter',
        productname: 'Sartobran P Sartoscale Filter',
        dataname: 'd_51',
        information: {
            manufacturer: 'Sartorius',
            application: ['PreFiltration', 'SterileFiltration'],
            target: ['BufferFiltration', 'MediaFiltration', 'PreFiltration', 'SterileFiltration'],
            productimage: 'image_data_filter/Filter_Sarto_Cartridge.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'image_data_filter/Sartopore_2_Datasheet_en_B_SPK2167_Sartorius.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>Information</strong><br>
            Filtration Area : 4.5㎠, 17.3㎠<br>
            Pore Size : 0.45㎛ + 0.2㎛ Double Layer 구성<br>
            Membrane Material : Cellulose Acetate<br><br>
            </p>`+
            
            `<p>
            <strong>Features</strong><br>
            단백질 흡착율이 가장 낮은 장점을 가진 필터 입니다. 
            pH 4 ~ pH 8 range 에서 사용이 가능합니다. Colloid 입자 제거 능력이 
            좋기 때문에, Plasma공정에서 주로 사용되는 filter 입니다.<br><Br>
            
            Vaccine 공정과 Plasma 공정에서 pre-filtration, Sterile-filtration
            목적으로 많이 사용됩니다.<br>            
            이 size의 filter는 sizing test 또는 feasibility test 수행 시 사용되며, 소량 여과에도 사용이 가능합니다. <br>
            </p>`,
        },
        incharge: {
            tel: 신재호.tel,
            mail: SFDC.address,
        }
    },

    //================================================================Vent Filter 입니다.
    //================================================================Vent Filter 입니다.
    //================================================================Vent Filter 입니다.
    //================================================================Vent Filter 입니다.
    //================================================================Vent Filter 입니다.
    //================================================================Vent Filter 입니다.
    //================================================================Vent Filter 입니다.
    //================================================================Vent Filter 입니다.
    //================================================================Vent Filter 입니다.
    //================================================================Vent Filter 입니다.

    {
        id: 52,
        product_type: 'Filter',
        productname: 'Sartfluor Heat Resistant',
        dataname: 'd_52',
        information: {
            manufacturer: 'Sartorius',
            application: ['VentFiltration', 'AirFiltration', 'SolvantFiltration'],
            target: ['Gas&Air'],
            productimage: 'image_data_filter/Filter_Sarto_Cartridge_SartofluorHR.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'image_data_filter/SartofluorHR-Datasheet-en-B-2648574.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>Information</strong><br>
            Filtration Area : 5600㎠, 11200㎠, 16800㎠<br>
            Pore Size : 0.2㎛ Single Layer 구성<br>
            Membrane Material : polytetrafluoro-ethylene (ePTFE)<br>
            property : expanded hydrophobic<br><br>
            </p>`+
            
            `<p>
            <strong>Features</strong><br>
            Sartoflour HR Air | Gas Filter 입니다. HR은 Heat Resistant의미로, 높은 온도에서 잘 견디는 Air Filter입니다.<br>
            6개월간 90도씨 온도에서 문제가 없음이 검증된 제품입니다. 이러한 특성에 의하여 높은 온도를 유지하고 있는 주사용수의 tank에
            vent filter로 사용되고 있습니다.<br>
            또한 Autoclave에도 사용되는 Filter 입니다.<br>
            주사용수 tank의 vent filter 목적 외에 모든 Gas및 Air 여과 filter로는 Sartofluor GA 또는 LG가 사용됩니다.<br>
            10inch / 20inch / 30inch Size가 있습니다.
            </p>`,
        },
        incharge: {
            tel: 신재호.tel,
            mail: SFDC.address,
        }
    },

    {
        id: 53,
        product_type: 'Filter',
        productname: 'Sartfluor GA Midicap',
        dataname: 'd_53',
        information: {
            manufacturer: 'Sartorius',
            application: ['VentFiltration', 'AirFiltration', 'SolvantFiltration'],
            target: ['Gas&Air'],
            productimage: 'image_data_filter/Filter_Sarto_Midicaps_Sartofluor.jpg',
            productbrand: 'SARTORIUS',
            productmaterial: 'image_data_filter/Sartofluor-GA-LG-Datasheet-en-B-3090827.pdf'
        }, 
        feature: {
            point01: `<p>
            <strong>Information</strong><br>
            Filtration Area : 500㎠, 1000㎠, 2000㎠, 4500㎠<br>
            Pore Size : 0.2㎛ Single Layer 구성<br>
            Membrane Material : polytetrafluoro-ethylene (PTFE)<br><br>
            </p>`+
            
            `<p>
            <strong>Features</strong><br>
            Sartoflour Midicap Air | Gas Filter 입니다. <br>
            Filter Integrity를 위하여 <span style=color:red;>Water Intrusion Test가 가능한 유일한 filter</span>입니다. <br>
            Gas및 Air 여과 filter로는 Sartofluor GA 또는 LG가 사용됩니다.<br><br>

            Size7(500㎠), Size8(1000㎠), Size9(2000㎠), Size0(4500㎠) 의 종류가 있습니다.<br>
            </p>`,
        },
        incharge: {
            tel: 신재호.tel,
            mail: SFDC.address,
        }
    },
];

// ==================================================미리 짜여진 OPTION : FIRST CHILD
// ==================================================미리 짜여진 OPTION : FIRST CHILD
// ==================================================미리 짜여진 OPTION : FIRST CHILD
// ==================================================미리 짜여진 OPTION : FIRST CHILD
// ==================================================미리 짜여진 OPTION : FIRST CHILD
// ==================================================미리 짜여진 OPTION : FIRST CHILD
// ==================================================미리 짜여진 OPTION : FIRST CHILD
// ==================================================미리 짜여진 OPTION : FIRST CHILD
// ==================================================미리 짜여진 OPTION : FIRST CHILD
// ==================================================미리 짜여진 OPTION : FIRST CHILD
// ==================================================미리 짜여진 OPTION : FIRST CHILD
// ==================================================미리 짜여진 OPTION : FIRST CHILD


let option_application_media = [
    {value: '', text: ''},
    {value: 'mAb', text: 'mAb'},
    {value: 'CGT', text: 'CGT'},
    {value: 'Vaccine', text: 'Vaccine'},
    {value: 'Exosome', text: 'Exosome'}
];

let option_application_cellculturereagent = [
    {value: '', text: ''},
    {value: 'CGT', text: 'CGT'},
    {value: 'Exosome', text: 'Exosome'}
];

let option_application_filter = [
    {value: '', text: ''},
    {value: 'BufferFiltration', text: 'Buffer Filtration'},
    {value: 'MediaFiltration', text: 'Media Filtration'},
    {value: 'PreFiltration', text: 'Pre filtration'},
    {value: 'SterileFiltration', text: 'Sterile Filtration'},
    {value: 'VentFiltration', text: 'Vent Filtration'},
    {value: 'AirFiltration', text: 'Air Filtration'},
    {value: 'SolvantFiltration', text: 'Solvant Filtration'},
    {value: 'F&BFiltration', text: 'Food & Beverage Filtration'},
];

let option_application_singleusesolution = [
    {value: '', text: ''},
    {value: 'Connector', text: 'Connector'},
    {value: 'Tubing', text: 'Tubing'},
];

let option_application_balance = [
    {value: '', text: ''},
    {value: 'Filter', text: 'Filter'},
    {value: 'TFF', text: 'TFF'},
];

let option_application_equipment = [
    {value: '', text: ''},
    {value: 'CellCulture', text: 'Cell Culture'},
    {value: 'TFF', text: 'TFF'},
    {value: 'ChromatographySkid', text: 'Chromatography Skid'},
];

//==========================================SELECT OPTION : MEDIA에 대한 SECOND CHILD
//==========================================SELECT OPTION : MEDIA에 대한 SECOND CHILD
//==========================================SELECT OPTION : MEDIA에 대한 SECOND CHILD
//==========================================SELECT OPTION : MEDIA에 대한 SECOND CHILD
//==========================================SELECT OPTION : MEDIA에 대한 SECOND CHILD
//==========================================SELECT OPTION : MEDIA에 대한 SECOND CHILD
//==========================================SELECT OPTION : MEDIA에 대한 SECOND CHILD
//==========================================SELECT OPTION : MEDIA에 대한 SECOND CHILD
//==========================================SELECT OPTION : MEDIA에 대한 SECOND CHILD
//==========================================SELECT OPTION : MEDIA에 대한 SECOND CHILD


//==========================================SELECT OPTION Media
let secondChild_media_mAb = [
    {value: '', text: ''},
    {value: 'CHO', text: 'CHO'},
    {value: 'CHODG44', text: 'CHO-DG44'},
    {value: 'CHOK1', text: 'CHO-K1'},
    {value: 'CHOGS', text: 'CHO-GS'},
    {value: 'CHOS', text: 'CHO-S'},
];

let secondChild_media_CGT = [
    {value: '', text: ''},
    {value: 'HEK293', text: 'HEK293'},
    {value: 'MSC', text: 'MSC'},
    {value: 'HPSC', text: 'hPSC'},
    {value: 'HSC', text: 'HSC'},
    {value: 'TCELL', text: 'T_Cell'},
    {value: 'CART', text: 'CAR-T'},
    {value: 'NK', text: 'NK'},
    {value: 'CARNK', text: 'CAR-NK'},
    {value: 'DendriticCell', text: 'Dendritic Cell'},
];

let secondChild_media_Vaccine = [
    {value: '', text: ''},
    {value: 'HEK293', text: 'HEK293'},
    {value: 'VERO', text: 'VERO'},
    {value: 'BHK21', text: 'BHK-21'},
    {value: 'INSECT', text: 'Insect'},
    {value: 'MDXK', text: 'MDXK'},
    {value: 'MDCK', text: 'MDCK'},
    {value: 'MDBK', text: 'MDBK'},
];

let secondChild_media_Exosome = [
    {value: '', text: ''},
    {value: 'Exosome', text: 'Exosome'},
];

//==========================================SELECT OPTION Cell Culture Reagent

let secondChild_cellculturereagent_CGT = [
    {value: '', text: ''},
    {value: 'MSC', text: 'MSC'},
    {value: 'hPSC(iPS)', text: 'hPSC(iPS)'},
    {value: 'HSC', text: 'HSC'},
    {value: 'T', text: 'T'},
    {value: 'CAR-T', text: 'CAR-T'},
    {value: 'NK', text: 'NK'},
    {value: 'CAR-NK', text: 'CAR-NK'},
    {value: 'DendriticCell', text: 'Dendritic Cell'},
];

let secondChild_cellculturereagent_Exosome = [
    {value: '', text: ''},
    {value: 'Exosome', text: 'Exosome'},
];

//==========================================SELECT OPTION Filter

let secondChild_filter_area = [
    {value: '', text: ''},
    {value: 'Feasibility', text: 'Feasibility'},
    {value: '100', text: 'Filtration Area < 100 '},
    {value: '1001000', text: '100 < Filtration Area < 1000'},
    {value: '10006000', text: '1000 < Filtration Area < 6000'},
    {value: '6000', text: '6000 < Filtration Area'},
];

//==========================================SELECT OPTION Filter

let secondChild_Vaccine_filter = [
    {value: '', text: ''},
    {value: 'Clarification', text: 'Clarification'},
    {value: 'SterileFiltration', text: 'Sterile Filtration'},
    {value: 'BufferFiltration', text: 'Buffer Filtration'},
    {value: 'MediaFiltration', text: 'Media Filtration'},
    {value: 'PreFiltration', text: 'Pre-Filtration'},
    {value: 'TFF', text: 'Tangential Flow Filtration'},
    {value: 'Gas&Air', text: 'Vent & Gas Filtration'},
];

let secondChild_CGT_media = [
    {value: '', text: ''},
    {value: 'HEK293', text: 'HEK293'},
    {value: 'MSC', text: 'MSC'},
    {value: 'hPSC', text: 'hPSC(iPS)'},
    {value: 'HSC', text: 'HSC'},
    {value: 'TCell', text: 'T-Cell'},
    {value: 'CART', text: 'CAR-T'},
    {value: 'NK', text: 'NK'},
    {value: 'CARNK', text: 'CAR-NK'},
    {value: 'DendriticCell', text: 'Dendritic Cell'}
];

let secondChild_CGT_filter = [
    {value: '', text: ''},
    {value: 'Clarification', text: 'Clarification'},
    {value: 'SterileFiltration', text: 'Sterile Filtration'},
    {value: 'BufferFiltration', text: 'Buffer Filtration'},
    {value: 'MediaFiltration', text: 'Media Filtration'},
    {value: 'PreFiltration', text: 'Pre-Filtration'},
    {value: 'TFF', text: 'Tangential Flow Filtration'},
    {value: 'Gas&Air', text: 'Vent & Gas Filtration'},
];

let secondChild_CellTherapy_media = [
    {value: '', text: ''},
    {value: 'HEK293', text: 'HEK293'},
    {value: 'HEK293T', text: 'HEK293T'},
    {value: 'HEK293F3F6', text: 'HEK293F-3F6(NRC)'},
];

let secondChildCellLine_Exosome_media = [
    {value: '', text: ''},
    {value: 'MSC', text: 'MSC'},
    {value: 'Exosome', text: 'Exosome'},
    {value: 'HEK293', text: 'HEK293'},
];

let secondChildCellLine_CellCultureReagent_reagent = [
    {value: '', text: ''},
    {value: 'MSC', text: 'MSC'},
];

//==================================================FIRST CHILD OPTION
//==================================================FIRST CHILD OPTION
//==================================================FIRST CHILD OPTION
//==================================================FIRST CHILD OPTION
//==================================================FIRST CHILD OPTION
//==================================================FIRST CHILD OPTION
//==================================================FIRST CHILD OPTION
//==================================================FIRST CHILD OPTION
function loadParent() {
    let parentOption = document.getElementById('id01').value;
    let firstChildSelect = document.getElementById('firstchildselect');
    if(parentOption === 'Media' || parentOption === 'CellCultureReagent') {
        firstChildSelect.style.display = 'flex';
        document.querySelector('[for="id02"]').innerHTML = 'Selection : Modality';
    }else {
        if(parentOption === 'CellCultureReagent') {
            firstChildSelect.style.display = 'flex';
            document.querySelector('[for="id02"]').innerHTML = 'Selection : Modality';
        }else if(parentOption === 'Filter') {
            firstChildSelect.style.display = 'flex';
            document.querySelector('[for="id02"]').innerHTML = 'Selection : Purpose of Filtration';
        }else if(parentOption === 'SingleUseSolution') {
            firstChildSelect.style.display = 'flex';
            document.querySelector('[for="id02"]').innerHTML = 'Selection : Purpose of Single Use';
        }else if(parentOption === 'Balance') {
            firstChildSelect.style.display = 'flex';
            document.querySelector('[for="id02"]').innerHTML = 'Selection : Purpose of Balance';
        }else if(parentOption === 'Equipment') {
            firstChildSelect.style.display = 'flex';
            document.querySelector('[for="id02"]').innerHTML = 'Selection : Purpose of Equipment';
        }else if(parentOption === '') {
            firstChildSelect.style.display = 'none';
        }
    };
    
    let firtsChild = [];
    submitButton.click(); //자동클릭 메소드

    if(parentOption.value === '') {
        submitButton.click(); //자동클릭 메소드
    }else {
        if(parentOption === 'Media') {
            option_application_media.forEach(item => {
                firtsChild.push('<option value="' + item.value +'">'+ item.text +'</option>');
                submitButton.click(); //자동클릭 메소드
            });
        }else if(parentOption === 'CellCultureReagent') {
            option_application_cellculturereagent.forEach(item => {
                firtsChild.push('<option value="' + item.value +'">'+ item.text +'</option>');
                submitButton.click(); //자동클릭 메소드
            });
        }else if(parentOption === 'Filter') {
            option_application_filter.forEach(item => {
                firtsChild.push('<option value="' + item.value +'">'+ item.text +'</option>');
                submitButton.click(); //자동클릭 메소드
            });
        }else if(parentOption === 'SingleUseSolution') {
            option_application_singleusesolution.forEach(item => {
                firtsChild.push('<option value="' + item.value +'">'+ item.text +'</option>');
                submitButton.click(); //자동클릭 메소드
            });
        }else if(parentOption === 'Balance') {
            option_application_balance.forEach(item => {
                firtsChild.push('<option value="' + item.value +'">'+ item.text +'</option>');
                submitButton.click(); //자동클릭 메소드
            });
        }else if(parentOption === 'Equipment') {
            option_application_equipment.forEach(item => {
                firtsChild.push('<option value="' + item.value +'">'+ item.text +'</option>');
                submitButton.click(); //자동클릭 메소드
            });
        }            
    };
    // document.querySelector('#id02').removeAttribute('disabled');
    document.getElementById('id02').innerHTML = firtsChild.join('');
    document.getElementById('id03').innerHTML = '<option value="">'+'선택해 주세요'+'</option>';
    submitButton.click();
};


//================================================SECOND CHILD OPTION
//================================================SECOND CHILD OPTION
//================================================SECOND CHILD OPTION
//================================================SECOND CHILD OPTION
//================================================SECOND CHILD OPTION
//================================================SECOND CHILD OPTION
//================================================SECOND CHILD OPTION
//================================================SECOND CHILD OPTION
//================================================SECOND CHILD OPTION
//================================================SECOND CHILD OPTION
//================================================SECOND CHILD OPTION
//================================================SECOND CHILD OPTION
//================================================SECOND CHILD OPTION
//================================================SECOND CHILD OPTION
//================================================SECOND CHILD OPTION
//================================================SECOND CHILD OPTION
//================================================SECOND CHILD OPTION
//================================================SECOND CHILD OPTION

function loadFirstChild() {
    let firstChildOption = document.getElementById('id02').value;
    let parentOption = document.getElementById('id01').value;
    let secondChildSelect = document.getElementById('secondchildselect');
    let secondChild = [];
    submitButton.click();

    if(parentOption === 'Media' && firstChildOption === 'mAb') {
        document.querySelector('[for="id03"]').innerHTML = 'Selection : Cell Line';
        secondChildSelect.style.display = 'flex';

        secondChild_media_mAb.forEach(item => {
            secondChild.push('<option value="' + item.value +'">'+ item.text +'</option>');
            submitButton.click();
        });
    }else {
        if(parentOption === 'Media' && firstChildOption === 'CGT') {
            document.querySelector('[for="id03"]').innerHTML = 'Selection : Cell Line';
            secondChildSelect.style.display = 'flex';

            secondChild_media_CGT.forEach(item => {
                secondChild.push('<option value="' + item.value +'">'+ item.text +'</option>');
                submitButton.click();
            });
        }else if(parentOption === 'Media' && firstChildOption === 'Vaccine') {
            document.querySelector('[for="id03"]').innerHTML = 'Selection : Cell Line';
            secondChildSelect.style.display = 'flex';

            secondChild_media_Vaccine.forEach(item => {
                secondChild.push('<option value="' + item.value +'">'+ item.text +'</option>');
                submitButton.click();
            });
        }else if(parentOption === 'Media' && firstChildOption === 'Exosome') {
            document.querySelector('[for="id03"]').innerHTML = 'Selection : Cell Line';
            secondChildSelect.style.display = 'flex';

            secondChild_media_Exosome.forEach(item => {
                secondChild.push('<option value="' + item.value +'">'+ item.text +'</option>');
                submitButton.click();
            });
            

        //CellCultureReagent
        //CellCultureReagent
        }else if(parentOption === 'CellCultureReagent' && firstChildOption === 'CGT') {
            document.querySelector('[for="id03"]').innerHTML = 'Selection : Cell Line';

            secondChild_cellculturereagent_CGT.forEach(item => {
                secondChild.push('<option value="' + item.value +'">'+ item.text +'</option>');
                submitButton.click();
            });

        }else if(parentOption === 'CellCultureReagent' && firstChildOption === 'Exosome') {
            document.querySelector('[for="id03"]').innerHTML = 'Selection : Cell Line';
            
            secondChild_cellculturereagent_Exosome.forEach(item => {
                secondChild.push('<option value="' + item.value +'">'+ item.text +'</option>');
                submitButton.click();
            });
        

        //Filter
        //Filter
        }else if(parentOption === 'Filter' && firstChildOption === 'BufferFiltration') {
            document.querySelector('[for="id03"]').innerHTML = 'Selection : Filter';
            secondChildSelect.style.display = 'flex';

            secondChild_filter_area.forEach(item => {
                secondChild.push('<option value="' + item.value +'">'+ item.text +'</option>');
                submitButton.click();
            })


        }else if(parentOption === 'Filter' && firstChildOption === 'MediaFiltration') {
            document.querySelector('[for="id03"]').innerHTML = 'Selection : Filter';
            secondChildSelect.style.display = 'flex';
        }else if(parentOption === 'Filter' && firstChildOption === 'PreFiltration') {
            document.querySelector('[for="id03"]').innerHTML = 'Selection : Filter';
            secondChildSelect.style.display = 'flex';
        }else if(parentOption === 'Filter' && firstChildOption === 'SterileFiltration') {
            document.querySelector('[for="id03"]').innerHTML = 'Selection : Filter';
            secondChildSelect.style.display = 'flex';
        }else if(parentOption === 'Filter' && firstChildOption === 'VentFiltration') {
            document.querySelector('[for="id03"]').innerHTML = 'Selection : Filter';
            secondChildSelect.style.display = 'flex';
        }else if(parentOption === 'Filter' && firstChildOption === 'AirFiltration') {
            document.querySelector('[for="id03"]').innerHTML = 'Selection : Filter';
            secondChildSelect.style.display = 'flex';
        }else if(parentOption === 'Filter' && firstChildOption === 'F&BFiltration') {
            document.querySelector('[for="id03"]').innerHTML = 'Selection : Filter';
            secondChildSelect.style.display = 'flex';
        }
    };
    
    document.getElementById('id03').innerHTML = secondChild.join('');
    submitButton.click();
};


//================================================SECOND CHILD OPTION
function loadSecondChild () {
    let secondChildOption = document.getElementById('id03').value;
    let firstChildOption = document.getElementById('id02').value;
    let parentOption = document.getElementById('id01').value;
    let thirdChild = [];
    submitButton.click();

    if(secondChildOption === ''){
        submitButton.click();
    }else {
        submitButton.click();
    };
    submitButton.click();
}


// =============================================================SUBMIT EVENT
// =============================================================SUBMIT EVENT
// =============================================================SUBMIT EVENT
// =============================================================SUBMIT EVENT
// =============================================================SUBMIT EVENT
// =============================================================SUBMIT EVENT
// =============================================================SUBMIT EVENT
// =============================================================SUBMIT EVENT
// =============================================================SUBMIT EVENT
let itemList = document.querySelector('.boxitem');
let productFiltered = listProducts;
let filter = document.querySelector('.filter');

filter.addEventListener('submit', function(event) {
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFiltered = listProducts.filter(item => {
        if(valueFilter.producttype.value != ''){
            if(!item.product_type.includes(valueFilter.producttype.value)){
                return false;
            }
        }
        if(valueFilter.firstChild.value != ''){
            console.log(valueFilter.producttype.value);
            if(!item.information.application.includes(valueFilter.firstChild.value)){
                return false;
            }
        }
        if(valueFilter.secondChild.value != ''){
            if(!item.information.target.includes(valueFilter.secondChild.value)){
                return false;
            }
        }
        return true;
    });
    showProduct(productFiltered);
    makePopupWindow();
    brandColor();
});

// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================
// ==============================================================
showProduct(productFiltered);
makePopupWindow();
brandColor();

// ========================================================FUNCTION
// ========================================================FUNCTION
// ========================================================FUNCTION
// ========================================================FUNCTION
// ========================================================FUNCTION
// ========================================================FUNCTION
// ========================================================FUNCTION
// ========================================================FUNCTION
// ========================================================FUNCTION
// ========================================================FUNCTION
// ========================================================FUNCTION
// ========================================================FUNCTION
// ========================================================FUNCTION
// ========================================================FUNCTION
// ========================================================FUNCTION
// ========================================================FUNCTION
// ========================================================FUNCTION
// ========================================================FUNCTION

function showProduct(productFiltered) {
    count.innerText = productFiltered.length;
    itemList.innerHTML = '';
    productFiltered.forEach(item => {

        let newProduct = document.createElement('div');
        newProduct.classList.add('product');
        newProduct.dataset.name = item.dataname;

        let newItem01 = document.createElement('div');
        newItem01.classList.add('productimage');
        newProduct.appendChild(newItem01);        

        let newImage = new Image();
        newImage.src = item.information.productimage;
        newImage.alt = item.productname;
        newItem01.appendChild(newImage);

        let newItem02 = document.createElement('div');
        newItem02.classList.add('productname');
        newItem02.innerText = item.productname;
        newProduct.appendChild(newItem02);

        let newItem03 = document.createElement('div');
        newItem03.classList.add('productdescription');
        newItem03.innerText = item.product_type;
        newProduct.appendChild(newItem03);

        let newItem04 = document.createElement('div');
        newItem04.classList.add('productmanufacturer');
        newItem04.innerText = item.information.productbrand;
        newProduct.appendChild(newItem04);


        

        itemList.appendChild(newProduct);
    })

    
};

function brandColor() {
    let product = document.querySelectorAll('.product');
    let productName = document.querySelectorAll('.productname');
    let productDescription = document.querySelectorAll('.productdescription');
    let productManufacturer = document.querySelectorAll('.productmanufacturer');
    
    for(let i = 0; i < product.length; i++) {
        if(productManufacturer[i].innerText === 'SARTORIUS') {
            product[i].style.backgroundColor = '#FFF100';
        }else {
            if(productManufacturer[i].innerText === 'MERCK') {
                product[i].style.backgroundColor = '#523091';
                productName[i].style.color = 'white';
                productDescription[i].style.color = 'white';
                productManufacturer[i].style.color = 'white';
            };
        };
    };
};

function makePopupWindow() {
    let boxItemProduct = document.querySelectorAll('.product');
    let popupImage = document.getElementById('popupimagea');
    let popupNameBox = document.querySelector('.popupnamebox');
    let popupDescription = document.querySelector('.popupdescription');
    let popupButton02 = document.getElementById('popupbutton02a');
    let popupButton03 = document.getElementById('popupbutton03a');
    let popupContainer = document.querySelector('.popupcontainer');
    boxItemProduct.forEach(item => {
        item.onclick=() => {
            popupContainer.style.display = 'flex';
            let name = item.getAttribute('data-name');
            console.log(name);
            
            let sameDataName = listProducts.find((product) => {
                if(product.dataname === name) {
                    return true;
                }
            })
            
            popupImage.src = sameDataName.information.productimage;
            popupNameBox.innerText = sameDataName.productname;
            popupDescription.innerHTML = sameDataName.feature.point01;
            popupButton02.href = 'tel:'+sameDataName.incharge.tel;
            popupButton03.href = sameDataName.information.productmaterial;
        }
    });
};

// =========================================================CLOSE BUTTON
let popupCloseButton = document.querySelector('.popupclosebutton');
popupCloseButton.onclick = () => {
    let popupContainer = document.querySelector('.popupcontainer');
    popupContainer.style.display = 'none';
};



