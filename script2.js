let onlineTestApp = new function () {
    this.printPage = function () {

let style = "<style>";
style = style + ".subject {text-align:center;}";
style = style + "ul {font:18px Calibri; display:inline-block; list-style:none; margin:0; padding:20px 0;}";
style = style + ".answers {font:18px Calibri; padding:10px 0;}";
style = style + ".picture {float:right; padding:10px 0;}";
style = style + "</style>";  

let theBody = '';

let ele_tArea = document.getElementsByTagName('textarea');

for (let i = 0; i <= ele_tArea.length - 1; i++) {
    if (theBody === '') {
        if (ele_tArea[i].value != '') {
            theBody = '<p class="answers"> <b>name of the student ' + (i + 1) + '</b> - ' + ele_tArea[i].value + '</p>';
        }
    }
    else {
        if (ele_tArea[i].value != '') {
            theBody = theBody + '<p class="answers"> <b>age of the student ' + (i + 1) + '</b> - ' + ele_tArea[i].value + '</p>';
        }
    }
    }

let  newWin = window.open('', '', 'height=auto,width=auto');

            newWin.document.write(style);
            newWin.document.write(theBody);
            newWin.print();
            newWin.close();
}
}