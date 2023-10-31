package org.example.level2;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class 테이블해시함수 {
    public static void main(String[] args) {
        int[][] data = new int[][]{{2,2,6},{1,5,10},{4,2,9},{3,8,3}};
        int col = 2;
        int row_begin = 2;
        int row_end = 3;
        System.out.println(solution(data,col,row_begin,row_end));
    }

    private static int solution(int[][] data, int col, int row_begin, int row_end) {
        Integer[][] table = new Integer[data.length][data[0].length];

        for(int i = 0; i < data.length; i++) {
            for(int j = 0; j < data[i].length; j++) {
                table[i][j] = data[i][j];
            }
        }

        Arrays.sort(table, (a, b) -> {
            if(a[col - 1].equals(b[col - 1])) {
                return b[0] - a[0];
            }
            return a[col - 1] - b[col - 1];
        });


        List<Integer> modResult = getModResult(table, row_begin, row_end);
        return getXOR(modResult);
    }

    private static List<Integer> getModResult(Integer[][] data, int row_begin, int row_end) {
        List<Integer> result = new ArrayList<>();

        for (int i = row_begin; i <= row_end; i++) {
            int sum = 0;
            for (int j = 0; j < data[0].length; j++) {
                sum += data[i - 1][j] % i;
            }
            result.add(sum);
        }

        return result;
    }

    private static int getXOR(List<Integer> modResult) {
        int sum = modResult.get(0);

        for (int i = 1; i < modResult.size(); i++) {
            sum ^= modResult.get(i);
        }

        return sum;
    }
}
