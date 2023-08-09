package org.example.level1;

import java.util.Arrays;

public class K번째수 {
    public static void main(String[] args) {
        int[] array = { 1, 5, 2, 6, 3, 7, 4 };
        int[][] commands = {{2, 5, 3}, {4, 4, 1}, {1, 7, 3}};

        int len = commands.length;
        int[] answer = new int[len];

        for(int i = 0; i < len; i++) {
            int[] newArr = Arrays.copyOfRange(array, commands[i][0] - 1, commands[i][1]);
            Arrays.sort(newArr);
            System.out.println(Arrays.toString(newArr) + commands[i][0] + commands[i][1] +commands[i][2]);
            answer[i] = newArr[commands[i][2] - 1];
        }

        System.out.println(Arrays.toString(answer));
    }
}