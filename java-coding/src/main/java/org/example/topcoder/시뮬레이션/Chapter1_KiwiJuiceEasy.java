package org.example.topcoder.시뮬레이션;

import java.util.Arrays;

public class Chapter1_KiwiJuiceEasy {
    public static void main(String[] args) {
        int[] capacities = {20, 20};
        int[] bottles = {5, 8};
        int[] fromId = {0};
        int[] toId = {1};
        int[] answer = thePouring(capacities, bottles, fromId, toId);

        // {0, 13}
        System.out.println(Arrays.toString(answer));
    }
    public static int[] thePouring(int[] capacities, int[] bottles, int[] fromId, int[] toId) {
        int size = fromId.length;

        // 옮길 주스와 기존 주스의 총합과 기존 주스 병의 용량에서 작은 값
        // 옮길 주스와 기존 주스의 총합에서 위의 값을 제외한 값
        for(int i = 0; i < size; i++) {
            int sum = bottles[fromId[i]] + bottles[toId[i]];
            bottles[toId[i]] = Math.min(sum, capacities[toId[i]]);
            bottles[fromId[i]] = sum - bottles[toId[i]];
        }

//        기존 풀이
//        for(int i = 0; i < size; i++) {
//            int to = toId[i];
//            int from = fromId[i];
//
//            int vol = Math.min(bottles[from], capacities[to] - bottles[to]);
//
//            bottles[to] += vol;
//            bottles[from] -= vol;
//        }
        return bottles;
    }
}
