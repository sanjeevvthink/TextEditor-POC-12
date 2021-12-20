import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';

fdescribe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('methods', () => {

    describe('ngOnInit', () => {
      beforeEach(() => {
        component.courses = [
          {
            key: 1,
            imageSrc: 'https://source.unsplash.com/800x600/?nature',
            title: "Information Security: An path1",
            description: "This course introduces the  <mark> Muthu </mark>  of information security, best practices for keeping information safe, and what to do in the event of a breach.",
            time: "~45 Mins",
            due: "Past due 23 Sep 2021",
            progress: "InProgress"
          },
          {
            progress: "InProgress",
            collapse: false,
            expand: true,
            key: 2,
            imageSrc: 'https://source.unsplash.com/800x600/?car',
            title: "Information Security: An gghdgvhcbjc2",
            description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
            time: "~45 Mins",
            due: "Past due 23 Sep 2021",
            linked: [
              {
                imageSrc: 'https://source.unsplash.com/800x600/?moto',
                title: "expand Course 2.1",
                description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
                time: "~45 Mins",
                due: "Past due 23 Sep 2021"
              },
              {
                imageSrc: 'https://source.unsplash.com/800x600/?fantasy',
                title: "expand Course 2.2",
                description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
                time: "~45 Mins",
                due: "Past due 23 Sep 2021"
              },
            ]
          },
          {
            key: 3,
            imageSrc: 'https://source.unsplash.com/800x600/?moto',
            title: "Information gdtss: An yrrevd3",
            description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
            time: "~45 Mins",
            due: "Past due 23 Sep 2021"
          },
        ] as any;
      });
      it('Loading datas in the carousel', () => {
        const swiperCarousels = 0

        component.ngOnInit();
        expect(swiperCarousels).toBeTruthy;
      });
    });
    describe('dataUnitTesting', () => {
      it('should call pageInit when page initialising', () => {
        component.dataUnitTesting();

        expect(component.dataUnitTesting).toBeTrue;
      });
    });
    describe('addItem', () => {
      beforeEach(() => {
      component.courses = [
        {
          key: 1,
          imageSrc: 'https://source.unsplash.com/800x600/?nature',
          title: "Information Security: An path1",
          description: "This course introduces the  <mark> Muthu </mark>  of information security, best practices for keeping information safe, and what to do in the event of a breach.",
          time: "~45 Mins",
          due: "Past due 23 Sep 2021",
          progress: "InProgress"
        },
        {
          progress: "InProgress",
          collapse: false,
          expand: true,
          key: 2,
          imageSrc: 'https://source.unsplash.com/800x600/?car',
          title: "Information Security: An gghdgvhcbjc2",
          description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
          time: "~45 Mins",
          due: "Past due 23 Sep 2021",
          linked: [
            {
              imageSrc: 'https://source.unsplash.com/800x600/?moto',
              title: "expand Course 2.1",
              description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
              time: "~45 Mins",
              due: "Past due 23 Sep 2021"
            },
            {
              imageSrc: 'https://source.unsplash.com/800x600/?fantasy',
              title: "expand Course 2.2",
              description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
              time: "~45 Mins",
              due: "Past due 23 Sep 2021"
            },
          ]
        },
        {
          key: 3,
          imageSrc: 'https://source.unsplash.com/800x600/?moto',
          title: "Information gdtss: An yrrevd3",
          description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
          time: "~45 Mins",
          due: "Past due 23 Sep 2021"
        },
      ] as any;
    });
      it('After adding the linked courses to the carousel', () => {
        component.datValuedata = 3

        component.addItem(2);
        expect(component.courses.length).toEqual(5);
      });
    });

    describe('collapseItem', () => {
      beforeEach(() => {
        component.courses = [
          {
            key: 1,
            imageSrc: 'https://source.unsplash.com/800x600/?nature',
            title: "Information Security: An path1",
            description: "This course introduces the  <mark> Muthu </mark>  of information security, best practices for keeping information safe, and what to do in the event of a breach.",
            time: "~45 Mins",
            due: "Past due 23 Sep 2021",
            progress: "InProgress"
          },
          {
            progress: "InProgress",
            collapse: false,
            expand: true,
            key: 2,
            imageSrc: 'https://source.unsplash.com/800x600/?car',
            title: "Information Security: An gghdgvhcbjc2",
            description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
            time: "~45 Mins",
            due: "Past due 23 Sep 2021",
            linked: [
              {
                imageSrc: 'https://source.unsplash.com/800x600/?moto',
                title: "expand Course 2.1",
                description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
                time: "~45 Mins",
                due: "Past due 23 Sep 2021"
              },
              {
                imageSrc: 'https://source.unsplash.com/800x600/?fantasy',
                title: "expand Course 2.2",
                description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
                time: "~45 Mins",
                due: "Past due 23 Sep 2021"
              },
            ]
          },
          {
            key: 3,
            imageSrc: 'https://source.unsplash.com/800x600/?moto',
            title: "Information gdtss: An yrrevd3",
            description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
            time: "~45 Mins",
            due: "Past due 23 Sep 2021"
          },
        ] as any;
      });
      it('After removing the child course the length course should be', () => {
        const event = 2;
        component.addItem(event);

        expect(component.courses.length).toEqual(5);
        component.collapseItem(event);
        expect(component.courses.length).toEqual(3);
      });
    });
  })
});
