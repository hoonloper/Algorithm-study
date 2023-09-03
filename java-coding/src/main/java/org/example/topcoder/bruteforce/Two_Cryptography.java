package org.example.topcoder.bruteforce;

import java.util.Arrays;

public class Two_Cryptography {
    public static void main(String[] args) {
        int[] numbers = {1000, 999, 998, 997, 996, 995};
        long answer = encrypt(numbers);

        //
        System.out.println(answer);
    }

    public static long encrypt(int[] numbers) {

        Arrays.sort(numbers);
        numbers[0] += 1;
        long mul = 1;
        for (int number : numbers) {
            mul *= number;
        }

        return mul;

        // 무식하게 전체 탐색
//        long answer = 0;
//        for(int i = 0; i < numbers.length; i++) {
//            long temp = 1;
//
//            for(int j = 0; j < numbers.length; j++) {
//                if(i == j) {
//                    temp *= (numbers[j] + 1);
//                } else {
//                    temp *= numbers[j];
//                }
//            }
//            answer = Math.max(answer, temp);
//        }
//        return answer;
    }
}
