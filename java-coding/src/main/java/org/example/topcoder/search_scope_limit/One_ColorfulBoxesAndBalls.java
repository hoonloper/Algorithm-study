package org.example.topcoder.search_scope_limit;

public class One_ColorfulBoxesAndBalls {
    public static void main(String[] args) {
        int answer = getMaximum(5, 5, 464, 464, 464);

        System.out.println(answer);
    }

    private static int getMaximum(int numRed, int numBlue, int onlyRed, int onlyBlue, int bothColors) {
        int ans = Integer.MIN_VALUE;
        int change = Math.min(numRed, numBlue);

        for(int i = 0; i <= change; i++) {
            int myScore = (numRed - i) * onlyRed + (numBlue - i) * onlyBlue + 2 * i * bothColors;
            ans = Math.max(ans, myScore);
        }

        return ans;
    }
}
