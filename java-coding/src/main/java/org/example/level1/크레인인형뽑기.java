package org.example.level1;

import java.util.Stack;

public class 크레인인형뽑기 {
    public static void main(String[] args) {
        int[][] board = {
                {0,0,0,0,0},
                {0,0,1,0,3},
                {0,2,5,0,1},
                {4,2,4,4,2},
                {3,5,1,3,1}
        };
        int[] moves = { 1,5,3,5,1,2,1,4 };

        int count = 0;
        Stack<Integer> stack = new Stack();
        int len = board.length;

        for(int move : moves) {
            for(int i = 0; i < len; i++) {
                if(board[i][move - 1] == 0) {
                    continue;
                }
                if(!stack.isEmpty() && stack.lastElement() == board[i][move-1]) {
                    count+=2;
                    stack.pop();
                } else {
                    stack.push(board[i][move-1]);
                }
                board[i][move - 1] = 0;
                break;
            }
        }
        System.out.println(count);
    }
}
