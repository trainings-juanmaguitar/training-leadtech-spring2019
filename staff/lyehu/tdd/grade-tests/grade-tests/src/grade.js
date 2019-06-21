function grade(gradeA, gradeB, gradeC) {
    var average = (gradeA + gradeB + gradeC) / 3;
    if (average >= 90 && average <= 100) return 'A'
    if (average >= 80 && average < 90) return 'B'
}