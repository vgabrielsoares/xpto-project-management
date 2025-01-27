package com.xpto.projectmanagment.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;

public class TaskTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));
    private static final AtomicInteger intCount = new AtomicInteger(random.nextInt() + (2 * Short.MAX_VALUE));

    public static Task getTaskSample1() {
        return new Task().id(1L).title("title1").deadline(1);
    }

    public static Task getTaskSample2() {
        return new Task().id(2L).title("title2").deadline(2);
    }

    public static Task getTaskRandomSampleGenerator() {
        return new Task().id(longCount.incrementAndGet()).title(UUID.randomUUID().toString()).deadline(intCount.incrementAndGet());
    }
}
