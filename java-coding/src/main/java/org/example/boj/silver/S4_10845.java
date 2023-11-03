package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;

public class S4_10845 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        Queue<Integer> queue = new LinkedList<>();
        Integer last = 0;
        for(int i = 0; i < n; i++) {
            String str = br.readLine();
            if(str.startsWith("push")) {
                String[] arr = str.split(" ");
                last = Integer.parseInt(arr[1]);
                queue.add(last);
                continue;
            }
            if(str.equals("size")) {
                System.out.println(queue.size());
                continue;
            }
            if(str.equals("empty")) {
                System.out.println(queue.isEmpty() ? 1 : 0);
                continue;
            }
            if(queue.isEmpty()) {
                System.out.println(-1);
                continue;
            }
            if(str.equals("pop")) {
                System.out.println(queue.poll());
                continue;
            }
            if(str.equals("front")) {
                System.out.println(queue.peek());
                continue;
            }
            if(str.equals("back")) {
                System.out.println(last);
            }
        }
    }
}
