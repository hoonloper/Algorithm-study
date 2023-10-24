package org.example.boj.silver;

import java.io.*;
import java.util.*;

public class S3_13414 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        String[] kl = br.readLine().split(" ");
        int k = Integer.parseInt(kl[0]);
        int l = Integer.parseInt(kl[1]);

        LinkedHashSet<String> set = new LinkedHashSet<>();
        for(int i=0; i<l; i++){
            String str = br.readLine();
            if(set.contains(str)) {
                set.remove(str);
            }
            set.add(str);
        }

        int count = 0;
        StringBuilder answer = new StringBuilder();
        for(String x : set){
            count++;
            answer.append(x).append("\n");
            if(count == k) break;
        }

        bw.write(answer.toString());

        br.close();
        bw.flush();
        bw.close();
    }
}
