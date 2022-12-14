var btnDatHang = document.querySelector('.btn-dat-hang'),
    oligoTitleText = document.querySelector('.oligo-title'),
    disableCustomLabel = document.querySelector('.disable-custom'),
    enableCustomLabel = document.querySelector('.enable-custom'),
    oligoName = document.getElementById('oligo-name'),
    oligoString = document.getElementById('oligo-string'),
    oligoList = document.getElementById('oligo-list'),
    oligoSubmit = document.getElementById('oligo-submit'),
    oligoEdit = document.getElementById('oligo-edit'),
    stringCounter = document.getElementById('string-counter'),
    addToCartOligo = document.querySelector('.add-to-cart-oligo'),
    navSingle = document.querySelector('.nav-single'),
    tabSingle = document.getElementById('tab_single'),
    titleSingle = document.querySelector('.title-single'),
    validateSingle = document.getElementById('validate-single'),
    fiveModified = document.getElementById('five-modified'),
    threeModified = document.getElementById('three-modified'),
    probeOligo = document.getElementById('probe-oligo'),
    singleOligo = document.getElementById('single-oligo'),
    oligoType = document.getElementById('oligo-type'),
    productSku = document.getElementById('product-sku'),

    titleList = document.querySelector('.title-list'),
    oligoListBtn = document.getElementById('oligo-list-btn'),
    oligoListInput = document.getElementById('oligo-list-input'),
    navList = document.querySelector('.nav-list'),
    tabList = document.getElementById('tab_list'),
    validateList = document.getElementById('validate-list'),

    titleExcel = document.querySelector('.title-excel'),
    oligoExcelBtn = document.getElementById('oligo-excel-btn'),
    oligoExcelInput = document.getElementById('oligo-excel-input'),
    navExcel = document.querySelector('.nav-excel'),
    tabExcel = document.getElementById('tab_excel'),
    excelProcess = document.querySelector('.excel-process'),
    excelDragDrop = document.querySelector('.drag-drop-placeholder'),
    validateExcel = document.getElementById('validate-excel'),

    wetBtn = document.querySelector('.btn-wet'),
    dryBtn = document.querySelector('.btn-dry'),
    oligoNormalization = document.getElementById('oligo-normalization'),
    labelConfirmOligoNormalization = document.getElementById('label-confirm-oligo-normalization'),
    checkConfirmOligoNormalization = document.getElementById('check-confirm-oligo-normalization'),
    oligoStatus = document.getElementById('oligo-status'),
    btnBeginWrapper = document.querySelector('.btn-begin-wrapper'),
    btnBeginOligo = document.querySelector('.btn-begin'),
    cardOligoSelect = document.querySelector('.card-oligo-select'),
    cardOligoInput = document.querySelector('.card-oligo-input'),
    cardOligoShow = document.querySelector('.card-oligo-show'),
    btnArrangeGroup = document.querySelector('.btn-arrange-group'),

    oligoArrange = document.getElementById('oligo-arrange'),
    plateLabel = document.querySelector('.plate-label'),
    plateLabelLabel = document.querySelector('.plate-label-label'),
    wellLabel = document.querySelector('.well-label'),
    plateHint = document.querySelector('.plate-hint'),
    confirmOligo = document.querySelector('.confirm-oligo'),
    btnHorizon = document.querySelector('.btn-horizon'),
    btnVertical = document.querySelector('.btn-vertical'),

    showOligo = document.getElementById('product-oligo-show'),
    oligoSummary = document.getElementById('oligo-summary'),
    quantityOligo = document.getElementById('productQuatity'),
    priceOligo = document.getElementById('productPrice');
descriptionOligo = document.getElementById('productOligoDescription'),
    dryFee = 30000, lowNu = 25000, plateFee = 50000, wellFee = 240000, arrangeFee = 50000, normalizationFee = 0, packageFee = 20000, minOrderValue = 500000, minOligo = (isPlate()) ? 96 : 1;

oligoTitleText.innerText = oligoTitle;
oligoName.placeholder = colName;
oligoString.placeholder = colSequence;
enableCustomLabel.innerText = enableCustomText;
disableCustomLabel.innerText = disableCustomText;
labelConfirmOligoNormalization.innerText = confirmChosenLabel;
btnBeginOligo.innerHTML = beginOligoLabel;
wetBtn.innerHTML = wet;
dryBtn.innerHTML = dry;
oligoSubmit.innerHTML = addBtnLabel;
oligoEdit.innerHTML = editBtnLabel;
oligoExcelBtn.innerHTML = oligoExcelBtnLabel;
oligoListBtn.innerHTML = oligoListBtnLabel;
confirmOligo.innerHTML = confirmOligoLabel;
btnHorizon.innerText = btnHorizonLabel;
btnVertical.innerText = btnVerticalLabel;

navList.innerText = oligoListTabLabel;
navSingle.innerText = oligoSingleTabLabel;
navExcel.innerText = oligoExcelTabLabel;
titleSingle.innerText = oligoSingleTitle;
titleList.innerText = oligoListTitle;
oligoListInput.placeholder = oligoListPlaceholder;
titleExcel.innerText = oligoExcelTitle;
excelDragDrop.innerText = oligoExcelPlaceholder;
plateHint.innerText = plateHintText;
btnDatHang.disabled = false;
btnDatHang.closest('.row').querySelector('.waiting-for-load').style.display = 'none';

addToCartOligo.innerText = addToCartLabel;
var productArr = [];
var productOption = [true, false, [], [], 0];
oligoList.innerHTML = displayOligo(productArr);

