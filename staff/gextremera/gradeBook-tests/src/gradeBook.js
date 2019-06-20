function gradeBook(score1, score2, score3) {
    let average = (score1 + score2 + score3)/3;
    if(average >= 0 && average < 60) return 'F';
    else if (average >= 60 && average < 70) return 'D';
    else if (average >= 70 && average < 80) return 'C';
    else if (average >= 80 && average < 90) return 'B';
    else return 'A';
}
