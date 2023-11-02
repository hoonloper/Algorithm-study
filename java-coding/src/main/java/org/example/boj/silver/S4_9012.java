package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class S4_9012 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        for(int i = 0; i < n; i++) {
            String[] strs = br.readLine().split("");
            Stack<String> stack = new Stack<>();

            for(String s : strs) {
                if(stack.isEmpty() && s.equals(")")) {
                    stack.push(s);
                    break;
                }
                if(!stack.isEmpty() && stack.lastElement().equals("(") && s.equals(")")) {
                    stack.pop();
                } else if(s.equals("(")) {
                    stack.push(s);
                }
            }
            if(!stack.isEmpty()) {
                System.out.println("NO");
            } else {
                System.out.println("YES");
            }
        }
    }
}