btnDatHang.addEventListener('click', function () {
    switch (productSku.innerText) {
        case 'PremiumOligo':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [6, 15, 36, 75];
            odList = ['1.5+', '3+', '3+'];
            typeList = ['PremiumOligo.00', 'PremiumOligo.01', 'PremiumOligo.02'];
            normalizationList = [100, 100, 50];
            turnAroundTimeList = [48, 48, 72];
            unitPriceList = [4700, 4700, 5500];
            break;

        case 'LongOligo':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [76, 121, 140];
            odList = ['5+', '5+'];
            typeList = ['LongOligo.01', 'LongOligo.02'];
            normalizationList = [0, 0];
            turnAroundTimeList = [96, 96];
            unitPriceList = [20000, 20000];
            break;

        case 'HiODOligo':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [15, 31, 70];
            odList = ['30', '30'];
            typeList = ['HiOD Oligo.01.30', 'HiOD Oligo.02.30'];
            normalizationList = [0, 0];
            turnAroundTimeList = [48, 72];
            unitPriceList = [17300, 20800];
            break;

        case 'GenomicOligo':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [6, 15, 36, 51, 80];
            odList = ['1+', '1.5+', '1.5+', '1.5+'];
            typeList = ['GenomicOligoGA.00', 'GenomicOligoGA.01', 'GenomicOligoGA.02', 'GenomicOligoGA.03'];
            normalizationList = [0, 0, 0, 0];
            turnAroundTimeList = [48, 48, 72, 72];
            unitPriceList = [5200, 5200, 5700, 6000];
            break;
        case 'OligoScreeningPlate':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [15, 36, 75];
            odList = ['0.5+', '0.5+'];
            typeList = ['OSP.01.02', 'OSP.02.02'];
            normalizationList = [0, 0];
            turnAroundTimeList = [48, 72];
            unitPriceList = [2700, 3100];
            break;

        case 'OligoGenomicPlate':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [15, 36, 75];
            odList = ['0.5+', '0.5+'];
            typeList = ['GSPGA.01.02', 'GSPGA.02.02'];
            normalizationList = [0, 0];
            turnAroundTimeList = [48, 72];
            unitPriceList = [3200, 3600];
            break;

        case 'Endo-ExoModification':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N', 'I', 'O', 'U'];
            nameLength = [3, 15];
            stringLength = [6, 36, 50];
            odList = ['5', '5'];
            typeList = ['Modi.premium.01', 'Modi.premium.02'];
            normalizationList = [0, 0];
            turnAroundTimeList = [168, 168];
            unitPriceList = [4700, 5500];
            modifiedBaseList = ['I', 'O', 'U'];
            modifiedFeeList = [190000, 240000, 190000];
            modified5ValueList = [
                'Thiol-C6-S-S',
                'Biotin',
                'C6-Spacer',
                'C3-Spacer',
                'NH2-C6',
                'NH2-C12',
                'PO4-Phosphat'
            ];
            modified5NameList = [
                'Thiol C6 S-S 200 nmol',
                'Biotin 200 nmol',
                'C6-Spacer 200 nmol',
                'C3-Spacer 200 nmol',
                'NH2 C6 200 nmol',
                'NH2 C12 200 nmol',
                'Phosphorylation 200 nmol'
            ];
            modified5FeeList = [
                2430000,
                1200000,
                850000,
                850000,
                614000,
                1080000,
                614000
            ];
            modified3ValueList = [
                'C6-Spacer',
                'C3-Spacer',
                'Thiol-C6-S-S',
                'PO4-Phosphat',
                'Biotin',
                'Biotin-TEG',
                'NH2-C6',
                'NH2-C12'
            ];
            modified3NameList = [
                'C6-Spacer 200 nmol',
                'C3-Spacer 200 nmol',
                'Thiol C6 S-S 200 nmol',
                'Phosphorylation 200 nmol',
                'Biotin 200 nmol',
                'Biotin-TEG 200 nmol',
                'NH2 C6 200nmol',
                'NH2 C12 200 nmol'
            ];
            modified3FeeList = [
                850000,
                850000,
                2370000,
                614000,
                730000,
                1664000,
                614000,
                1080000];
            break;
        case 'Probe':
            baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
            nameLength = [3, 15];
            stringLength = [6, 36, 50];
            odList = ['5', '5'];
            typeList = ['Probe.Premium 01', 'Probe.Premium 02'];
            normalizationList = [0, 0];
            turnAroundTimeList = [576, 576];
            unitPriceList = [4700, 5500];
            probeValueList = [
                '5\'FAM-3\'TAMRA',
                '5\'HEX-3\'TAMRA',
                '5\'TET-3\'TAMRA',
                '5\'JOE-3\'TAMRA',
                '5\'FAM-3\'BHQ1',
                '5\'HEX-3\'BHQ1',
                '5\'TET-3\'BHQ1',
                '5\'JOE-3\'BHQ1',
                '5\'YakimaYellow-3\'BHQ1',
                '5\'Cal Fluor Orange 560-3\'BHQ1',
                '5\'Cal Fluor Gold 540-3\'BHQ1',
                '5\'TET-3\'BHQ2',
                '5\'Cy3-3\'BHQ2',
                '5\'Cy5-3\'BHQ2',
                '5\'TAMRA-3\'BHQ2',
                '5\'ROX-3\'BHQ2',
                '5\'Texas Red-3\'BHQ2',
                '5\'Cal Fluor Red 610-3\'BHQ2',
                '5\'Quasar 670-3\'BHQ2',
                '5\'Quasar 570-3\'BHQ2',
                '5\'Quasar 705-3\'BHQ2',
                '5\'Cal Flour Orange 560-3\'BHQ2',
                '5\'Cy5-3\'BHQ3',
                '5\'Quasar 670-3\'BHQ3',
                '5\'Quasar 705-3\'BHQ3'
            ];
            probeFeeList = [
                4000000,
                4000000,
                4000000,
                4200000,
                2800000,
                4000000,
                4200000,
                4200000,
                4200000,
                4200000,
                6185000,
                4200000,
                4200000,
                6185000,
                4200000,
                6185000,
                6185000,
                6185000,
                6185000,
                6185000,
                6185000,
                6185000,
                6185000,
                6185000,
                6185000
            ];
            break;

            case 'SingleFloresceneModification':
                baseList = ['A', 'T', 'C', 'G', 'Y', 'R', 'W', 'S', 'K', 'M', 'D', 'V', 'H', 'B', 'X', 'N'];
                nameLength = [3, 15];
                stringLength = [6, 36, 50];
                odList = ['5', '5'];
                typeList = ['Single.Premium 01', 'Single.Premium 02'];
                normalizationList = [0, 0];
                turnAroundTimeList = [576, 576];
                unitPriceList = [4700, 5500];
                singleValueList = [
                    '5\'FAM',
                    '5\'HEX',
                    '5\'ROX',
                    '5\'CY3',
                    '5\'CY5',
                ];
                singleFeeList = [
                    2200000,
                    3000000,
                    4000000,
                    4000000,
                    4000000,
                ];
                break;
        default:
            break;
    }
    if (isProbe() || isSingle() || isModified()) {
        cardOligoInput.classList.remove('d-none');
        cardOligoShow.classList.remove('d-none');
        oligoStatus.innerText = 'dry';
        document.querySelector('.card-oligo-input ul>li:first-child').classList.add('d-none');
        document.querySelector('.card-oligo-input ul>li:last-child').classList.add('d-none');
        if (isModified()) {
            fiveModified.parentElement.classList.remove('d-none');
            addOption(fiveModified, modified5ValueList, modified5NameList);
            oligoString.parentElement.classList.remove('col-lg-8');
            oligoString.parentElement.classList.add('col-lg-4');
            threeModified.parentElement.classList.remove('d-none');
            addOption(threeModified, modified3ValueList, modified3NameList);
        } else if (isProbe()) {
            oligoString.parentElement.classList.remove('col-lg-8');
            oligoString.parentElement.classList.add('col-lg-6');
            probeOligo.parentElement.classList.remove('d-none');
            addOption(probeOligo, probeValueList, probeValueList);
        } else {
            oligoString.parentElement.classList.remove('col-lg-8');
            oligoString.parentElement.classList.add('col-lg-6');
            singleOligo.parentElement.classList.remove('d-none');
            addOption(singleOligo, singleValueList, singleValueList);
        }
    } else if (isPlate()) {
        cardOligoInput.classList.remove('d-none');
        cardOligoShow.classList.remove('d-none');
        oligoStatus.innerText = 'wet';
    } else {
        cardOligoSelect.classList.remove('d-none');
        btnBeginOligo.disabled = true;
        if (isPremium()) {
            oligoNormalization.classList.remove('d-none');
            labelConfirmOligoNormalization.classList.remove('d-none');
            checkConfirmOligoNormalization.classList.remove('d-none');
        }
    }
})

btnBeginOligo.addEventListener('click', function (e) {
    e.preventDefault();
    cardOligoSelect.classList.add('d-none');
    cardOligoInput.classList.remove('d-none');
    cardOligoShow.classList.remove('d-none');
});

btnBeginWrapper.addEventListener('click', function () {
    if (btnBeginOligo.disabled == true) {
        checkConfirmOligoNormalization.classList.add('is-invalid');
        checkConfirmOligoNormalization.classList.remove('is-valid');
        checkConfirmOligoNormalization.closest('.card-body').querySelector('.invalid-feedback').style.display = 'block';
    }
})

wetBtn.addEventListener('click', function () {
    oligoStatus.innerText = 'wet';
    if (isPremium()) {
        oligoNormalization.classList.remove('d-none');
        checkConfirmOligoNormalization.classList.remove('d-none');
        labelConfirmOligoNormalization.classList.remove('d-none');
        btnBeginOligo.disabled = true;
        checkConfirmOligoNormalization.addEventListener('click', function () {
            btnBeginOligo.disabled = (checkConfirmOligoNormalization.checked == true) ? false : true;
            checkConfirmOligoNormalization.classList.add('is-valid');
            checkConfirmOligoNormalization.classList.remove('is-invalid');
            checkConfirmOligoNormalization.closest('.card-body').querySelector('.invalid-feedback').style.display = 'none';
        })
    } else {
        btnBeginOligo.disabled = false;
    }
})

