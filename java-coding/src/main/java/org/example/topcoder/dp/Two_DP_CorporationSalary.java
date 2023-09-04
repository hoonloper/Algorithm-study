package org.example.topcoder.dp;

public class Two_DP_CorporationSalary {
    public static void main(String[] args) {
        String[] relations = {
                "NNNNNN",
                "YNYNNY",
                "YNNNNY",
                "NNNNNN",
                "YNYNNN",
                "YNNYNN"
        };
        dp(relations);
    }

    private static long[] salaries;

    private static void dp(String[] relations) {
        salaries = new long[relations.length];

        long total = 0;
        for(int i = 0; i < relations.length; i++) {
            total += getSalary(i, relations);
        }
        System.out.println(total);
    }

    private static long getSalary(int i, String[] relations) {
        if(salaries[i] == 0) {
            long salary = 0;
            String relation = relations[i];
            for(int j = 0; j < relation.length(); j++) {
                if(relation.charAt(j) == 'Y') {
                    salary += getSalary(j, relations);
                }
            }
            if(salary == 0) salary = 1;
            salaries[i] = salary;
        }
        return salaries[i];
    }
}
