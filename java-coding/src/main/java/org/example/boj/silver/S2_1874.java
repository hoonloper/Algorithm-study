package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class S2_1874 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int[] arr = new int[n];
        for(int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(br.readLine());
        }


        Stack<Integer> numStack = new Stack<>();
        StringBuilder sb = new StringBuilder();
        int num = 0;
        int idx = 0;
        while (true) {
            if(!numStack.isEmpty() && numStack.lastElement().equals(arr[idx])) {
                numStack.pop();
                sb.append("-").append("\n");
                idx++;
            } else {
                num++;
                if(num > n) {
                    break;
                }
                numStack.push(num);
                sb.append("+").append("\n");
            }
        }
        if(numStack.isEmpty()) {
            System.out.println(sb.toString());
        } else {
            System.out.println("NO");
        }
    }
}