dryBtn.addEventListener('click', function () {
    oligoStatus.innerText = 'dry';
    btnBeginOligo.disabled = false;
    if (isPremium()) {
        oligoNormalization.classList.add('d-none');
        checkConfirmOligoNormalization.classList.add('d-none');
        labelConfirmOligoNormalization.classList.add('d-none');
        oligoNormalization.value = 0;
        checkConfirmOligoNormalization.checked = false;
    }
})

oligoSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    if (validateOligo(oligoName.value, oligoString.value, null, fiveModified.value, threeModified.value, probeOligo.value, singleOligo.value) == `` || validateOligo(oligoName.value, oligoString.value, null, fiveModified.value, threeModified.value, probeOligo.value, singleOligo.value) == `<li>Line ${oligoName.value}: ${difficultOligo}</li>`) {
        productArr.push(createRow(oligoName.value, oligoString.value, (oligoStatus.innerText == 'dry') ? dry : wet, oligoNormalization.value, fiveModified.value, threeModified.value, probeOligo.value, singleOligo.value));
        oligoList.innerHTML = displayOligo(productArr);
        if (productArr.length >= minOligo) {
            confirmOligo.classList.remove('d-none');
            plateHint.innerHTML = plateHintText;
            plateHint.classList.add('d-none');
        } else {
            plateHint.innerHTML = '<p class="text-danger">'+tooLowText+minOligo+sequence+'</p>';
            plateHint.classList.remove('d-none');
        }
        resetForm();
    }
})

oligoListBtn.addEventListener('click', function (e) {
    e.preventDefault();
    validateList.innerHTML += validateListOligo(oligoListInput.value);
    if (productArr.length) {
        oligoList.innerHTML = displayOligo(productArr);
        if (productArr.length >= minOligo) {
            confirmOligo.classList.remove('d-none');
            plateHint.innerHTML = plateHintText;
            plateHint.classList.add('d-none');
        } else {
            plateHint.innerHTML = '<p class="text-danger">'+tooLowText+minOligo+sequence+'</p>';
            plateHint.classList.remove('d-none');
        }
        resetForm();
    }
})

oligoExcelBtn.addEventListener('click', function (e) {
    e.preventDefault();
    excelProcess.classList.remove('d-none');
    excelProcess.innerText = processing;
    if (oligoExcelInput.files.length) { do_file(oligoExcelInput.files); }
    else { oligoExcelInput.click(); }
}, false);

tabSingle.addEventListener('change', function () {
    let num = (oligoName.disabled == true) ? 0 : null;
    validateSingle.innerHTML = validateOligo(oligoName.value, oligoString.value, num, fiveModified.value, threeModified.value, probeOligo.value, singleOligo.value);
})

oligoString.addEventListener('keyup', function () {
    let num = (oligoName.disabled == true) ? 0 : null;
    validateSingle.innerHTML = validateOligo(oligoName.value, oligoString.value, num, fiveModified.value, threeModified.value, probeOligo.value, singleOligo.value);

    //B???t b??? ?????m k?? t??? n???u v?????t qu?? s??? l?????ng cho ph??p
    if (oligoString.value.replace(new RegExp("[ ](?=[ ])|[^-_:;+=.,{}*'A-Za-z0-9 ]+", "g"), "").length > stringLength[stringLength.length - 1]) {
        stringCounter.classList.remove('d-none');
        stringCounter.innerText = oligoString.value.replace(new RegExp("[ ](?=[ ])|[^A-Za-z]+", "g"), "").toUpperCase().length;
    } else {
        stringCounter.classList.add('d-none');
    }
})

confirmOligo.addEventListener('click', function (e) {
    var btnRemove = document.querySelectorAll('.btn-remove'),
        btnEdit = document.querySelectorAll('.btn-edit');
    e.preventDefault();
    let checkOligo = true;
    for (let i = 0; i < productArr.length; i++) {
        if (validateOligo(productArr[i][0], productArr[i][1], null, productArr[i][4], productArr[i][5], productArr[i][6], productArr[i][7]) == `` || validateOligo(productArr[i][0], productArr[i][1], null, productArr[i][4], productArr[i][5], productArr[i][6], productArr[i][7]) == `<li>Line ${productArr[i][0]}: ${difficultOligo}</li>`) {
            checkOligo = true;
        } else {
            checkOligo = false;
            alert(generalErrText);
            break;
        }
    }
    if (checkOligo) {
        for (const btn of btnRemove) {
            btn.remove();
        }
        for (const btn of btnEdit) {
            btn.remove();
        }
        document.querySelector('#oligo-list table tfoot').remove();
        cardOligoInput.classList.add('d-none');
        confirmOligo.classList.add('d-none');
        oligoSummary.innerHTML = summaryOligo();
        if (isPlate()) {
            oligoArrange.innerHTML = arrangePlate(productArr);
            plateHint.classList.remove('d-none');
            addToCartOligo.disabled = true;
            btnArrangeGroup.classList.remove('d-none');
        }
        addToCartOligo.classList.remove('d-none');
    }
})

btnHorizon.addEventListener('click', function () {
    addToCartOligo.disabled = false;
    productOption[0] = true;
    oligoArrange.innerHTML = arrangePlate(clearEmpty());
    oligoSummary.innerHTML = summaryOligo();
})

btnVertical.addEventListener('click', function () {
    addToCartOligo.disabled = false;
    productOption[0] = false;
    oligoArrange.innerHTML = arrangePlate(clearEmpty());
    oligoSummary.innerHTML = summaryOligo();
})

/*---------------------------------
H??m th??m option Normalization cho select
-----------------------------------*/
function addOption(select, valueArr, nameArr, unit = '') {
    if (select.length == 1) {
        for (let i = 0; i < valueArr.length; i++) {
            let option = document.createElement('option');
            option.innerHTML = nameArr[i] + unit;
            option.value = valueArr[i];
            select.appendChild(option);
        }
    }
}

/*---------------------------------
H??m ki???m tra t???ng k?? t??? trong chu???i nh???p v??o c?? trong danh s??ch cho s???n kh??ng
-----------------------------------*/
function validateInputArray(input, list) {
    let inputArr = input.split("");
    let result;
    let vitri = [];
    for (let i = 0; i < inputArr.length; i++) {
        let check = false;
        for (let j = 0; j < list.length; j++) {
            if (inputArr[i] == list[j].toUpperCase()) {
                check = true;
            }
        }
        if (check == false) {
            vitri.push(inputArr[i]);
        }
    }
    if (vitri.length > 0) {
        let text = invalidLetter + ': ';
        text += vitri.join(', ');
        result = text + '. ';
    } else {
        result = '';
    }
    return result;
}

