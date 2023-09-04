package org.example.topcoder.bruteforce;

import java.util.*;

public class Ten_NumberMagicEasy {
    private static int[][] card = {
            {1, 2, 3, 4, 5, 6, 7, 8},
            {1, 2, 3, 4, 9, 10, 11, 12},
            {1, 2, 5, 6, 9, 10, 13, 14},
            {1, 3, 5, 7, 9, 11, 13, 15}
    };
    public static void main(String[] args) {
        String[] input = {"YNYY", "YNNN", "NNNN", "YYYY", "NYNY"};
        for(String in : input) {
            int answer = theNumber(in);
            System.out.println(answer);
        }

    }
    //  답
    private static int theNumber(String answer) {
        for(int i = 1; i <= 16; i++) {
            if(check(card[0], i) != answer.charAt(0)) continue;
            if(check(card[1], i) != answer.charAt(1)) continue;
            if(check(card[2], i) != answer.charAt(2)) continue;
            if(check(card[3], i) != answer.charAt(3)) continue;
            return i;
        }
        return 0;
    }
    private static char check(int[] x, int number) {
        for(int n: x) {
            if(n == number) return 'Y';
        }
        return 'N';
    }
    // 초기 답(Y, N 순서 정렬 귀찮아서 그냥 반복 두번 돌음)
//    private static int theNumber(String answer) {
//        if(answer.equals("YYYY")) {
//            return 1;
//        }
//        if(answer.equals("NNNN")) {
//            return 16;
//        }
//        List<Boolean> list = new ArrayList<>();
//        for(int i = 0; i <= 20; i++) {
//            list.add(false);
//        }
//
//        String[] strs = answer.split("");
//        for(int i = 0; i < strs.length; i++) {
//            boolean isOk = strs[i].equals("Y");
//            if(isOk) {
//                for(int j = 0; j < card[i].length; j++) {
//                    list.set(card[i][j], isOk);
//                }
//            }
//        }
//        for(int i = 0; i < strs.length; i++) {
//            boolean isOk = strs[i].equals("N");
//            if(isOk) {
//                for(int j = 0; j < card[i].length; j++) {
//                    list.set(card[i][j], false);
//                }
//            }
//        }
//        System.out.println(list.toString());
//        return list.indexOf(true);
//    }
}
