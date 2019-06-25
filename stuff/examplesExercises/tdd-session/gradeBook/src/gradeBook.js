function gradeBook(score1, score2, score3) {
    const average = Math.round((score1 + score2 + score3)/3)
    if (90 <= average && average<= 100) return 'A'
    if (80 <= average && average< 90) return 'B'
    if (70 <= average && average< 80) return 'C'
    if (60 <= average && average< 70) return 'D'
    return 'F'
}

// 80 <= score < 90        'B'
// 70 <= score < 80        'C'
// 60 <= score < 70        'D'
// 0 <= score < 60      