/*---------------------------------
X??c minh xem danh s??ch oligo ???? nh???p c?? h???p l??? kh??ng
-----------------------------------*/
function validateListOligo(listInput) {
    let arr = (listInput.includes('\n\"\t')) ? listInput.replace(/\n\"\t/g, '\t').replace(/,/g, '\t').split(/\r?\n/) : listInput.replace(/,/g, '\t').split(/\r?\n/);
    let textErr = ``;
    for (let i = 0; i < arr.length; i++) {
        let oligo = arr[i].split('\t');
        if (oligo.length > 1) {
            let oName = oligo[0].replace(new RegExp("[ ](?=[ ])|[^-_:;+=.,{}*'A-Za-z0-9 ]+", "g"), ""),
                oString = oligo[1].replace(new RegExp("[ ](?=[ ])|[^A-Za-z]+", "g"), "").toUpperCase(),
                oStatus = (oligoStatus.innerText == 'dry') ? dry : wet,
                oNormalization = oligoNormalization.value;
            if (validateOligo(oName, oString) != '') {
                textErr += validateOligo(oName, oString);
            }
            if (validateOligo(oName, oString) == '' || validateOligo(oName, oString) == `<li>Line ${oName}: ${difficultOligo}</li>`) {
                productArr.push(createRow(oName, oString, oStatus, oNormalization));
            }
        } else if (oligo.length <= 1) {
            textErr += (oligo[0] != '') ? `<li>${generalErrText}</li>` : '';
        }
    }
    return textErr;
}

/*---------------------------------
X??c minh xem t??n v?? chu???i Oligo ???? nh???p c?? h???p l??? kh??ng
-----------------------------------*/
function validateOligo(name, string, num = null, mod5 = ``, mod3 = ``, prb = ``, sgl = ``) {
    let arrayName = [], arrayString = [], text = '';

    name = name.replace(new RegExp("[ ](?=[ ])|[^-_:;+=.,{}*'A-Za-z0-9 ]+", "g"), "");
    string = string.replace(new RegExp("[ ](?=[ ])|[^A-Za-z]+", "g"), "").toUpperCase();
    oligoName.value = name;
    oligoString.value = string;

    for (let i = 0; i < productArr.length; i++) {
        arrayName.push(productArr[i][0]);
        arrayString.push(productArr[i][0] + productArr[i][1] + productArr[i][4] + productArr[i][5] + productArr[i][6]);
    }

    if (name == ``) {
        oligoName.classList.add('border-danger');
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
        text += `<li>${noEmptyName}</li>`;
    }
    if (name == null) {
        oligoName.classList.add('border-danger');
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
        text += `<li>${noEmptyName}</li>`;
    }
    if (name.length < nameLength[0]) {
        oligoName.classList.add('border-danger');
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
        text += `<li>Line ${name}: ${minNameLengthText + nameLength[0] + letter}</li>`;
    }
    if (name.length > nameLength[1]) {
        oligoName.classList.add('border-danger');
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
        text += `<li>Line ${name}: ${maxNameLengthText + nameLength[1] + letter}</li>`;
    }
    if (string == "") {
        oligoString.classList.add('border-danger');
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
        text += `<li>Line ${name}: ${noEmptyString}</li>`;
    }
    if (validateInputArray(string, baseList) != '') {
        oligoString.classList.add('border-danger');
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
        text += `<li>Line ${name}: ${validateInputArray(string, baseList)}</li>`;
    }
    if (string.length < stringLength[0]) {
        oligoString.classList.add('border-danger');
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
        text += `<li>Line ${name}: ${minStringLengthText + stringLength[0] + base}</li>`;
    }
    if (string.length > stringLength[stringLength.length - 1]) {
        oligoString.classList.add('border-danger');
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
        text += `<li>Line ${name}: ${maxStringLengthText + stringLength[stringLength.length - 1] + base}</li>`;
    }
    if (string.includes('GGGGGG')) {
        oligoString.classList.add('border-danger');
        text += `<li>Line ${name}: ${difficultOligo}</li>`;
    }
    if (num == null && arrayName.includes(name) && !arrayString.includes(name + string + mod5 + mod3 + prb)) {
        oligoName.classList.add('border-danger');
        oligoString.classList.add('border-danger');
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
        text += `<li>Line ${name}: ${existName}</li>`;
    }
    if (isModified() && mod5 == '' && mod3 == '') {
        fiveModified.classList.add('border-danger');
        threeModified.classList.add('border-danger');
        text += `<li>Line ${name}: ${noEmptyModified}</li>`;
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
    }
    if (isProbe() && prb == '') {
        probeOligo.classList.add('border-danger');
        text += `<li>Line ${name}: ${noEmptyProbe}</li>`;
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
    }
    if (isSingle() && sgl == '') {
        probeOligo.classList.add('border-danger');
        text += `<li>Line ${name}: ${noEmptySingle}</li>`;
        oligoSubmit.disabled = true;
        oligoEdit.disabled = true;
    }
    if (text == `` || text == `<li>Line ${name}: ${difficultOligo}</li>`) {
        oligoName.classList.remove('border-danger');
        oligoString.classList.remove('border-danger');
        fiveModified.classList.remove('border-danger');
        threeModified.classList.remove('border-danger');
        probeOligo.classList.remove('border-danger');
        oligoSubmit.disabled = false;
        oligoEdit.disabled = false;
    }
    return text;
}

/*---------------------------------
????a form nh???p d??? li???u tr??? v??? tr???ng th??i ban ?????u
-----------------------------------*/
function resetForm() {
    oligoName.classList.remove('border-danger');
    oligoString.classList.remove('border-danger');
    oligoEdit.classList.add('d-none');
    oligoSubmit.classList.remove('d-none');
    validateSingle.innerHTML = "";
    oligoName.value = '';
    oligoName.disabled = false;
    oligoString.value = '';
    oligoName.focus();
    stringCounter.classList.add('d-none');
    oligoListInput.value = '';
    excelProcess.classList.add('d-none');
    titleSingle.innerText = oligoSingleTitle;
    navSingle.innerText = oligoSingleTabLabel;
    fiveModified.value = '';
    probeOligo.value = '';
}

/*
Lo???i b??? d???u ti???ng Vi???t trong chu???i nh???p v??o
*/
// function delVnTones(str) {
//     str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "a");
//     str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "e");
//     str = str.replace(/??|??|???|???|??/g, "i");
//     str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "o");
//     str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "u");
//     str = str.replace(/???|??|???|???|???/g, "y");
//     str = str.replace(/??/g, "d");
//     str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "A");
//     str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "E");
//     str = str.replace(/??|??|???|???|??/g, "I");
//     str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "O");
//     str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "U");
//     str = str.replace(/???|??|???|???|???/g, "Y");
//     str = str.replace(/??/g, "D");
//     // Some system encode vietnamese combining accent as individual utf-8 characters
//     // M???t v??i b??? encode coi c??c d???u m??, d???u ch??? nh?? m???t k?? t??? ri??ng bi???t n??n th??m hai d??ng n??y
//     str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ?? ?? ?? ?? ??  huy???n, s???c, ng??, h???i, n???ng
//     str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ?? ?? ??  ??, ??, ??, ??, ??
//     // Remove extra spaces
//     // B??? c??c kho???ng tr???ng li???n nhau
//     str = str.replace(/ + /g, " ");
//     str = str.trim();
//     // Remove punctuations
//     // B??? d???u c??u, k?? t??? ?????c bi???t
//     str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
//     return str;
// }

/*---------------------------------
T???o th??m m???t m???ng con (h??ng d??? li???u)
-----------------------------------*/
function createRow(name, sequence, dry, normalization, modified5 = '', modified3 = '', prb = '', sgl = '') {
    let array = [];
    name = name.replace(new RegExp("[^-_:;+=.,{}*'A-Za-z0-9 ]+", "g"), "");
    sequence = sequence.replace(new RegExp("[ ](?=[ ])|[^A-Za-z]+", "g"), "").toUpperCase();
    array.push(name, sequence, dry, normalization, modified5, modified3, prb, sgl);
    return array;
}

/*---------------------------------
Hi???n th??? d??? li???u c???a 1 h??ng (m???ng con) l??n form ????? ti???n h??nh ch???nh s???a
-----------------------------------*/
function editRow(num) {
    oligoName.value = productArr[num][0];
    oligoName.disabled = true;
    oligoString.value = productArr[num][1];
    if (isModified()) {
        fiveModified.value = productArr[num][4];
        threeModified.value = productArr[num][5];
    } else if (isProbe() || isSingle()) {
        probeOligo.value = productArr[num][6];
    }
    oligoStatus.innerText = (productArr[num][2] == dry) ? `dry` : `wet`;
    oligoEdit.classList.remove('d-none');
    oligoEdit.setAttribute("onclick", `updateRow(event)`);
    oligoSubmit.classList.add('d-none');
    navSingle.classList.add('active');
    navExcel.classList.remove('active');
    navList.classList.remove('active');
    tabSingle.classList.add('active');
    tabExcel.classList.remove('active');
    tabList.classList.remove('active');
    titleSingle.innerText = oligoEditTitle;
    navSingle.innerText = oligoEditTabLabel;
    oligoString.focus();
}

/*---------------------------------
C???p nh???t d??? li???u ???? s???a v??o l???i b???ng
-----------------------------------*/
function updateRow(e) {
    e.preventDefault();
    if (validateOligo(oligoName.value, oligoString.value, 0, fiveModified.value, threeModified.value, probeOligo.value, singleOligo.value) == `` || validateOligo(oligoName.value, oligoString.value, 0, fiveModified.value, threeModified.value, probeOligo.value, singleOligo.value) == `<li>Line ${oligoName.value}: ${difficultOligo}</li>`) {
        for (let i = 0; i < productArr.length; i++) {
            if (productArr[i][0] == oligoName.value) {
                productArr[i] = createRow(oligoName.value, oligoString.value, (oligoStatus.innerText == 'dry') ? dry : wet, oligoNormalization.value, fiveModified.value, threeModified.value, probeOligo.value, singleOligo.value);
            }
        }
        oligoList.innerHTML = displayOligo(productArr);
        resetForm();
    }
}

/*---------------------------------
X??a m???t m???ng con (h??ng d??? li???u)
-----------------------------------*/
function removeRow(value) {
    if (confirm('X??c nh???n tr?????c khi x??a?')) {
        productArr.splice(value, 1);
        oligoList.innerHTML = displayOligo(productArr);
    }
}

/*---------------------------------
Ki???m tra coi c?? ph???i plate kh??ng
-----------------------------------*/
function isPlate() {
    return (productSku.innerText == 'OligoScreeningPlate' || productSku.innerText == 'OligoGenomicPlate') ? true : false;
}

/*---------------------------------
Ki???m tra coi c?? ph???i premium kh??ng
-----------------------------------*/
function isPremium() {
    return (productSku.innerText == 'PremiumOligo') ? true : false;
}

/*---------------------------------
Ki???m tra coi c?? ph???i genomic kh??ng
-----------------------------------*/
function isGenomic() {
    return (productSku.innerText == 'GenomicOligo') ? true : false;
}

/*---------------------------------
Ki???m tra coi c?? ph???i modified kh??ng
-----------------------------------*/
function isModified() {
    return (productSku.innerText == 'Endo-ExoModification') ? true : false;
}

/*---------------------------------
Ki???m tra coi c?? ph???i probe kh??ng
-----------------------------------*/
function isProbe() {
    return (productSku.innerText == 'Probe') ? true : false;
}
/*---------------------------------
Ki???m tra coi c?? ph???i single kh??ng
-----------------------------------*/
function isSingle() {
    return (productSku.innerText == 'SingleFloresceneModification') ? true : false;
}

/*---------------------------------
Nh???p v??o s??? milisecond, h??m s??? tr??? v??? ng??y th??ng ?????nh d???ng dd/mm/yyyy
-----------------------------------*/
function dmYFormat(value) {
    var date = new Date(value),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("/");
}

/*---------------------------------
Hi???n th??? gi?? tr??? ti???n t???
-----------------------------------*/
function currencyDisplay(number) {
    array = String(number).split('');
    for (let i = array.length-1, j=0; i >= 0; i--, j++) {
        if (j%3===0) {
            array[i]=`<span style="letter-spacing: 3px;">${array[i]}</span>`;
        }
    }
    return array.join('');
}

/*---------------------------------
H??m th??m ?? r???ng
-----------------------------------*/
function emptyCell(action, value) {
    if (action == 'add') {
        productArr.splice(value, 0, '');
    } else {
        productArr.splice(value, 1);
    }
    oligoArrange.innerHTML = arrangePlate(productArr);
    oligoSummary.innerHTML = summaryOligo();
}

/*---------------------------------
H??m th??m h??ng r???ng
-----------------------------------*/
function emptyRow(value) {
    if (productOption[0]) {
        for (let i = 0; i < 12; i++) {
            if (value < productArr.length) {
                productArr.splice(value, 0, '');
                oligoArrange.innerHTML = arrangePlate(productArr);
                oligoSummary.innerHTML = summaryOligo();
            } else {
                break;
            }
        }
    } else {
        for (let i = 0; i < 96; i += 8) {
            if (value + i < productArr.length) {
                productArr.splice(value + i, 0, '');
                oligoArrange.innerHTML = arrangePlate(productArr);
                oligoSummary.innerHTML = summaryOligo();
            } else {
                break;
            }
        }
    }
}
/*---------------------------------
H??m th??m c???t r???ng
-----------------------------------*/
function emptyCol(value) {
    if (productOption[0]) {
        for (let i = 0; i < 96; i += 12) {
            if (value + i < productArr.length) {
                productArr.splice(value + i, 0, '');
                oligoArrange.innerHTML = arrangePlate(productArr);
                oligoSummary.innerHTML = summaryOligo();
            } else {
                break;
            }
        }
    } else {
        for (let i = 0; i < 8; i++) {
            if (value * 8 < productArr.length) {
                productArr.splice(value * 8 + i, 0, '');
                oligoArrange.innerHTML = arrangePlate(productArr);
                oligoSummary.innerHTML = summaryOligo();
            } else {
                break;
            }
        }
    }
}

/*---------------------------------
H??m xo?? t???t c??? ?? r???ng trong m???ng
-----------------------------------*/
function clearEmpty() {
    return productArr = productArr.filter(function (el) {
        return el != '';
    });
}

/*---------------------------------
H??m thay ?????i t??y ch???n cho plate
-----------------------------------*/
function updateOption(obj) {
    let plateLabel = document.querySelectorAll('.plate-label'),
        wellLabelInput = document.querySelectorAll('.well-label-input');
    if (obj.getAttribute('type') != 'checkbox') {
        delete productOption[2];
        let array = [];
        for (const label of plateLabel) {
            array.push(label.innerText);
        }
        productOption[2] = array;
    } else {
        delete productOption[3];
        let array = [];
        for (const check of wellLabelInput) {
            array.push(check.checked);
        }
        productOption[3] = array;
    }
    oligoList.innerHTML = displayOligo(insLocationCol(productArr), false);
    oligoSummary.innerHTML = summaryOligo();
    // console.log(productOption);
}

/*---------------------------------
H??m th??m c???t v??? tr?? cho danh s??ch oligo
-----------------------------------*/
function insLocationCol(arr2ways) {
    let number, letter;
    if (productOption[0]) {
        for (let k = 0; k < arr2ways.length; k += 96) {
            if (productOption[2].length >= k / 96 + 1) {
                pName = productOption[2][k / 96];
            } else {
                pName = k / 96 + 1;
                productOption[2].push(pName);
            }
            for (let i = 0; i < 96; i += 12) {
                letter = String.fromCharCode(i / 12 + 1 + 64);
                for (let j = 0; j < 12; j++) {
                    if (i + j + k < arr2ways.length) {
                        if (arr2ways[i + j + k][0] != undefined) {
                            number = ((j + 1) < 10) ? '0' + (j + 1) : (j + 1);
                            arr2ways[i + j + k][6] = pName +'??'+ letter + number;
                        }
                    }
                }
            }
        }
    } else {
        for (let k = 0; k < arr2ways.length; k += 96) {
            if (productOption[2].length >= k / 96 + 1) {
                pName = productOption[2][k / 96];
            } else {
                pName = k / 96 + 1;
                productOption[2].push(pName);
            }
            for (let i = 0; i < 96; i += 12) {
                letter = String.fromCharCode(i / 12 + 1 + 64);
                for (let j = 0; j < 12; j++) {
                    if ((i / 12 + k) + j * 8 < arr2ways.length) {
                        if (arr2ways[(i / 12 + k) + j * 8][0] != undefined) {
                            number = ((j + 1) < 10) ? '0' + (j + 1) : (j + 1);
                            arr2ways[(i / 12 + k) + j * 8][6] = pName +'??'+ letter + number;
                        }
                    }
                }
            }
        }
    }
    return arr2ways;
}


/*---------------------------------
Hi???n th??? m???ng l???n d??? li???u ra m??n h??nh
-----------------------------------*/
function displayOligo(arr2ways, editable = true) {
    if (arr2ways.length) {
        let subTotal = 0,
            str = `
        <table class="table table-striped table-hover table-sm align-middle">
            <thead>
                <tr>
                    <th scope="col" class="text-center">&#8470;</th>
                    <th scope="col" class="text-center">${colName}</th>`;
        str += (isModified()) ? `<th scope="col" class="text-center">5\' modified</th>` : ``;
        str += `    <th scope="col" style="max-width: 25rem;">${colSequence}</th>`;
        str += (isModified()) ? `<th scope="col" class="text-center">3' modified</th>` : ``;
        str += (isProbe()) ? `<th scope="col" class="text-center">Probe</th>` : ``;
        str += (isSingle()) ? `<th scope="col" class="text-center">5\' modified</th>` : ``;
        str += `    <th scope="col" class="text-center">${colLength}</th>
                    <th scope="col" class="text-center">${colOD}</th>`;
        str += (isModified() || isProbe() || isSingle()) ? `` : `<th scope="col" class="text-center">${colStatus}</th>`;
        str += (isModified() || isProbe() || isSingle()) ? `` : `<th scope="col" class="text-center">${colNormalization}</th>`;
        str += (isModified() || isProbe() || isSingle()) ? `<th scope="col" class="text-end">${colBasePrice}</th>` : `<th scope="col" class="text-end">${colUnitPrice}</th>`;
        str += (isModified() || isProbe() || isSingle()) ? `<th scope="col" class="text-end">${colMod}</th>` : `<th scope="col" class="text-end">${colFee}</th>`;
        str += `    <th scope="col" class="text-end">${colTotal}</th>`;
        str += `    <th scope="col" class="text-center">${colType}</th>`;
        str += (arr2ways[0][6] == `` && arr2ways[arr2ways.length - 1][6] == ``) ? `` : `<th scope="col" class="text-end">${platePlace}</th>`;
        str += `    <!--th scope="col" class="text-center">${colEDD}<th-->`;
        str += (editable) ? `<th scope="col">&nbsp;</th>` : ``;
        str += `    </tr>
            </thead>
            <tbody>`;
        for (let i = 0; i < arr2ways.length; i++) {
            if (arr2ways[i] != ``) {
                let od, type, normalization, unitPrice, basePrice, eDD, fee = 0, countModBase = 0;
                const d = new Date();
                let time = d.getTime();
                switch (true) {
                    case (!isNaN(stringLength[1]) && arr2ways[i][1].length >= stringLength[0] && arr2ways[i][1].length <= stringLength[1]):
                        od = odList[0];
                        type = typeList[0];
                        normalization = (arr2ways[i][3] == 0) ? no : normalizationList[0];
                        eDD = dmYFormat(new Date(3600000 * turnAroundTimeList[0] + time));
                        unitPrice = unitPriceList[0];
                        break;
                    case (!isNaN(stringLength[2]) && arr2ways[i][1].length > stringLength[1] && arr2ways[i][1].length <= stringLength[2]):
                        od = odList[1];
                        type = typeList[1];
                        normalization = (arr2ways[i][3] == 0) ? no : normalizationList[1];
                        eDD = dmYFormat(new Date(3600000 * turnAroundTimeList[1] + time));
                        unitPrice = unitPriceList[1];
                        break;
                    case (!isNaN(stringLength[3]) && arr2ways[i][1].length > stringLength[2] && arr2ways[i][1].length <= stringLength[3]):
                        od = odList[2];
                        type = typeList[2];
                        normalization = (arr2ways[i][3] == 0) ? no : normalizationList[2];
                        eDD = dmYFormat(new Date(3600000 * turnAroundTimeList[2] + time));
                        unitPrice = unitPriceList[2];
                        break;
                    case (!isNaN(stringLength[4]) && arr2ways[i][1].length > stringLength[3] && arr2ways[i][1].length <= stringLength[4]):
                        od = odList[3];
                        type = typeList[3];
                        normalization = (arr2ways[i][3] == 0) ? no : normalizationList[3];
                        eDD = dmYFormat(new Date(3600000 * turnAroundTimeList[3] + time));
                        unitPrice = unitPriceList[3];
                        break;
                    case (!isNaN(stringLength[5]) && arr2ways[i][1].length > stringLength[4] && arr2ways[i][1].length <= stringLength[5]):
                        od = odList[4];
                        type = typeList[4];
                        normalization = (arr2ways[i][3] == 0) ? no : normalizationList[4];
                        eDD = dmYFormat(new Date(3600000 * turnAroundTimeList[4] + time));
                        unitPrice = unitPriceList[4];
                        break;
                    default:
                        break;
                }
                // console.log(arr2ways[i][1].length, arr2ways[i][0], unitPrice);
                fee += (arr2ways[i][1].length < 15 && isGenomic() || arr2ways[i][1].length < 15 && isPremium()) ? lowNu : 0;
                fee += (arr2ways[i][2] == dry && !isModified() && !isProbe() && !isSingle()) ? dryFee : 0;
                fee += (normalization > 0) ? normalizationFee : 0;
                if (isModified()) {
                    fee += (arr2ways[i][4] != '') ? parseInt(modified5FeeList[modified5ValueList.indexOf(arr2ways[i][4])]) : 0;
                    fee += (arr2ways[i][5] != '') ? parseInt(modified3FeeList[modified3ValueList.indexOf(arr2ways[i][5])]) : 0;
                    for (let j = 0; j < modifiedBaseList.length; j++) {
                        if (arr2ways[i][1].includes(modifiedBaseList[j])) {
                            fee += (arr2ways[i][1].match(new RegExp(modifiedBaseList[j], "g")) || []).length * parseInt(modifiedFeeList[j]);
                            countModBase+=(arr2ways[i][1].match(new RegExp(modifiedBaseList[j], "g")) || []).length;
                        }
                    }
                } else if (isProbe()) {
                    fee += (arr2ways[i][6] != '') ? parseInt(probeFeeList[probeValueList.indexOf(arr2ways[i][6])]) : 0;
                } else if (isSingle()) {
                    fee += (arr2ways[i][7] != '') ? parseInt(singleFeeList[singleValueList.indexOf(arr2ways[i][7])]) : 0;
                }
                total = unitPrice * arr2ways[i][1].length + fee;
                basePrice = unitPrice * (arr2ways[i][1].length - countModBase);
                subTotal += total;
                str += `<tr>
                        <td scope="col" class="text-center">${i + 1}</td>
                        <td scope="col" class="text-center">${arr2ways[i][0]}</td>`;
                str += (isModified()) ? `<td scope="col" class="text-center">${arr2ways[i][4]}</td>` : ``;
                str += `    <td scope="col" style="max-width: 25rem;">${arr2ways[i][1]}</td>`;
                str += (isModified()) ? `<td scope="col" class="text-center">${arr2ways[i][5]}</td>` : ``;
                str += (isProbe()) ? `<td scope="col" class="text-center">${arr2ways[i][6]}</td>` : ``;
                str += (isSingle()) ? `<td scope="col" class="text-center">${arr2ways[i][7]}</td>` : ``;
                str += `<td scope="col" class="text-center lownu-trigger">${arr2ways[i][1].length}</td>
                        <td scope="col" class="text-center">${od}</td>`;
                str += (isModified() || isProbe() || isSingle()) ? `` : `<td scope="col" class="text-center status-trigger">${arr2ways[i][2]}</td>`;
                str += (isModified() || isProbe() || isSingle()) ? `` : `<td scope="col" class="text-center normalization-trigger">${normalization}</td>`;
                str += (isModified() || isProbe() || isSingle()) ? `<td scope = "col" class="text-end oligo-money" > ${currencyDisplay(basePrice)}</td>` : `<td scope = "col" class="text-end oligo-money" > ${currencyDisplay(unitPrice)}</td>`;
                str += `<td scope="col" class="text-end oligo-money">${currencyDisplay(fee)}</td>
                        <td scope="col" class="text-end oligo-money">${currencyDisplay(total)}</td>`;
                str += `<td scope="col" class="text-center">${type}</td>`;
                str += (arr2ways[i][6] == ``) ? `` : `<td scope="col" class="text-end">${arr2ways[i][6]}</td>`;
                str += `    <!--td scope="col" class="text-center">${eDD}<td-->`;
                str += (editable) ? `
                <td scope="col" class="text-center">
                    <button class="btn btn-link btn-edit" onclick="editRow(${i})"><i class="fa-solid fa-pencil"></i></button>
                    <button class="btn btn-link btn-remove" onclick="removeRow(${i})"><i class="fa-solid fa-trash"></i></button>
                </td>` : ``;
                str += `    </tr > `;
            }
        }
        str += `</tbody>
                <tfoot>
                    <tr>
                        <th colspan="9" class="text-end">${subTotalLabel}</th>
                        <th class="text-end oligo-money">${currencyDisplay(subTotal)}</th>
                        <th colspan="3"></th>
                    </tr>
                </tfoot>
        </table > 
        <div id="product-oligo-subtotal" class="d-none">${subTotal}</div>`;
        window.onbeforeunload = function (e) {
            return 'B???n c?? ch???c ch???n kh??ng?';
        };
        return str;
    } else {
        return `<p> ${guideText} <span class="badge bg-primary text-light">${addBtnLabel}</span></p> `;
    }
}

function arrangePlate(arr2ways) {
    let tableArrange = ``, number, letter;
    if (productOption[0]) {
        for (let k = 0; k < arr2ways.length; k += 96) {
            if (productOption[2].length >= k / 96 + 1) {
                pName = productOption[2][k / 96];
                pWell = productOption[3][k / 96];
            } else {
                pName = k / 96 + 1;
                pWell = false;
                productOption[2].push(pName);
                productOption[3].push(pWell);
            }
            tableArrange += `
            <table class="table table-borderless table-arrange align-middle text-center" style="min-width:1000px">
                <tr>
                    <th scope="col" class="plate-label-label" colspan="3">${plateLabelLabelText}</th>
                    <th scope="col" class="plate-label" onkeyup="updateOption(this)" style="border-bottom: 1px solid #777" contenteditable>${pName}</th>
                    <th scope="col" colspan="9">??</th>
                </tr>
            </table>
                <table class="table table-borderless table-arrange align-middle text-center" style="min-width:1000px">
                    <colgroup>
                        <col width="4%">
                            <col span="12" width="8%">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col" style="width: 50px;">??</th>`;
            for (let i = 1; i < 13; i++) {
                number = (i < 10) ? '0' + i : i;
                colClick = (arr2ways.includes(``)) ? `` : `class="col-hover" onclick="emptyCol(${i + k - 1}, ${productOption[0]})"`;
                tableArrange += `<th ${colClick} style="width: 100px;"><span>${number}</span></th>`;
            }
            tableArrange += `</tr>
                            </thead>
                            <tbody>`;
            for (let i = 0; i < 96; i += 12) {
                letter = String.fromCharCode(i / 12 + 1 + 64);
                rowClick = (arr2ways.includes(``)) ? `` : `class="row-hover c-pointer" onclick="emptyRow(${i + k}, ${productOption[0]})"`;
                tableArrange += `<tr>
                                    <th scope="row" ${rowClick}><span>${letter}</span></th>`;
                for (let j = 0; j < 12; j++) {
                    if (i + j + k < arr2ways.length) {
                        if (arr2ways[i + j + k][0] == undefined) {
                            tableArrange += `<td class="cell-hover c-pointer" onclick="emptyCell('remove', ${i + j + k}, ${productOption[0]})">??</td>`;
                        } else {
                            cellClick = (arr2ways.includes(``)) ? `` : `class="cell-hover c-pointer" onclick="emptyCell('add', ${i + j + k}, ${productOption[0]})"`;
                            tableArrange += `<td ${cellClick}>${arr2ways[i + j + k][0]}</td>`;
                        }
                    } else {
                        tableArrange += `<td></td>`;
                    }
                }
                tableArrange += `</tr>`;
            }
            tableArrange += `
                            </tbody>
                        </table>`;
        }
    } else {
        for (let k = 0; k < arr2ways.length; k += 96) {
            if (productOption[2].length >= k / 96 + 1) {
                pName = productOption[2][k / 96];
                pWell = productOption[3][k / 96];
            } else {
                pName = k / 96 + 1;
                pWell = false;
                productOption[2].push(pName);
                productOption[3].push(pWell);
            }
            tableArrange += `
                        <table class="table table-borderless table-arrange align-middle text-center" style="min-width:1000px">
                            <tr>
                                <th scope="col" class="plate-label-label" colspan="3">${plateLabelLabelText}</th>
                                <th scope="col" class="plate-label" onkeyup="updateOption(this)" style="border-bottom: 1px solid #777" contenteditable>${pName}</th>
                                <th scope="col" colspan="9">??</th>
                            </tr>
                        </table>
                        <table class="table table-borderless table-arrange align-middle text-center" style="min-width:1000px">
                            <thead>
                                <tr>
                                    <th scope="col" style="width: 50px;"></th>`;
            for (let i = 1; i < 13; i++) {
                number = (i < 10) ? '0' + i : i;
                colClick = (arr2ways.includes(``)) ? `` : `class="col-hover c-pointer" onclick="emptyCol(${i + k / 8 - 1}, ${productOption[0]})"`;
                tableArrange += `<th ${colClick} style="width: 100px;"><span>${number}</span></th>`;
            }
            tableArrange += `</tr>
                            </thead>
                            <tbody>`;
            for (let i = 0; i < 96; i += 12) {
                letter = String.fromCharCode(i / 12 + 1 + 64);
                rowClick = (arr2ways.includes(``)) ? `` : `class="row-hover c-pointer" onclick="emptyRow(${i / 12 + k}, ${productOption[0]})"`;
                tableArrange += `<tr>
                                    <th scope="row" ${rowClick}><span>${letter}</span></th>`;
                for (let j = 0; j < 12; j++) {
                    if ((i / 12 + k) + j * 8 < arr2ways.length) {
                        if (arr2ways[(i / 12 + k) + j * 8][0] == undefined) {
                            tableArrange += `<td class="cell-hover c-pointer" onclick="emptyCell('remove', ${(i / 12 + k) + j * 8}, ${productOption[0]})">??</td>`;
                        } else {
                            cellClick = (arr2ways.includes(``)) ? `` : `class="cell-hover c-pointer" onclick="emptyCell('add', ${(i / 12 + k) + j * 8}, ${productOption[0]})"`;
                            tableArrange += `<td ${cellClick}>${arr2ways[(i / 12 + k) + j * 8][0]}</td>`;
                        }
                    } else {
                        tableArrange += `<td></td>`;
                    }
                }
                tableArrange += `</tr>`;
            }
            tableArrange += `
                            </tbody>
                        </table>`;
        }
    }
    oligoList.innerHTML = displayOligo(insLocationCol(arr2ways), false);
    return tableArrange;
}

/*---------------------------------
Hi???n th??? t???ng k???t chi ph?? v?? c??c ph??? ph?? ph??t sinh cho s???n ph???m oligo tr?????c khi ????a v??o gi??? h??ng
-----------------------------------*/
function summaryOligo() {
    var sumText = ``, plateArrangeFee = 0, plateNameFee = 0, wellNameFee = 0, packageBoxFee = 0, totalSurchanges = 0, subTotalAmount = 0,
        totalAmount = parseInt(document.getElementById('product-oligo-subtotal').innerText),
        lowNuTrigger = document.querySelectorAll('.lownu-trigger'),
        statusTrigger = document.querySelectorAll('.status-trigger'),
        normalizationTrigger = document.querySelectorAll('.normalization-trigger'),
        a, b, c, d, e, f, g, h;
    sumText += `<table class="table table-hover my-3">`;

    if (isPlate()) {
        plateArrangeFee += (productArr.includes('')) ? arrangeFee : 0;
        for (let i = 0; i < productOption[2].length; i++) {
            plateNameFee += (productOption[2][i] != i + 1) ? plateFee : 0;
            wellNameFee += (productOption[3][i]) ? wellFee : 0;
        }
        productOption[4] = plateArrangeFee + plateNameFee + wellNameFee;
        d = 96;
    } else {
        a = (productArr.length % 20 != 0) ? (productArr.length % 20) / 20 : 1;
        b = (productArr.length % 45 != 0) ? (productArr.length % 45) / 45 : 1;
        d = (Math.max(a, b) == a) ? 20 : 45;
    }

    e = (productArr.length % d == 0) ? productArr.length / d : (productArr.length - (productArr.length % d)) / d + 1;
    for (const lowNu of lowNuTrigger) {
        f = (parseInt(lowNu.innerText) < 15 && isGenomic() && lowNu > 0 || parseInt(lowNu.innerText) < 15 && isPremium() && lowNu > 0) ? true : false;
        if (f) break;
    }
    for (const status of statusTrigger) {
        g = (status.innerText == dry && dryFee > 0) ? true : false;
        if (g) break;
    }
    for (const normalization of normalizationTrigger) {
        h = (parseInt(normalization.innerText) > 0 && normalizationFee > 0) ? true : false;
        if (h) break;
    }
    // sumText += `<tr>
    //     <td scope="col" class="text-start ps-5">Gi?? tr??? Oligo ???? nh???p</td>
    //     <td scope="col" class="text-end pe-5">${totalAmount)}??</td>
    // </tr>`;
    packageBoxFee += (totalAmount <= minOrderValue) ? packageFee : 0;
    sumText += (packageBoxFee != 0) ? `<tr><td scope="col" colspan="11" class="text-start ps-5">${packageFeeText + currencyDisplay(minOrderValue)}??</td><td scope="col" colspan="2" class="text-end pe-5">${currencyDisplay(packageBoxFee)}??</td></tr>` : ``;
    sumText += (plateArrangeFee != 0) ? `<tr><td scope="col" colspan="11" class="text-start ps-5">${basePlateArrangeFeeText}</td><td scope="col" colspan="2" class="text-end pe-5">${currencyDisplay(arrangeFee)}??</td></tr>` : ``;
    sumText += (plateNameFee != 0) ? `<tr><td scope="col" colspan="11" class="text-start ps-5">${plateNameFeeText}</td><td scope="col" colspan="2" class="text-end pe-5">${currencyDisplay(plateNameFee)}??</td></tr>` : ``;
    sumText += (wellNameFee != 0) ? `<tr><td scope="col" colspan="11" class="text-start ps-5">${wellNameFeeText}</td><td scope="col" colspan="2" class="text-end pe-5">${currencyDisplay(wellNameFee)}??</td></tr>` : ``;
    totalSurchanges = plateArrangeFee + plateNameFee + wellNameFee + packageBoxFee;
    subTotalAmount = totalAmount + totalSurchanges;
    sumText += `<tr><th scope="col" colspan="11" class="text-start ps-5">${subTotalLabel}</th><th scope="col" colspan="2" class="text-end pe-5 oligo-money">${currencyDisplay(subTotalAmount)}??</th></tr>`;
    sumText += (f) ? `<tr>
        <td scope="col" colspan="13" class="text-start ps-5">Ph??? ph?? ${currencyDisplay(lowNu)}?? ???? ???????c ??p d???ng v???i c??c tr??nh t??? c?? s??? nucleotide ??t h??n ${stringLength[1]}</td>
    </tr>`: ``;
    sumText += (g) ? `<tr>
        <td scope="col" colspan="13" class="text-start ps-5">Ph??? ph?? ${currencyDisplay(dryFee)}?? ???? ???????c ??p d???ng v???i c??c tr??nh t??? ???????c y??u c???u s???y kh?? tr?????c khi giao</td>
    </tr>`: ``;
    sumText += (h) ? `<tr>
        <td scope="col" colspan="13" class="text-start ps-5">Ph??? ph?? ${currencyDisplay(normalizationFee)}?? ???? ???????c ??p d???ng v???i c??c tr??nh t??? c?? n???ng ????? t??y ch???nh</td>
    </tr>`: ``;
    sumText += `<tr>
        <td scope="col" colspan="13" rowspan="3" class="text-start ps-5">C??c chu???i nucleotide sau khi s???n xu???t theo quy tr??nh ti??u chu???n c???a Ph?? Sa genomics s??? ???????c s???p x???p v?? ????ng g??i v??o c??c h???p tr?????c khi giao h??ng. Ph?? Sa genomics t???m t??nh quy c??ch ????ng g??i ${e} h???p ${d} cho ${productArr.length} chu???i nucleotide ???? nh???p. Quy c??ch n??y c?? th??? thay ?????i cho ph?? h???p theo ??i???u ki???n th???c t???.</td>
    </tr>`;
    sumText += `</table>`;

    quantityOligo.value = e;
    priceOligo.value = subTotalAmount / e;
    descriptionOligo.value = showOligo.innerHTML;
    window.onbeforeunload = null;
    return sumText;
}

/*---------------------------------
X??? l?? file excel
-----------------------------------*/
var global_wb;
function to_csv(workbook) {
    var result = [];
    workbook.SheetNames.forEach(function (sheetName) {
        var csv = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);
        if (csv.length) {
            result.push(csv);
        }
    });
    return result;
};
var process_wb = (function () {
    return function process_wb(wb) {
        global_wb = wb;
        var output = to_csv(wb);
        try {
            for (key in output) {
                if (output.hasOwnProperty(key)) {
                    validateExcel.innerHTML += validateListOligo(output[key]);
                }
            }
            if (productArr.length) {
                oligoList.innerHTML = displayOligo(productArr);
                if (productArr.length >= minOligo) {
                    confirmOligo.classList.remove('d-none');
                    plateHint.innerHTML = plateHintText;
                    plateHint.classList.add('d-none');
                } else {
            plateHint.innerHTML = '<p class="text-danger">'+tooLowText+minOligo+sequence+'</p>';
                    plateHint.classList.remove('d-none');
                }
                resetForm();
            }
        } catch (e) {
            validateExcel.innerHTML = `<li>${generalErrText}</li><li>${e}</li>`;
        }
    };
})();

