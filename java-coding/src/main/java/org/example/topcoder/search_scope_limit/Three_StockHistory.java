package org.example.topcoder.search_scope_limit;

public class Three_StockHistory {
    public static void main(String[] args) {
        maximumEarnings(100,
                20,
                new String[]{
                        "40 50 60",
                        "37 48 55",
                        "100 48 50",
                        "105 48 47",
                        "110 50 52",
                        "110 50 52",
                        "110 51 54",
                        "109 49 53"
                }
        );
    }

    public static void maximumEarnings(int initialInvestment, int monthlyContribution, String[] stockPrices) {
        int money = initialInvestment;
        int month = stockPrices.length;
        int corp =stockPrices[0].split(" ").length;

        int[][] prices = new int[month][corp];

        double max = 0, profit = 0;
        double[] proportion = new double[month - 1];
        boolean[] buy = new boolean[month - 1];

        for(int i =0; i < month; i++) {
            String[] s = stockPrices[i].split(" ");
            for(int j = 0; j < corp; j++) {
                prices[i][j] = Integer.parseInt(s[j]);
            }
        }

        for(int i = month - 2; 0 <= i; i--) {
            for(int j = 0; j < corp; j++) {
                double p = 1.0 * prices[month - 1][j] / prices[i][j] - 1;

                if(0 < p && max < p) {
                    buy[i] = true;
                    max = p;
                    proportion[i] = p;
                }
            }
        }

        for(int i = 0; i < buy.length; i++) {
            if(buy[i]) {
                profit += money * proportion[i];
                money = 0;
            }
            money += monthlyContribution;
        }

        System.out.println(profit);
    }
}
