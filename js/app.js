let i;
let j;
let value;
value = "<table border='1' width='1000' cellspacing='2' cellpadding='3' style='margin: auto'>";
for (i=1;i<=9;i++) {
    value = value +  '<tr>';
    for (j=2;j<=9;j++){
        value = value + '<td>' + i+'x'+j +'='+ i * j + '</td>';
    }
    value = value + '</tr>';
}
value = value + '</table>';
document.write(value);