var do_file = (function () {
    var use_worker = true,
        use_utf8 = true;

    var xw = function xw(data, cb) {
        var worker = new Worker('../fe/js/sheetjs/xlsxworker.js');
        worker.onmessage = function (e) {
            switch (e.data.t) {
                case 'ready': break;
                case 'e': console.error(e.data.d); break;
                case 'xlsx': cb(JSON.parse(e.data.d)); break;
            }
        };
        worker.postMessage({ d: data, b: 'array', c: use_utf8 ? 65001 : void 0 });
    };

    return function do_file(files) {
        var f = files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = new Uint8Array(e.target.result);
            if (use_worker) xw(data, process_wb);
            else process_wb(XLSX.read(data, { type: 'array', codepage: use_utf8 ? 65001 : void 0 }));
        };
        reader.readAsArrayBuffer(f);
    };
})();

(function () {
    var dropZone = document.getElementById('drop-zone');
    if (!dropZone.addEventListener && !window.addEventListener) return;

    function handleDrop(e) {
        dropZoneDisplay(e, false);
        do_file(e.dataTransfer.files);
    }

    function handleDragover(e) {
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    }

    function dropZoneDisplay(e, show) {
        e.stopPropagation();
        e.preventDefault();

        var opacity = show ? '1' : '0';
        var zIndex = show ? '1' : '-1';

        dropZone.style.opacity = opacity;
        dropZone.style.zIndex = zIndex;
    }

    window.addEventListener('drop', handleDrop);
    window.addEventListener('dragover', handleDragover);
    window.addEventListener('dragenter', function (e) {
        dropZoneDisplay(e, true);
    });

    dropZone.addEventListener('dragleave', function (e) {
        dropZoneDisplay(e, false);
    });
})();

(function () {
    if (!oligoExcelInput.addEventListener) return;
    oligoExcelInput.addEventListener('change', function (e) {
        excelProcess.classList.remove('d-none');
        excelProcess.innerText = processing;
        do_file(e.target.files);
    }, false);
})();